<script lang="ts">
  import Header from "./Header.svelte";

  export let memes: { otd: Record<string, string> };

  const today = new Date();
  const dates = Object.keys(memes.otd);

  const toInt = (x: string) => {
    const intX = parseInt(x);
    if (!isNaN(intX)) return intX;
    const numerals = [
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
      "X",
      "XI",
      "XII",
    ];
    return numerals.indexOf(x) + 1;
  };

  const dateToString = (d: Date) => {
    const date = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${date}/${month}/${year}`;
  };

  const stringToDate = (d: string) => {
    const splitters = ["/", "-", "."];
    for (const splitter of splitters) {
      const [date, month, year] = d.split(splitter).map(toInt);
      const result = new Date(year, month - 1, date);
      if (date <= 31 && `${result}` !== "Invalid Date") return result;
    }
    for (const splitter of splitters) {
      const [year, month, date] = d.split(splitter).map(toInt);
      const result = new Date(year, month - 1, date);
      if (`${result}` !== "Invalid Date") return result;
    }
    return today;
  };

  const isArchived = (date: string) => {
    const d = new Date(date);
    d.setDate(d.getDate() - 1);
    const weekBefore = new Date();
    weekBefore.setDate(today.getDate() - 21);
    return weekBefore <= new Date(d) && new Date(d) <= today;
  };

  let dateString = dateToString(today);
</script>

<Header />
<main>
  <h2>Meme archive</h2>
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
    class="bg-bg border-white border"
    bind:value={dateString}
  />
  {#each dates as date}
    {#if dateToString(new Date(date)) === dateToString(stringToDate(dateString))}
      <img
        class="max-w-sm mx-auto w-1/2 sm:w-auto"
        src={`memes/${memes.otd[date]}`}
        alt="Meme"
      />
    {/if}
  {/each}
  <p class="mt-4">DVS-style dates accepted</p>
</section>
<footer class="mb-4" />
