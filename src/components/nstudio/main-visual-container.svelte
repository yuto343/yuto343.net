<script>
  import { onMount } from "svelte";
  import MainVisual from "./main-visual.svelte";
  let isIntersecting = true;

  onMount(() => {
    const case1Elm = document.querySelector("#case1");

    const callback = (entries) => {
      entries[0].isIntersecting
        ? (isIntersecting = true)
        : (isIntersecting = false);
    };
    const observer = new IntersectionObserver(callback, {});
    observer.observe(case1Elm);
  });
</script>

<div>
  <MainVisual {isIntersecting} />
</div>
