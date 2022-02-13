<script lang="ts">
  import type { dateToString as dts } from "./date";
  import Doc from "./Doc.svelte";
  import Header from "./Header.svelte";
  import Otd from "./Otd.svelte";

  export let memes: { otd: Record<string, string> };
  export let dateToString: typeof dts;

  const today = new Date();
  const otdCode = dateToString(today, "-", true);
  const otdSrc = memes.otd[otdCode] ? `memes/${memes.otd[otdCode]}` : undefined;
</script>

<Header />
<main>
  <h2>Maths</h2>
  <div class="flex flex-col sm:flex-row flex-wrap">
    {#each ["Pure Year 1", "Pure Year 2", "Applied Year 1", "Applied Year 2"] as book}
      <Doc name={book} path={`maths/${book}`} />
    {/each}
  </div>
  <hr class="mx-auto my-8 text-dark-s opacity-50" />
  <h2>Further Maths</h2>
  <div class="flex flex-col sm:flex-row flex-wrap">
    {#each ["Further Mech", "Further Pure Year 1", "Further Pure Year 2", "Further Stats"] as book}
      <Doc name={book} path={`maths/${book}`} />
    {/each}
  </div>
  <p class="mt-12">
    The year 1 pure and stats are dodgy older versions but I'll fix them soon.
  </p>
  <hr class="mx-auto my-8 text-dark-s opacity-50" />
  <h2>GBD Booklets</h2>
  <div class="flex flex-col sm:flex-row flex-wrap">
    {#each ["Gravitational Fields", "Circular Motion", "Electric Fields", "Simple Harmonic Motion", "Capacitors", "Thermal Physics", "Magnetism"] as booklet}
      <Doc
        name={booklet}
        path={`physics/${booklet.toLowerCase().split(" ").join("_")}_GBD`}
      />
    {/each}
  </div>
  <hr class="mx-auto my-8 text-dark-s opacity-50" />
  <h2>Physics</h2>
  <div class="flex flex-col sm:flex-row flex-wrap">
    <Doc name="PiP" path="physics/PiP" />
  </div>
</main>
<hr class="mx-auto my-8 text-dark-s opacity-50" />
<section>
  <Otd src={otdSrc} />
  <p class="mt-12">
    <a class="hover:underline" href="archive.html">Meme Archive</a>
  </p>
</section>
<footer class="mb-4" />
