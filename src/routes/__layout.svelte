<script lang="ts">
  import { onMount } from 'svelte'
  import '$src/app.css'
  import Footer from '$components/Footer.svelte'

  let ready: boolean = false

  onMount(() => (ready = true))
</script>

{#if ready}
  <div class="container">
    <slot />
    <Footer />
  </div>
{/if}
