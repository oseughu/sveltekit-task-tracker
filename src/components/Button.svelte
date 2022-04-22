<script lang="ts">
  export let text: string
  export let color: string
  export let onClick: any
</script>

<button on:click={onClick} style="background-color: {color};" class="btn">
  {text}
</button>
