<script lang="ts">
  export let url = "";

  let showError = false;

  const className = "w-full sm:w-4/6 md:w-1/2 max-w-md mx-auto";
  const noMemeMessage = "Couldn't load meme :(";

  // Reset error when URL changes
  $: {
    url;
    showError = false;
  }
</script>

{#if url && !showError}
  <img
    class={className}
    src={url}
    alt="Meme"
    on:error={() => {
      showError = true;
      console.log("Detected error");
    }}
  />
{:else}
  <p class={`${className} text-center`}>
    <slot>{noMemeMessage}</slot>
  </p>
{/if}
