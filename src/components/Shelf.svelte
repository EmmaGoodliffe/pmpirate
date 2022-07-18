<script lang="ts">
  import { dateToString } from "../../functions/src/date";
  import type { Meme } from "../db";

  export let date: Date;
  export let meme: Meme;
  export let isTomorrow = false;

  $: credit = meme.found ? "Found by" : "By";

  $: badge = meme.author === "emma.goodliffe" ? " 🏴‍☠️" : "";
</script>

<tr>
  <td class="text-center">
    <p>{dateToString(date, "/")}</p>
    <p>{credit} <span class="font-bold italic">{meme.author + badge}</span></p>
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
