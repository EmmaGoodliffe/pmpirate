<script lang="ts">
  import { getToday } from "../../functions/src/date";
  import type { Db } from "../../functions/src/types";
  import { getMemeOtd } from "../db";
  import Doc from "./Doc.svelte";
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  import Loader from "./Loader.svelte";
  import Meme from "./Meme.svelte";

  export let db: Db;

  const today = getToday();
  const memeOtdPromise = getMemeOtd(db, today);

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
  {#await memeOtdPromise}
    <Loader />
  {:then memeOtd}
    <Meme url={memeOtd?.url}
      >No meme today :( ... <a
        class="hover:underline"
        href="mailto:emma.goodliffe@spgs.org">Send suggestions</a
      >
      or <a class="hover:underline" href="schedule.html">upload one</a></Meme
    >
  {/await}
</section>
<hr />
<section>
  <h2>Meme Archive</h2>
  <p class="epilogue">
    <a class="hover:underline" href="archive.html">Meme Archive</a>
  </p>
</section>
<Footer />
