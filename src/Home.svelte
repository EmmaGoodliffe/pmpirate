<script lang="ts">
  import type { Firestore } from "@firebase/firestore";
  import { getMemeOtd } from "./db";
  import Doc from "./Doc.svelte";
  import Header from "./Header.svelte";
  import Loader from "./Loader.svelte";
  import Otd from "./Otd.svelte";

  export let db: Firestore;

  const today = new Date();
  const otdSrcPromise = getMemeOtd(today, db);

  const mathsBooks = [
    "Pure Year 1",
    "Pure Year 2",
    "Applied Year 1",
    "Applied Year 2",
  ];
  const furtherMathsBooks = [
    "Further Mech",
    "Further Pure Year 1",
    "Further Pure Year 2",
    "Further Stats",
  ];
  const gbdBooklets = [
    "Gravitational Fields",
    "Circular Motion",
    "Electric Fields",
    "Simple Harmonic Motion",
    "Capacitors",
    "Thermal Physics",
    "Magnetism",
    "Nuclear Physics",
    "Radioactivity",
    "Astrophysics",
  ];
</script>

<Header />
<main>
  <h2>Maths</h2>
  <div class="book-section">
    {#each mathsBooks as book}
      <Doc name={book} path={`maths/${book}`} />
    {/each}
  </div>
  <hr />
  <h2>Further Maths</h2>
  <div class="book-section">
    {#each furtherMathsBooks as book}
      <Doc name={book} path={`maths/${book}`} />
    {/each}
  </div>
  <p class="epilogue">
    The year 1 pure and stats are dodgy older versions but I'll fix them soon.
  </p>
  <hr />
  <h2>GBD Booklets</h2>
  <div class="book-section">
    {#each gbdBooklets as booklet}
      <Doc
        name={booklet}
        path={`physics/${booklet.toLowerCase().split(" ").join("_")}_GBD`}
      />
    {/each}
  </div>
  <hr />
  <h2>Physics</h2>
  <div class="book-section">
    <Doc name="Physics Year 2" path="physics/Physics Year 2" />
    <Doc name="PiP" path="physics/PiP" />
  </div>
</main>
<hr />
<section id="otd">
  <h2>Meme of the Day</h2>
  {#await otdSrcPromise}
    <Loader />
  {:then otdSrc}
    <Otd src={otdSrc} />
  {/await}
  <p class="epilogue">
    <a class="hover:underline" href="archive.html">Meme Archive</a>
  </p>
</section>
<footer />
