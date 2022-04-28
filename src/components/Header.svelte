<script lang="ts">
  import Button from '$components/Button.svelte'

  export let onAdd: any, showAdd: boolean
</script>

<header class="header">
  <h1>Task Tracker</h1>
  <Button
    color={showAdd ? 'red' : 'green'}
    text={showAdd ? 'Close' : 'Add'}
    onClick={onAdd}
  />
</header>
