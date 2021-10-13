<script lang="ts">
  import Header from "./Header.svelte";

  export let memes: { otd: Record<string, string> };

  const dates = Object.keys(memes.otd);

  const isArchived = (date: string) => {
    const d = new Date(date);
    d.setDate(d.getDate() - 1);
    return new Date(d) <= new Date();
  };
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
<footer class="mb-4" />
