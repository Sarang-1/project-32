class Box{
    constructor(x, y) {
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30,40, options);
        this.width = 30;
        this.height = 40;
        this.vis = 255;
        this.image = loadImage("images/block1.png");
        World.add(world, this.body);
      }
      display(){
        
        var pos = this.body.position;
        if((this.body.speed)<5){
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.width,this.height);
        } else {
          World.remove(world,this.body);
          push();
          this.vis = this.vis-5;
          translate(pos.x,pos.y);
          tint(255,this.vis);
          imageMode(CENTER);
          image(this.image,0,0,this.width,this.height);
          pop();
        }
      }
}