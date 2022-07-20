<script lang="ts">
  import { dateToString } from "../../functions/src/date";
  import type { Meme } from "../../functions/src/types";

  export let date: Date;
  export let meme: Meme;
  export let isTomorrow = false;

  $: credit = meme.found ? "Found by" : "By";
</script>

<tr>
  <td class="text-center">
    <p>{dateToString(date, "/")}</p>
    <p>{credit} <span class="font-bold italic">{meme.author}</span></p>
    {#if isTomorrow}
      <p>(Sneak peek)</p>
    {/if}
  </td>
  <td>
    <img
      class="max-w-sm mx-auto w-1/2 sm:w-auto"
      src={`memes/${meme.url}`}
      alt="Meme"
    />
  </td>
</tr>
