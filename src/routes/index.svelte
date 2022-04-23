<script lang="ts">
  import Header from '$components/Header.svelte'
  import AddTask from '$components/AddTask.svelte'
  import Tasks from '$components/Tasks.svelte'
  import { tasks } from '$src/stores/taskStore'

  let showAddTask: boolean = false
</script>

<svelte:head>
  <title>Task Tracker</title>
</svelte:head>

<Header onAdd={() => (showAddTask = !showAddTask)} showAdd={showAddTask} />

{#if showAddTask}
  <AddTask />
{/if}

{#if $tasks.length === 0}
  <h3>No Tasks To Show.</h3>
{:else}
  <div>
    <Tasks {tasks} />
  </div>
{/if}
