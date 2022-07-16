<script lang="ts">
  export let src: string;

  const className = "w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";
</script>

{#if src}
  <img class={className} src={`memes/${src}`} alt="Meme" />
{:else}
  <p class={`${className} text-center`}>
    No meme today :( ... Send suggestions
  </p>
{/if}
