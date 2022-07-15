<script lang="ts">
  import { dateToString, stringToDate } from "./date";
  import { getMemeOtd, getMemesOfMonth } from "./db";
  import Header from "./Header.svelte";

  const today = new Date();
  const tomorrow = new Date(Number(today) + 24 * 60 ** 2 * 10 ** 3);
  // const dates = Object.keys(memes.otd);

  const isTomorrow = (date: Date) => {
    const diffInMilliseconds = Number(date) - Number(today);
    const diffInSeconds = diffInMilliseconds / 10 ** 3;
    const diffInHours = diffInSeconds / 60 ** 2;
    return 0 < diffInHours && diffInHours <= 24;
  };

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

  $: backwardsEnabled = new Date(2021, 9 - 1, 1) < new Date(year, month - 1, 1);

  $: tomorrowMeme = getMemeOtd(tomorrow);

  $: archivedMemes = [
    ...getMemesOfMonth(year, month),
    { date: tomorrow, meme: tomorrowMeme },
  ].filter(meme => !!meme.meme);

  $: queriedMeme = getMemeOtd(stringToDate(dateQuery));
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
    <tbody>
      <!-- {#each archivedDates as date}
        <tr>
          <td class="text-center">
            {date.split("-").reverse().join("/")}
            <br />
            {#if isTomorrow(date)}
              (Sneak peek)
            {/if}
          </td>
          <td>
            <img
              class="max-w-sm mx-auto w-1/2 sm:w-auto"
              src={getMemeOtd(date)}
              alt="Meme"
            />
          </td>
        </tr>
      {/each} -->
      {#each archivedMemes as meme}
        <tr>
          <td class="text-center">
            {dateToString(meme.date, "/")}
            {#if isTomorrow(meme.date)}
              <br />
              (Sneak peek)
            {/if}
          </td>
          <td>
            <img
              class="max-w-sm mx-auto w-1/2 sm:w-auto"
              src={meme.meme}
              alt="Meme"
            />
          </td>
        </tr>
      {/each}
    </tbody>
    {#if !archivedMemes.length}
      <tfoot class="p-4 inline-block text-center">No memes that month :(</tfoot>
    {/if}
  </table>
</main>
<section class="mt-48">
  <h2>Specify a date</h2>
  <input type="text" bind:value={dateQuery} />
  {#if queriedMeme}
    <img
      class="max-w-sm mx-auto w-1/2 sm:w-auto"
      src={queriedMeme}
      alt="Meme"
    />
  {:else}
    <p class="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto text-center">
      No memes that day :(
    </p>
  {/if}
  <p class="mt-4">DVS-style dates accepted</p>
</section>
<footer />
