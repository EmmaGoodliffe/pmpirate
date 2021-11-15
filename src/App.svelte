<script lang="ts">
  import { dateToString } from "./date";

  import Header from "./Header.svelte";
  import Otd from "./Otd.svelte";
  import Doc from "./Doc.svelte";

  export let memes: { otd: Record<string, string> };

  const today = new Date();
  const otdCode = dateToString(today, "-", true);
  const otdSrc = memes.otd[otdCode] ? `memes/${memes.otd[otdCode]}` : undefined;
</script>

<Header />
<main>
  <h2>Textbooks</h2>
  <div class="flex flex-col sm:flex-row">
    {#each ["Further Mech", "Further Pure Year 1", "Further Stats"] as book}
      <Doc name={book} path={book} />
    {/each}
  </div>
  <p class="mt-12">
    The pure and stats are dodgy older versions but I'll fix them soon.
  </p>
  <h2 class="mt-12">GBD Booklets</h2>
  <div class="flex flex-col sm:flex-row">
    {#each ["Gravitational Fields", "Circular Motion", "Electric Fields", "Simple Harmonic Motion"] as booklet}
      <Doc
        name={booklet}
        path={booklet.toLowerCase().split(" ").join("_") + "_GBD"}
      />
    {/each}
  </div>
</main>
<section class="mt-48">
  <Otd src={otdSrc} />
  <p class="mt-12">
    <a class="hover:underline" href="archive.html">Meme Archive</a>
  </p>
</section>
<footer class="mb-4" />
