<script lang="ts">
  export let src: string;

  const className = "w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";
</script>

<h2>Meme of the Day</h2>
{#if src === undefined}
  <p class={`${className} text-center`}>
    No meme today :( ... Send suggestions
  </p>
{:else}
  <img class={className} {src} alt="Meme" />
{/if}
