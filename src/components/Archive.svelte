<script lang="ts">
  import {
    compoundDate,
    dateToString,
    getToday,
    getTomorrow,
    separateDate,
    stringToDate,
  } from "../../functions/src/date";
  import type { Db, MemesOfMonth } from "../../functions/src/types";
  import { firstMonth, getMemeOtd, getMemesOfMonth } from "../db";
  import Header from "./Header.svelte";
  import Loader from "./Loader.svelte";
  import Meme from "./Meme.svelte";
  import Shelf from "./Shelf.svelte";

  export let db: Db;

  const today = getToday();
  const tomorrow = getTomorrow();
  const tomorrowMemePromise = getMemeOtd(db, tomorrow);

  let [, month, year] = separateDate(today);
  let dateQuery = dateToString(today);
  let forwardsEnabled = true;
  let backwardsEnabled = true;
  let noMemes = false;

  const getArchivedMemes = async (db: Db, year: number, month: number) => {
    const memesOfMonth = (await getMemesOfMonth(year, month, db)) ?? {};
    const archivedDates = Object.keys(memesOfMonth)
      .map(x => parseInt(x))
      .sort((a, b) => a - b)
      .filter(date => compoundDate(date, month, year) <= today);
    const result: MemesOfMonth = {};
    for (const date of archivedDates) {
      result[date] = memesOfMonth[date];
    }
    return result;
  };

  $: {
    if (month < 1) {
      month = 12;
      year--;
    } else if (month > 12) {
      month = 1;
      year++;
    }
  }

  $: forwardsEnabled = !(
    separateDate(today)[1] === month && separateDate(today)[2] === year
  );

  $: backwardsEnabled = firstMonth < compoundDate(1, month, year);

  $: archivedMemesPromise = getArchivedMemes(db, year, month);

  $: memePromises = Promise.all([
    archivedMemesPromise,
    tomorrowMemePromise,
  ]).then(results => {
    const [archivedMemes, tomorrowMeme] = results;
    noMemes = !Object.keys(archivedMemes).length && !tomorrowMeme;
    return results;
  });

  // TODO: Debounce
  $: queriedMemePromise = getMemeOtd(db, stringToDate(dateQuery));
</script>

<Header />
<main class="min-w-min">
  <h2>Meme Archive</h2>
  <div class="flex sm:w-2/3 md:w-1/2 lg:w-1/4 mx-auto my-4">
    <div>
      <div
        class="flex-1 btn min-w-[3rem] max-w-[5rem] h-[3rem] max-h-full font-mono text-3xl"
        on:click={() => backwardsEnabled && month--}
        disabled={!backwardsEnabled}
      >
        <span class="-mt-1.5">&lt;</span>
      </div>
    </div>
    <p class="flex-1 my-2 text-lg text-center">
      {`${month}`.padStart(2, "0")}/{year}
    </p>
    <div>
      <div
        class="flex-1 btn min-w-[3rem] max-w-[5rem] h-[3rem] max-h-full font-mono text-3xl"
        on:click={() => forwardsEnabled && month++}
        disabled={!forwardsEnabled}
      >
        <span class="-mt-1.5">&gt;</span>
      </div>
    </div>
  </div>
  <table class="table-auto w-full max-w-4xl mx-auto border-light-sec border-2">
    <thead>
      <tr>
        <th class={"border-2" + (noMemes ? " w-1/2" : "")}>Date</th>
        <th class={"border-2" + (noMemes ? " w-1/2" : "")}>Meme</th>
      </tr>
    </thead>
    {#await memePromises}
      <tfoot>
        <Loader />
      </tfoot>
    {:then [archivedMemes, tomorrowMeme]}
      <tbody>
        {#each Object.keys(archivedMemes).map(x => parseInt(x)) as date}
          <Shelf
            date={compoundDate(date, month, year)}
            meme={archivedMemes[date]}
          />
        {/each}
        {#if tomorrowMeme && !forwardsEnabled}
          <Shelf date={tomorrow} meme={tomorrowMeme} isTomorrow={true} />
        {/if}
      </tbody>
      {#if noMemes}
        {#if month === separateDate(today)[1] && year === separateDate(today)[2]}
          <tfoot>No memes yet this month :(</tfoot>
        {:else}
          <tfoot>No memes that month :(</tfoot>
        {/if}
      {/if}
    {/await}
  </table>
</main>
<hr />
<section>
  <h2>Specify a Date</h2>
  <input type="text" bind:value={dateQuery} />
  <p class="my-4">DVS-style dates accepted</p>
  {#await queriedMemePromise}
    <Loader />
  {:then queriedMeme}
    <Meme url={queriedMeme?.url}>No memes that day :(</Meme>
  {/await}
</section>
<hr />
<section>
  <h2>Schedule a Meme</h2>
  <p class="epilogue">
    <a class="hover:underline" href="schedule.html">Schedule a Meme</a>
  </p>
</section>
<footer />
