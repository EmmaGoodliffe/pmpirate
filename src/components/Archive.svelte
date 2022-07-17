<script lang="ts">
  import { compoundDate, dateToString, stringToDate } from "../date";
  import { Db, firstMonth, getMemeOtd, getMemesOfMonth } from "../db";
  import Header from "./Header.svelte";
  import Loader from "./Loader.svelte";
  import Shelf from "./Shelf.svelte";

  export let db: Db;

  const today = new Date();
  const tomorrow = new Date(Number(today) + 24 * 60 ** 2 * 10 ** 3);

  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let dateQuery = dateToString(today);
  let forwardsEnabled = true;
  let backwardsEnabled = true;

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
    today.getMonth() + 1 === month && today.getFullYear() === year
  );

  $: backwardsEnabled = firstMonth < compoundDate(1, month, year);

  $: archivedMemesPromise = getMemesOfMonth(year, month, db);

  $: tomorrowMemePromise = getMemeOtd(tomorrow, db);

  $: queriedMemePromise = getMemeOtd(stringToDate(dateQuery), db);
</script>

<Header />
<main>
  <h2>Meme archive</h2>
  <div class="flex sm:w-1/4 mx-auto my-4">
    <div class="w-1/4">
      <div
        class="flex-1 btn"
        on:click={() => backwardsEnabled && month--}
        disabled={!backwardsEnabled}
      >
        <span class="-mt-1.5">&lt;</span>
      </div>
    </div>
    <p class="flex-1 my-2 text-lg text-center">
      {`${month}`.padStart(2, "0")}/{year}
    </p>
    <div class="w-1/4">
      <div
        class="flex-1 btn"
        on:click={() => forwardsEnabled && month++}
        disabled={!forwardsEnabled}
      >
        <span class="-mt-1.5">&gt;</span>
      </div>
    </div>
  </div>
  <table class="table-auto w-full max-w-4xl mx-auto border-white border-2">
    <thead>
      <tr>
        <th class="border-2">Date</th>
        <th class="border-2">Meme</th>
      </tr>
    </thead>
    {#await archivedMemesPromise}
      <tfoot>
        <Loader />
      </tfoot>
    {:then archivedMemes}
      <tbody>
        {#each Object.keys(archivedMemes)
          .map(x => parseInt(x))
          .sort((a, b) => a - b) as date}
          {#if compoundDate(date, month, year) <= stringToDate(dateToString(today))}
            <Shelf
              date={compoundDate(date, month, year)}
              meme={archivedMemes[date]}
            />
          {/if}
        {/each}
        {#await tomorrowMemePromise}
          <Loader />
        {:then tomorrowMeme}
          {#if tomorrowMeme}
            <Shelf date={tomorrow} meme={tomorrowMeme} isTomorrow={true} />
          {/if}
        {/await}
      </tbody>
      {#if !Object.keys(archivedMemes).length}
        <tfoot>No memes that month :(</tfoot>
      {/if}
    {/await}
  </table>
</main>
<section class="mt-48">
  <h2>Specify a date</h2>
  <input type="text" bind:value={dateQuery} />
  {#await queriedMemePromise}
    <Loader />
  {:then queriedMeme}
    {#if queriedMeme}
      <img
        class="max-w-sm mx-auto w-1/2 sm:w-auto"
        src={`memes/${queriedMeme.url}`}
        alt="Meme"
      />
    {:else}
      <p class="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto text-center">
        No memes that day :(
      </p>
    {/if}
  {/await}
  <p class="mt-4">DVS-style dates accepted</p>
</section>
<footer />
