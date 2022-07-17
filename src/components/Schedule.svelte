<script lang="ts">
  import {
    compoundDate,
    dateToString,
    separateDate,
    stringToDate,
  } from "../date";
  import { Db, getMemeOtd, scheduleMeme } from "../db";
  import Header from "./Header.svelte";
  import Loader from "./Loader.svelte";

  export let db: Db;

  const today = new Date();
  const [currentDate, currentMonth, currentYear] = separateDate(today);

  let chosenDate: Date = null;
  let url = "";
  let email = "";
  let found = false;

  const optionsPromise = async () => {
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
      options.filter(option => option.value >= today && option.available)[0]
        ?.value ?? null;
    return options;
  };

  const schedule = (e: Event) => {
    e.preventDefault();
    const author = email.split("@spgs.org")[0];
    // TODO: Verify email
    scheduleMeme(chosenDate, { author, found, url }, db);
  };
</script>

<Header />
<main>
  <h2>Schedule a Meme</h2>
  {#await optionsPromise()}
    <Loader />
  {:then options}
    <form class="flex flex-col justify-between max-w-sm h-60">
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
  {/await}
</main>
<footer />
