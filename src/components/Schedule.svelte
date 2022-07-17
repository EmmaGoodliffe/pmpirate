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
    chosenDate = options.filter(
      option => option.value >= today && option.available,
    )[0].value;
    return options;
  };
</script>

<Header />
<main>
  <h2>Schedule a Meme</h2>
  {#await optionsPromise()}
    <Loader />
  {:then options}
    <select class="font-mono" bind:value={chosenDate}>
      {#each options as option}
        <option value={option.value} disabled={!option.available}
          >{option.text}</option
        >
      {/each}
    </select>
  {/await}
</main>
<footer />
