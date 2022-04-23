<script lang="ts">
  import { scale } from 'svelte/transition'
  import { tasks } from '$src/stores/taskStore'
  import MdClose from 'svelte-icons/md/MdClose.svelte'

  export let task: any

  const handleDelete = (id: any) => {
    tasks.update(currentTasks => {
      return currentTasks.filter(task => task.id !== id)
    })
  }

  const handleToggle = (id: any) => {
    tasks.update(currentTask => {
      return currentTask.map(task => {
        if (task.id === id) {
          task.reminder = !task.reminder
        }

        return task
      })
    })
  }
</script>

<div
  transition:scale
  class={`task ${task.reminder && 'reminder'}`}
  on:dblclick={() => handleToggle(task.id)}
>
  <h3>
    {task.text}{' '}
    <div class="icon" on:click={() => handleDelete(task.id)}>
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
