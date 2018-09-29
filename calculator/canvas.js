var canvas = document.querySelector("canvas");
canvas.height = window.innerHeight - 4;
canvas.width = window.innerWidth;
window.onresize = function(){
    canvas.height = window.innerHeight - 4;
    canvas.width = window.innerWidth;
};


var c = canvas.getContext("2d");

let particleArr = [];





function Particle(x, y, r, dx, dy, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.dx = dx;
    this.dy = dy;
    this.color = color;

    this.draw = function() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x,this.y,this.r,0,2*Math.PI);
        c.fill();
    }
    this.update = function() {
        this.x += this.dx;
        this.y += this.dy;

        if(this.x >= window.innerWidth) {
            this.x = 0-this.r;
        } 
        if(this.y >= window.innerHeight) {
            this.y = 0-this.r;
        } 

        this.draw();
    }
}

function ranColor(x) {
    if (x == "red") {
        return Math.floor(Math.random() * (220 - 100 + 1) + 100);
    }
    if (x == "green") {
        return Math.floor(Math.random() * (255 - 250 + 1) + 250);
    }
    if (x == "blue") {
        return Math.floor(Math.random() * (130 - 1 + 1) + 1);
    }
    if (x == "opacity") {
        return Math.round((Math.random() * (1 - .3 + 0) + .3)*100) / 100;
    }
}



for (let i=0; i<canvas.width/60; i++) {
    let x = Math.floor((Math.random() * window.innerWidth) + 1);
    let y = Math.floor((Math.random() * window.innerHeight) - 10);
    let r = Math.floor(Math.random() * (18 - 8 + 1) + 10);
    let dx = Math.random() * (.2 - 0.1 + .1) - 0.1;
    let dy = Math.random() * (.5 - 0.1 + .1) + 0.1;
    let color = "rgba(" + ranColor("red") + "," + ranColor("green") + "," + ranColor("blue") +  "," + ranColor("opacity") + ")";
    
    particleArr.push( new Particle (x, y, r, dx, dy, color) );
}





function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    
    for (let i = 0; i < particleArr.length; i++) {
        particleArr[i].update();
    }
}

animate();