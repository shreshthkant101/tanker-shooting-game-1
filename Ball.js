class Ball{
  constructor(x,y,radiusX,radiusY) {
    var options = {
        isStatic: true,
        density: 1.0,
        restitution: 0
    }
    this.body = Bodies.circle(x,y,radiusX,radiusY,0,options);
    this.x = x;
    this.y = y;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);

    stroke(0);
    fill("white");
    ellipse(this.x,this.y,this.radiusX,this.radiusY,0);
    
  }
};
