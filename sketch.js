
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;
var ground1,ground2,ground3;

var poly,slingShot;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

box1 = new Box(460,400);
box2 = new Box(490,400);
box3 = new Box(520,400);
box4 = new Box(550,400);
box5 = new Box(580,400);
box6 = new Box(610,400);
box7 = new Box(640,400);

box8 = new Box(490,360);
box9 = new Box(520,360);
box10 = new Box(550,360);
box11 = new Box(580,360);
box12 = new Box(610,360);

box13 = new Box(520,320);
box14 = new Box(550,320);
box15 = new Box(580,320);

box16 = new Box(550,280);

box17 = new Box(840,220);
box18 = new Box(870,220);
box19 = new Box(900,220);
box20 = new Box(930,220);
box21 = new Box(960,220);

box22 = new Box(870,180);
box23 = new Box(900,180);
box24 = new Box(930,180);

box25 = new Box(900,140);

poly = new player(210,300);

ground1 = new Ground(600,600,1200,10);
ground2 = new Ground(550,430,280,10);
ground3 = new Ground(900,250,320,10);

slingShot = new SlingShot(poly.body,{x: 200, y: 310});


}

function draw() {
  background(50);  
  Engine.update(engine);
  
strokeWeight(1.5);
stroke(0);
  fill("lightblue")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  fill("lightpink")
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
    
box25.display();

  fill("#99fadc");
  box13.display();
  box14.display();
  box15.display();
  
  box22.display();
  box23.display();
  box24.display();

  poly.display();
  
  fill(127);
  box16.display();

  stroke("lightblue");
  slingShot.display();

  

  ground1.display();
  ground2.display();
  ground3.display();

  fill(255);
  textSize(30);
  text("Drag the Hexagonal Stone and Release it to launch it towards the blocks",150,50);
  text("Press R key to get another chance",150,100);
}


function mouseDragged(){
  Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
  
}

function keyPressed(){
  if(keyCode === 82){
    Matter.Body.setPosition(poly.body, {x:200 , y:300});
    slingShot.rejoin();
  }
}