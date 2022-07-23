<script lang="ts">
  import { dateToString } from "../../functions/src/date";
  import type { Meme } from "../../functions/src/types";

  export let date: Date;
  export let meme: Meme;
  export let isTomorrow = false;
</script>

<tr>
  <td class="text-center">
    <p>{dateToString(date, "/")}</p>
    <p>
      {meme.found ? "Found by" : "By"}
      <span class="author">{meme.author}</span>
    </p>
    {#if isTomorrow}
      <p>(Sneak peek)</p>
    {/if}
  </td>
  <td>
    <img
      class="min-w-[12rem] max-w-sm mx-auto w-1/2 sm:w-auto"
      src={meme.url}
      alt="Meme"
    />
  </td>
</tr>
