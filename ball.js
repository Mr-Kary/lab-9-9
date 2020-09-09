function Ball() {
    this.radius = 20;
    this.x = (Math.random() * (canvas.width - 2*this.radius)) + this.radius;
    this.y = (Math.random() * (canvas.height - 2*this.radius)) + this.radius;
    this.dx = (Math.random() * 8) -4;
    this.dy = (Math.random() * 8) -4;

}

// Update the location of the ball, keeping it within the bounds of the canvas
Ball.prototype.update = function() {
    this.x += this.dx;
    if(this.x - this.radius < 0){
        this.dx = -this.dx;
    }
    if(this.x + this.radius > canvas.width){
        this.dx = -this.dx;
    }
    this.y += this.dy;
    if(this.y - this.radius < 0){
        this.dy = -this.dy;
    }
    if(this.y + this.radius > canvas.height){
        this.dy = -this.dy;
    }
}

// Draw the ball
Ball.prototype.render = function(){
    context.strokeStyle = "red";
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
    context.stroke();
}
