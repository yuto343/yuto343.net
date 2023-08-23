<script>
  import { onMount } from "svelte";
  import IconArrow from "../../shared/icon/icon-arrow.svelte";
  let slider = null;
  let slideNum = 0;
  let currentSlide = 0;
  let windowWidth;
  let isNextDisabled = false;
  let isPrevDisabled = true;

  const toNextSlide = () => {
    isNextDisabled = false;
    isPrevDisabled = false;

    slider.scrollLeft += windowWidth;
    currentSlide++;
    if (currentSlide >= slideNum - 1) {
      isNextDisabled = true;
    }
  };
  const toPrevSlide = () => {
    isNextDisabled = false;
    isPrevDisabled = false;

    slider.scrollLeft -= windowWidth;
    currentSlide--;
    if (currentSlide <= 0) {
      isPrevDisabled = true;
    }
  };
  onMount(() => {
    slider = document.querySelector("#slider");
    slideNum = slider.children.length;
    windowWidth = window.innerWidth;
  });
</script>

<div>
  <button
    type="button"
    class="left"
    on:click={() => toPrevSlide()}
    disabled={isPrevDisabled}
  >
    <IconArrow size="24" /></button
  >
  <p>
    {#if currentSlide === 0}スマートフォンレイアウト{:else if currentSlide === 1}デスクトップレイアウト{/if}
  </p>
  <button
    type="button"
    class="right"
    on:click={() => toNextSlide()}
    disabled={isNextDisabled}
  >
    <IconArrow size="24" />
  </button>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-l);
  }
  button {
    display: grid;
    place-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid var(--color-green-700);
    background-color: var(--color-base-light);
    border-radius: 100%;
    cursor: pointer;
  }
  button:disabled {
    cursor: default;
  }
  .left {
    transform: rotate(-90deg);
  }
  .right {
    transform: rotate(90deg);
  }
</style>
