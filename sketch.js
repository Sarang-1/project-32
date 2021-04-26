
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

box1 = new blueb(460,400);
box2 = new blueb(490,400);
box3 = new blueb(520,400);
box4 = new blueb(550,400);
box5 = new blueb(580,400);
box6 = new blueb(610,400);
box7 = new blueb(640,400);

box8 = new pinkb(490,360);
box9 = new pinkb(520,360);
box10 = new pinkb(550,360);
box11 = new pinkb(580,360);
box12 = new pinkb(610,360);

box13 = new greenb(520,320);
box14 = new greenb(550,320);
box15 = new greenb(580,320);

box16 = new greyb(550,280);

box17 = new blueb(840,220);
box18 = new blueb(870,220);
box19 = new blueb(900,220);
box20 = new blueb(930,220);
box21 = new blueb(960,220);

box22 = new greenb(870,180);
box23 = new greenb(900,179);
box24 = new greenb(930,180);

box25 = new pinkb(900,140);

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
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  
  poly.display();

  stroke("lightblue");
  slingShot.display();

  ground1.display();
  ground2.display();
  ground3.display();

  fill(255);
  textSize(30);
  text("Drag the Hexagonal Stone and Release it to launch it towards the blocks",150,50);
  text("Press SPACE key to get another chance",150,100);
}


function mouseDragged(){
  Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
  
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(poly.body, {x:200 , y:300});
    slingShot.rejoin();
  }
}