const canvas = document.getElementById("canvas");
const x = document.getElementById("x");
const y = document.getElementById("y");
const radius = document.getElementById("radius");
const dx = document.getElementById("dx");
const dy = document.getElementById("dy");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 500;

let circle = {
  x: 100,
  y: 100,
  radius: 50,
  dx: 8,
  dy: 6,
};

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  requestAnimationFrame(animate);

  x.innerHTML = circle.x;
  y.innerHTML = circle.y;
  radius.innerHTML = circle.radius;
  dx.innerHTML = circle.dx;
  dy.innerHTML = circle.dy;

  circle.dx < 0
    ? (dx.style.color = "rgb(255, 135, 135)")
    : (dx.style.color = "");

  circle.dy < 0
    ? (dy.style.color = "rgb(255, 135, 135)")
    : (dy.style.color = "");

  ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.lineWidth = 3;
  ctx.stroke();

  if (circle.x + circle.radius > canvas.width || circle.x - circle.radius < 0) {
    circle.dx = circle.dx * -1;
  }
  if (
    circle.y + circle.radius > canvas.height ||
    circle.y - circle.radius < 0
  ) {
    circle.dy = circle.dy * -1;
  }

  circle.x = circle.x + circle.dx;
  circle.y = circle.y + circle.dy;
}

animate();
