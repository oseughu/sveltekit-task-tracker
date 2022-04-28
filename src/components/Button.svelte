<script lang="ts">
  export let text: string, color: string, onClick: any
</script>

<button on:click={onClick} style="background-color: {color};" class="btn">
  {text}
</button>
