<script lang="ts">
  import { v4 as uuidv4 } from 'uuid'
  import { tasks } from '$stores/taskStore'
  import { fade } from 'svelte/transition'

  const id: any = uuidv4()
  let text: string, day: string, reminder: boolean

  interface ITask {
    id: any
    text: string
    day: string
    reminder: boolean
  }

  const handleSubmit = () => {
    if (text) {
      const newTask: ITask = {
        id,
        text,
        day,
        reminder
      }

      tasks.update(currentTasks => {
        return [...currentTasks, newTask]
      })

      text = ''
      day = ''
      reminder = false
    } else {
      alert('Please add a task')
      return
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="add-form" transition:fade>
  <div class="form-control">
    <label for="text">Task</label>
    <input type="text" placeholder="Add Task" bind:value={text} />
  </div>
  <div class="form-control">
    <label for="day">Day & Time</label>
    <input type="text" placeholder="Add Day & Time" bind:value={day} />
  </div>
  <div class="form-control form-control-check">
    <label for="reminder">Set Reminder</label>
    <input type="checkbox" bind:checked={reminder} />
  </div>
  <input type="submit" value="Save Task" class="btn btn-block" />
</form>
