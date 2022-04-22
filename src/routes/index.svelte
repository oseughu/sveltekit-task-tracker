<script context="module">
  export async function load() {
    try {
      const tasksFromServer = await fetch(
        'https://my-json-server.typicode.com/oseughu/sveltekit-task-tracker/tasks'
      ).then(res => res.json())
      return {
        props: { tasks: tasksFromServer }
      }
    } catch (error) {
      console.error(error)
    }
  }
</script>

<script lang="ts">
  import { fade, scale } from 'svelte/transition'
  import Header from '$components/Header.svelte'
  import AddTask from '$components/AddTask.svelte'
  import Tasks from '$components/Tasks.svelte'

  export let tasks: any[]
  let showAddTask: boolean = false

  // Fetch Task
  const fetchTask = async (id: number) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/oseughu/sveltekit-task-tracker/tasks/${id}`
    )
    const data = await res.json()

    return data
  }

  // Add Task
  const addTask = async (task: any) => {
    const res = await fetch(
      'https://my-json-server.typicode.com/oseughu/sveltekit-task-tracker/tasks',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      }
    )

    const data = await res.json()

    tasks = [...tasks, data]
  }

  // Delete Task
  const deleteTask = async (id: number) => {
    await fetch(
      `https://my-json-server.typicode.com/oseughu/sveltekit-task-tracker/tasks/${id}`,
      {
        method: 'DELETE'
      }
    )

    const newTasks = [...tasks]

    newTasks.splice(tasks.indexOf(id), 1)

    tasks = newTasks
  }

  // Toggle Reminder
  const toggleReminder = async (id: number) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(
      `https://my-json-server.typicode.com/oseughu/sveltekit-task-tracker/tasks/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      }
    )

    const data = await res.json()

    tasks = tasks.map(task =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    )
  }
</script>

<svelte:head>
  <title>Task Tracker</title>
</svelte:head>

<Header onAdd={() => (showAddTask = !showAddTask)} showAdd={showAddTask} />

{#if showAddTask}
  <AddTask onAdd={addTask} />
{/if}

{#if tasks.length === 0}
  <h3>No Tasks To Show.</h3>
{:else}
  <div in:scale out:fade={{ duration: 300 }}>
    <Tasks {tasks} onDelete={deleteTask} onToggle={toggleReminder} />
  </div>
{/if}
