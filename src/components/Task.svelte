<script lang="ts">
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
    <button on:click="{() => onDelete(task.id)}"> X </button>
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
