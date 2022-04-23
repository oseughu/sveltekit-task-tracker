<script lang="ts">
  import { onMount } from 'svelte'
  import '$src/app.css'
  import Footer from '$components/Footer.svelte'
  import { fly, scale } from 'svelte/transition'

  let ready: boolean = false

  onMount(() => (ready = true))
</script>

{#if ready}
  <div in:fly={{ y: 200, duration: 2000 }} out:scale class="container">
    <slot />
    <Footer />
  </div>
{/if}
