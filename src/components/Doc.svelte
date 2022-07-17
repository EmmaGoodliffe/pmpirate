<script lang="ts">
  export let name: string;
  export let path: string;
</script>

<span class="flex-1 basis-1/4 pt-2 pb-8"
  ><a class="hover:underline" href={`pdf/${path}.pdf`}>{name}</a></span
>
