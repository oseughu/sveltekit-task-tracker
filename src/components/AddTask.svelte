<script lang="ts">
  let text: string
  let day: string
  let reminder: boolean

  export let onAdd: any

  const handleSubmit = () => {
    if (!text) {
      alert('Please add a task')
      return
    }

    onAdd({ text, day, reminder })

    text = ''
    day = ''
    reminder = false
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="add-form">
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
