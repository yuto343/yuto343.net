import { cubicInOut } from "svelte/easing";
import { tweened } from "svelte/motion";

// svelteのtweenedで複数要素をdelayでアニメーションさせるためのこれ
// 元ネタ : https://svelte.dev/repl/8444aa2ddb4148f6b3acbb786a2e7177?version=3.55.0

// astroのclient:visibleにより、表示時にアニメーションを実現している
type Tween = (
  node: HTMLElement,
  options: {
    duration: number;
    callback: (node: HTMLElement, value: number) => void;
    easing?: (t: number) => number;
    delay?: number;
  }
) => void;

export const tween: Tween = (
  node,
  { duration, callback, easing = cubicInOut, delay = 0 }
) => {
  const tweenedStore = tweened(0, { duration, easing });

  const unsubscribe = tweenedStore.subscribe((v) => callback(node, v));

  setTimeout(() => tweenedStore.set(1), delay);

  return {
    destroy() {
      unsubscribe();
    },
  };
};
