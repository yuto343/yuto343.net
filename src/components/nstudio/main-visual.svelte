<script>
  import { onMount } from "svelte";
  import { Particle } from "./particle.ts";
  import { sleep } from "../../libs/sleep.ts";
  import { COMPONENT_SIZE } from "../../constants.ts";

  let canvas;
  let ctx;
  let ww;
  let wh;
  let amount = 0;
  let radius = 0;
  let frame;
  let w;
  let h;

  let copy = "Nstudio";
  let particles = [];

  let mouse = { x: 0, y: 0 };

  const onMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };
  const onClick = async (e) => {
    radius += 1;
    await sleep(1 * 1000);
    radius = 0;
  };
  const initScene = () => {
    if (ctx === undefined) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = "bold " + ww / 7 + "px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText(copy, ww / 2, wh / 3);

    var data = ctx.getImageData(0, 0, ww, wh).data;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "screen";

    particles = [];
    for (var i = 0; i < ww; i += Math.round(ww / 150)) {
      for (var j = 0; j < wh; j += Math.round(ww / 150)) {
        if (data[(i + j * ww) * 4 + 3] > 150) {
          particles.push(new Particle(i, j, ww, wh));
        }
      }
    }
    amount = particles.length;
  };

  onMount(() => {
    ctx = canvas.getContext("2d");
    ww = canvas.width = w;
    wh = canvas.height = h;

    function render(a) {
      frame = requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < amount; i++) {
        particles[i].render(ctx, mouse, radius);
      }
    }

    window.addEventListener("resize", initScene);
    initScene();
    requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frame);
    };
  });
</script>

<canvas
  id="scene"
  on:mousemove={onMouseMove}
  bind:this={canvas}
  on:click={onClick}
  class="canvas"
  bind:clientHeight={h}
  bind:clientWidth={w}
/>

<style>
  canvas {
    width: 100%;
    height: 100vh;
  }
</style>
