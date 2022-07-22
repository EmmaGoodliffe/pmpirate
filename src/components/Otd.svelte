<script lang="ts">
  import type { Meme } from "../../functions/src/types";

  export let meme: Meme;
  export let noMemeMessage: string;

  const className = "w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";
</script>

{#if meme}
  <img class={className} src={meme.url} alt="Meme" />
{:else}
  <p class={`${className} text-center`}>{noMemeMessage}</p>
{/if}
