<script lang="ts">
  import Header from "./Header.svelte";
  import Otd from "./Otd.svelte";
  import Textbooks from "./Textbooks.svelte";

  export let memes: { otd: Record<string, string> };

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const otdCode = `${year}-${month}-${date}`;
  const otdSrc = `memes/${memes.otd[otdCode]}`;
</script>

<Header />
<main>
  <Textbooks />
  <p class="mt-12">
    The pure and stats are dodgy older versions but I'll fix them soon.
  </p>
</main>
<section class="mt-48">
  <Otd src={otdSrc} />
  <p class="mt-12">
    <a class="hover:underline" href="archive">Meme Archive</a>
  </p>
</section>
<footer class="mb-4" />
