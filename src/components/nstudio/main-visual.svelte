<script>
  import { onMount } from "svelte";
  import { Particle } from "./particle.ts";

  let copy = "Nstudio";

  let particles = [];

  let mouse = { x: 0, y: 0 };

  const onMouseMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  let canvas;
  let ctx;
  let ww;
  let wh;
  onMount(() => {
    ctx = canvas.getContext("2d");
    let amount = 0;
    let radius = 0.5;

    ww = canvas.width = window.innerWidth;
    wh = canvas.height = window.innerHeight;

    function initScene() {
      ww = canvas.width = window.innerWidth;
      wh = canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold " + ww / 10 + "px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(copy, ww / 2, wh / 2);

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
    }

    function render(a) {
      requestAnimationFrame(render);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < amount; i++) {
        particles[i].render(ctx, mouse, radius);
      }
    }

    window.addEventListener("resize", initScene);
    initScene();
    requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(render);
    };
  });
</script>

<canvas id="scene" on:mousemove={onMouseMove} bind:this={canvas} />

<style>
  canvas {
    width: 100vw;
    height: 100vh;
  }
</style>
