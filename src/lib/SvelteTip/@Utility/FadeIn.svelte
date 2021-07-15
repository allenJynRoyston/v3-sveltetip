<script lang="ts">
	import { onMount } from 'svelte';
  import InViewport from '@utility/InViewport.svelte';

  export let show = false;
  export let condition: 'use-prop' | 'when-mounted' | 'when-inviewport' = 'when-mounted';
  export let fadeDirection: 'none' | 'up' | 'down' | 'left' | 'right' = 'none'
  export let duration = 300

  let mountReady = false;
  let fadeIn = false;

  if(condition === 'when-mounted'){
    onMount(() => {      
      mountReady = true;    
    })
  }

  const reset = async() => {
    if(condition === 'when-mounted'){
      mountReady = false;
      setTimeout(() => {
        mountReady = true;
      }, duration)
    }    
  }

  $:style = `transition: ${duration}ms;`

  $: {
    condition && reset()
  }
</script>

{#if condition === 'when-inviewport'}
  <InViewport enterViewport={() => {fadeIn = true}} >
    <div class={`fadein-ele ${fadeDirection}`} class:fadeIn {style}>
      <slot />
    </div>
  </InViewport>
{:else}
  <div class={`fadein-ele ${fadeDirection}`} class:mountFadeIn={condition === 'when-mounted' && mountReady} class:propFadeIn={condition === 'use-prop' && show} {style}>
    <slot />
  </div>
{/if}

<style lang="scss" scoped>
  .fadein-ele{
    opacity: 0;

    &.none{
      transform: translate(0, 0, 0)
    }

    &.left{
      transform: translateX(-10px)
    }    

    &.right{
      transform: translateX(10px)
    }        

    &.up{
      transform: translateY(-10px)
    }    

    &.down{
      transform: translateY(10px)
    }        

    &.mountFadeIn, &.propFadeIn, &.fadeIn{
      opacity: 1;
      transform: translateX(0) translateY(0)!important;
    }
  }
</style>
