<script lang="ts">
  import { page } from '$app/stores'

  const currentYear: number = new Date().getFullYear()
</script>

<footer>
  <p>&copy; Ose Ughu {currentYear}</p>

  {#if $page.url.pathname === '/'}
    <a href="/about">About</a>
  {/if}
</footer>
