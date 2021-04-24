class player{
    constructor(x, y,angle) {
        var options = {
            'isStatic': false,
            
            'friction':0.5,
            'density':1.0
        }
        this.body = Bodies.polygon(x, y,6,20, options);
        this.image = loadImage("hexagon (1).png");
        
        World.add(world, this.body);
      }
      display(){
        
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("yellow");
        imageMode(CENTER);
        image(this.image,0,0,30,30);
        pop();
      }
}