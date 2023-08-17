<script>
  import { onMount } from "svelte";

  const LENGTH = 5;
  const DURATION = 1000; //ms
  let current = 0;

  onMount(() => {
    setInterval(() => {
      current++;
      if (current >= LENGTH) {
        const reverse = setInterval(() => {
          current--;
          if (current <= 0) {
            clearInterval(reverse);
          }
        }, 100);
      }
    }, DURATION);

    return () => clearInterval();
  });
</script>

<div class="dots" id="dots">
  {#each Array(LENGTH).fill() as _, i}
    <span class="dot" class:current={current < i} />
  {/each}
</div>

<style>
  .dots {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-s);
  }
  .dot {
    display: block;
    width: 5px;
    height: 5px;
    background-color: #468966;
    transition: 1s;
  }

  .dot.current {
    opacity: 0;
  }
</style>
