<script lang="ts">
  import {
    compoundDate,
    dateToString,
    separateDate,
    stringToDate,
  } from "../date";
  import { Db, getMemeOtd } from "../db";
  import Header from "./Header.svelte";
  import Loader from "./Loader.svelte";

  export let db: Db;

  const today = new Date();
  const [currentDate, currentMonth, currentYear] = separateDate(today);

  let chosenDate = null;
  const optionsPromise = async () => {
    const options = await Promise.all(
      new Array(7).fill(0).map(async (x, i) => {
        const date = compoundDate(
          14 + currentDate + i,
          currentMonth,
          currentYear,
        );
        return {
          value: dateToString(date),
          text: dateToString(date),
          availabe: !(await getMemeOtd(date, db)),
        };
      }),
    );
    chosenDate = options.filter(option => option.availabe)[0].value;
    return options;
  };
</script>

<Header />
<main>
  <h2>Schedule a Meme</h2>
  {#await optionsPromise()}
    <Loader />
  {:then options}
    <select bind:value={chosenDate}>
      {#each options as option}
        <option value={option.value} disabled={!option.availabe}
          >{option.text}</option
        >
      {/each}
    </select>
  {/await}
</main>
<footer />
