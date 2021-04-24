class Box{
    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':0.5,
            'density':0.3
        }
        this.body = Bodies.rectangle(x, y, 30,40, options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
      }
      display(){
        
        var pos = this.body.position;
        
        rectMode(CENTER);
        rect(pos.x,pos.y, this.width,this.height);
        
      }
}