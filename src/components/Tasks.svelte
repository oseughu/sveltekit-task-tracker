<script lang="ts">
  import Task from '$components/Task.svelte'
  export let tasks: any[]
  export let onDelete: any
  export let onToggle: any
</script>

{#each tasks as task (task.id)}
  <Task {task} {onDelete} {onToggle} />
{/each}
