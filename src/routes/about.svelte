<script>
  import { fade, fly } from 'svelte/transition'
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<div in:fly={{ y: 200, duration: 2000 }} out:fade>
  <header class="header">
    <h1>About</h1>
  </header>
  <h4>Version 1.1</h4>
  <a href="/">Go Back</a>
</div>
