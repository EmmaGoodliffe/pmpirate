<script lang="ts">
  export let name: string;
  export let path: string;
</script>

<span class="flex-1 py-2"
  ><a class="hover:underline" href={`pdf/${path}.pdf`}>{name}</a></span
>
