class player{
    constructor(x, y,angle) {
        var options = {
            'isStatic': false,
            
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.polygon(x, y,6,25, options);
        this.image = loadImage("images/hexagon (1).png");
        
        World.add(world, this.body);
      }
      display(){
        
        var pos = this.body.position;
        
        fill("yellow");
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,35,35);
        
      }
}
