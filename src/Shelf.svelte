<script lang="ts">
  import { dateToString } from "./date";

  export let date: Date;
  export let src: string;
  export let isTomorrow = false;
</script>

<tr>
  <td class="text-center">
    {dateToString(date, "/")}
    {#if isTomorrow}
      <br />
      (Sneak peek)
    {/if}
  </td>
  <td>
    <img
      class="max-w-sm mx-auto w-1/2 sm:w-auto"
      src={`memes/${src}`}
      alt="Meme"
    />
  </td>
</tr>
