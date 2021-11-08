<script lang="ts">
  export let src: string;
</script>

<h2>Meme of the Day</h2>
{#if src === undefined}
  <p class="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto text-center">
    No meme today :( ... Send suggestions
  </p>
{:else}
  <img class="w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto" {src} alt="Meme" />
{/if}
