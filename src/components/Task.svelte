<script lang="ts">
  import MdClose from 'svelte-icons/md/MdClose.svelte'

  export let task: any
  export let onDelete: any
  export let onToggle: any
</script>

<div
  class={`task ${task.reminder && 'reminder'}`}
  on:dblclick={() => onToggle(task.id)}>
  <h3>
    {task.text}{' '}
    <div class="icon" on:click={() => onDelete(task.id)}>
      <MdClose />
    </div>
  </h3>
  <p>{task.day}</p>
</div>

<style>
  .icon {
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
    color: red;
    width: 32px;
    height: 32px;
  }
</style>
