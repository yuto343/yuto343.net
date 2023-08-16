const COLORS = ["#468966"];
export class Particle {
  // 初期座標
  x: number;
  y: number;

  // 目的地の座標
  destination: { x: number; y: number };

  // 粒子の半径
  r = 5;

  // 粒子の速度
  vx = (Math.random() - 0.5) * 20;
  vy = (Math.random() - 0.5) * 20;

  // 粒子の加速度
  accX = 0;
  accY = 0;

  // 粒子の摩擦力
  friction = Math.random() * 0.05 + 0.92;

  // 粒子の色
  color = COLORS[Math.floor(Math.random() * 6)];

  constructor(x: number, y: number, windowWidth: number, windowHeight: number) {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
    this.destination = { x, y };
  }

  changeDestination(x: number, y: number) {
    this.destination = { x, y };
  }

  render(
    context: CanvasRenderingContext2D,
    mouse: { x: number; y: number },
    radius: number
  ) {
    // 近くなればなるほど加速度は小さくなる、すなわち目標座標に近づく
    this.accX = (this.destination.x - this.x) / 1000;
    this.accY = (this.destination.y - this.y) / 1000;

    // 粒子の速度に加速度を加算
    this.vx += this.accX;
    this.vy += this.accY;

    // 粒子の速度に摩擦力を乗算
    this.vx *= this.friction;
    this.vy *= this.friction;

    // 粒子の座標位置を更新
    this.x += this.vx;
    this.y += this.vy;

    // 粒子の描画
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.r, Math.PI * 2, false);
    context.fill();

    // // 粒子の目標座標位置と現在の座標位置の距離を計算
    var a = this.x - mouse.x;
    var b = this.y - mouse.y;

    // 粒子の目標座標位置と現在の座標位置の距離が一定以下の場合
    var distance = Math.sqrt(a * a + b * b);
    if (distance < radius * 70) {
      // 粒子の目標座標位置をマウスの座標位置に更新
      this.accX = (this.x - mouse.x) / 100;
      this.accY = (this.y - mouse.y) / 100;
      this.vx += this.accX;
      this.vy += this.accY;
    }
  }
}
