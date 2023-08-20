<script>
  import { onMount } from "svelte";
  import { tween } from "../../libs/tween";
  import { cubicInOut } from "svelte/easing";

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

  const letterAnimation = (node, value) => {
    node.style.opacity = value.toString();
    node.style.transform = `translateY(${(1 - value) * -20}px)`;
  };
</script>

<div
  class="container"
  use:tween={{
    duration: 2000,
    callback: letterAnimation,
    easing: cubicInOut,
    delay: 2000,
  }}
>
  <b>スクロール</b>
  <div class="dots" id="dots">
    {#each Array(LENGTH).fill() as _, i}
      <span class="dot" class:current={current < i} />
    {/each}
  </div>
</div>

<style>
  .container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--spacing-s);
    z-index: -1;
  }
  b {
    font-size: var(--fontsize-2xl);
    color: #468966;
  }
  .dot.current {
    opacity: 0;
  }
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
</style>
