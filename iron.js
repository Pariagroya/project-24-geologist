class Iron {
    constructor(x, y,r) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.2
      };
      this.body = Bodies.circle(x,y,r/2,options)
      this.r=r;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('brown')
      ellipseMode(CENTER)
      ellipse(0, 0, this.r, this.r);
      pop();
    };
  };