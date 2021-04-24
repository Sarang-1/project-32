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
        
        fill("yellow");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,30,30);
        
      }
}
