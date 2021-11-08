<script lang="ts">
  import { dateToString, stringToDate } from "./date";
  import Header from "./Header.svelte";

  export let memes: { otd: Record<string, string> };

  const today = new Date();
  const dates = Object.keys(memes.otd);

  const isArchived = (date: string) => {
    const d = new Date(date);
    d.setDate(d.getDate() - 1);
    const weekBefore = new Date();
    weekBefore.setDate(today.getDate() - 28);
    return weekBefore <= new Date(d) && new Date(d) <= today;
  };

  let dateString = dateToString(today);
  $: matchingDates = dates.filter(
    date =>
      dateToString(new Date(date)) === dateToString(stringToDate(dateString)),
  );
</script>

<Header />
<main>
  <h2>Meme archive</h2>
  <p class="my-2">The last month</p>
  <table class="table-auto w-full max-w-4xl mx-auto border-white border-2">
    <thead>
      <tr>
        <th class="border-2">Date</th>
        <th class="border-2">Meme</th>
      </tr>
    </thead>
    <tbody>
      {#each dates as date}
        {#if isArchived(date)}
          <tr>
            <td class="text-center border-2 p-4">
              {date.split("-").reverse().join("/")}
              <br />
              {#if new Date(date) > new Date()}
                (Sneak peek)
              {/if}
            </td>
            <td class="border-2 p-4">
              <img
                class="max-w-sm mx-auto w-1/2 sm:w-auto"
                src={`memes/${memes.otd[date]}`}
                alt="Meme"
              />
            </td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</main>
<section class="mt-48">
  <h2>Specify a date</h2>
  <input
    type="text"
    class="bg-bg border-white border px-2 py-1"
    bind:value={dateString}
  />
  {#if matchingDates.length}
    <img
      class="max-w-sm mx-auto w-1/2 sm:w-auto"
      src={`memes/${memes.otd[matchingDates[0]]}`}
      alt="Meme"
    />
  {:else}
    <p class="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto text-center">
      No memes that day :(
    </p>
  {/if}
  <p class="mt-4">DVS-style dates accepted</p>
</section>
<footer class="mb-4" />
