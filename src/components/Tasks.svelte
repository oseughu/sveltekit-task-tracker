<script lang="ts">
  import Task from '$components/Task.svelte'
  import { tasks } from '$stores/taskStore'
</script>

{#each $tasks as task (task.id)}
  <Task {task} />
{/each}
