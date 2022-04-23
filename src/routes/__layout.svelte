<script lang="ts">
  import { onMount } from 'svelte'
  import '$src/app.css'
  import Footer from '$components/Footer.svelte'
  import { fade } from 'svelte/transition'

  let ready: boolean = false

  onMount(() => (ready = true))
</script>

{#if ready}
  <div transition:fade class="container">
    <slot />
    <Footer />
  </div>
{/if}
