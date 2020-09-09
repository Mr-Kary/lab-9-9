window.addEventListener("load", init);

var canvas, context, ball;

function init() {
    canvas = document.getElementById('cnv');
    canvas.style.border = "2px solid black";
    context = canvas.getContext("2d");
    ball = new Ball();
    console.log(ball);
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0,0,canvas.width, canvas.height);
    ball.update();
    ball.render();
}
