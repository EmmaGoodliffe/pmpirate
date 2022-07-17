<script lang="ts">
  import type { Meme } from "../db";

  export let meme: Meme;

  const className = "w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";
</script>

{#if meme}
  <img class={className} src={`memes/${meme.url}`} alt="Meme" />
{:else}
  <p class={`${className} text-center`}>
    No meme today :( ... Send suggestions
  </p>
{/if}
