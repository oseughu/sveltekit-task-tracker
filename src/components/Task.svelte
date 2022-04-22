<script lang="ts">
  import Fa from 'svelte-fa'
  import { faTimes } from '@fortawesome/free-solid-svg-icons'

  export let task: any
  export let onDelete: any
  export let onToggle: any
</script>

<div
  class="{`task ${task.reminder && 'reminder'}`}"
  on:dblclick="{() => onToggle(task.id)}"
>
  <h3>
    {task.text}{' '}
    <button on:click="{() => onDelete(task.id)}">
      <Fa icon="{faTimes}" size="2x" color="red" />
    </button>
  </h3>
  <p>{task.day}</p>
</div>

<style>
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
</style>
