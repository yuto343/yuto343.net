import type { Action } from "svelte/action";

export const sticky: Action = (node) => {
  // 1. 交差を検知する要素を取得
  const stickySensor = document.querySelector("#sticky-sensor");
  if (stickySensor === null) {
    console.error("sticky-sensor not found! at libs/sticky.js");
    return;
  }

  // 2. 交差を検知したら発火するコールバックの作成
  const callback = (entries: IntersectionObserverEntry[]) => {
    // only observing one item at a time
    const entry = entries[0];
    let isStuck = !entry.isIntersecting;

    node.dispatchEvent(
      new CustomEvent("stuck", {
        detail: { isStuck },
      })
    );
  };

  // 3. IntersectionObserverを作成し、交差を監視
  const intersectionObserver = new IntersectionObserver(callback, {});
  intersectionObserver.observe(stickySensor);
  return {
    destroy() {
      intersectionObserver.disconnect();
    },
  };
};
