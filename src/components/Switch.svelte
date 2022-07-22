<script lang="ts">
  export let state = false;
  export let onUpdate: (state: boolean) => void;
</script>

<div
  class="switch"
  class:off={!state}
  class:on={state}
  on:click={() => {
    state = !state;
    onUpdate(state);
  }}
>
  <div class="switch-indicator" />
</div>
