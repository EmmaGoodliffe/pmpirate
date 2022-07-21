<script lang="ts">
  import {
    compoundDate,
    dateToString,
    getToday,
    separateDate,
  } from "../../functions/src/date";
  import type { Db } from "../../functions/src/types";
  import { getMemeOtd, submitMeme } from "../db";
  import Header from "./Header.svelte";
  import Loader from "./Loader.svelte";

  export let db: Db;

  const today = getToday();
  const [currentDate, currentMonth, currentYear] = separateDate(today);

  let chosenDate: Date = null;
  let files: FileList;
  let path = "";
  let email = "";
  let found = false;
  let isLoading = false;
  let message = "";

  const getOptions = async () => {
    const options = (
      await Promise.all(
        new Array(11).fill(0).map(async (_x, i) => {
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
      options.filter(option => option.value >= today && option.available)[0]
        ?.value ?? null;
    return options;
  };

  const optionsPromise = getOptions();

  const schedule = async (e: Event) => {
    e.preventDefault();
    isLoading = true;
    const buffer = await files[0].arrayBuffer();
    const fileBase64 = window.btoa(
      String.fromCharCode(...new Uint8Array(buffer)),
    );
    const meme = {
      path,
      email,
      fileBase64,
      found,
    };
    try {
      const response = await submitMeme(chosenDate, meme);
      message = response.data.message;
      isLoading = false;
    } catch (err) {
      isLoading = false;
      if (
        err.code === "functions/invalid-argument" ||
        err.code === "functions/out-of-range"
      ) {
        message = "That date is unavailable";
        console.warn(err);
      } else {
        message = "Something went wrong";
        throw err;
      }
    }
  };
</script>

<Header />
<main>
  <h2>Schedule a Meme</h2>
  {#await optionsPromise}
    <Loader />
  {:then options}
    <div class="max-w-sm">
      <form class="flex flex-col justify-between h-72">
        <select class="font-mono" bind:value={chosenDate}>
          {#each options as option}
            <option value={option.value} disabled={!option.available}
              >{option.text}</option
            >
          {/each}
        </select>
        <input type="file" bind:files />
        <!-- TODO: Explain in UI -->
        <input type="text" placeholder="Path" bind:value={path} />
        <input type="email" placeholder="SPGS email" bind:value={email} />
        <div>
          <!-- TODO: Explain in UI -->
          <label for="found-box">Found:</label>
          <input type="checkbox" id="found-box" bind:checked={found} />
        </div>
        {#if isLoading}
          <Loader />
        {:else}
          <button class="btn px-4 py-2" on:click={schedule}>Schedule</button>
        {/if}
      </form>
      <p class="epilogue">{message}</p>
    </div>
  {/await}
</main>
<footer />
