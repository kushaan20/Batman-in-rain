class Drop {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r = 5;
      
        this.body = Bodies.circle(x, y, 5,options);       
        this.color= "blue";
        World.add(world, this.body);

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, 5, 5);
        pop();
    }

};


        
