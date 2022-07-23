<script lang="ts">
  export let url = "";
  export let width: number = NaN;

  let showError = false;

  let className = "mx-auto w-full sm:w-4/6 md:w-1/2";
  isNaN(width) && (className += " max-w-md");
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
    style={width ? `width: ${width}px` : ""}
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
