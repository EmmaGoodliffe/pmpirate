<script lang="ts">
  export let url = "";
  export let noMemeMessage: string;

  const className = "w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";
</script>

{#if url}
  <img class={className} src={url} alt="Meme" />
{:else}
  <p class={`${className} text-center`}>{noMemeMessage}</p>
{/if}
