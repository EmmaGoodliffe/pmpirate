<script lang="ts">
  import {
    compoundDate,
    dateToString,
    normaliseDate,
    separateDate,
  } from "../../functions/src/date";
  import type { Db } from "../../functions/src/types";
  import { getMemeOtd, submitMeme } from "../db";
  import Header from "./Header.svelte";
  import Loader from "./Loader.svelte";

  export let db: Db;

  const today = new Date();
  const [currentDate, currentMonth, currentYear] = separateDate(today);

  let chosenDate: Date = null;
  let url = "";
  let email = "";
  let found = false;
  let isLoading = false;
  let message = "";

  const getOptions = async () => {
    const options = (
      await Promise.all(
        new Array(11).fill(0).map(async (x, i) => {
          const date = compoundDate(
            currentDate + i - 2,
            currentMonth,
            currentYear,
          );
          const option = {
            value: date,
            text: dateToString(date),
            available: !(await getMemeOtd(date, db)),
          };
          return dateToString(option.value) === dateToString(today)
            ? [
                { value: null, text: "".padStart(10, "-"), available: false },
                option,
              ]
            : option;
        }),
      )
    ).flat();
    chosenDate =
      options.filter(
        option => option.value >= normaliseDate(today) && option.available,
      )[0]?.value ?? null;
    return options;
  };

  const optionsPromise = getOptions();

  const schedule = (e: Event) => {
    e.preventDefault();
    isLoading = true;
    submitMeme(chosenDate, { email, url, found })
      .then(response => {
        message = response.data.message;
        isLoading = false;
      })
      .catch(err => {
        if (
          err.code === "functions/invalid-argument" ||
          err.code === "functions/out-of-range"
        ) {
          isLoading = false;
          message = "That date is unavailable";
          console.warn(err);
        } else {
          isLoading = false;
          message = "Something went wrong";
          throw err;
        }
      });
    isLoading = true;
  };
</script>

<Header />
<main>
  <h2>Schedule a Meme</h2>
  {#if isLoading}
    <Loader />
  {:else}
    {#await optionsPromise}
      <Loader />
    {:then options}
      <div class="max-w-sm">
        <form class="flex flex-col justify-between h-60">
          <select class="font-mono" bind:value={chosenDate}>
            {#each options as option}
              <option value={option.value} disabled={!option.available}
                >{option.text}</option
              >
            {/each}
          </select>
          <input type="text" placeholder="URL" bind:value={url} />
          <input type="email" placeholder="Email" bind:value={email} />
          <div>
            <label for="found-box">Found:</label>
            <input type="checkbox" id="found-box" bind:value={found} />
          </div>
          <button class="btn px-4 py-2" on:click={schedule}>Schedule</button>
        </form>
        <p class="epilogue">{message}</p>
      </div>
    {/await}
  {/if}
</main>
<footer />
