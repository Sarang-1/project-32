// declaring the constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//declaring all the boxes
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var box21,box22,box23,box24,box25;

//declaring the three platforms
var ground1,ground2,ground3;

// declaring player and slingshot
var poly,slingShot;

//the backgrounds
var backgroundImg,back2,back;

// declaring gamestate
var gamestate;

// variables for score and background sound
var bgsound,score=0;

// for the icons
var giveup, instructions, start;

// and the icon images
var giveupimg, instructionsimg, startimg;

// box necessary in playing the sound only once
var box;

//the world time
var hours;

function preload(){

  // getting the background images as per the world time
  getTime();

  //loading background sound
  bgsound = loadSound("bg.mp3");

  //loading the icon images
  instructionsimg = loadImage("images/instructions.png");
  giveupimg = loadImage("images/GiveUp.png");
  startimg = loadImage("images/start.png");

  //loading the first window background
  back = loadImage("images/background.jpg")
}




function setup() {
  //setting canvas size according to the devise size
  createCanvas(windowWidth,windowHeight);

  //creating engine and world
  engine = Engine.create();
  world = engine.world;

  //creating all the boxes
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


//creating the player polygon
poly = new player(210,300);

//creating three base grounds
ground1 = new Ground(width/2,600,width,10);
ground2 = new Ground(550,430,280,10);
ground3 = new Ground(900,250,320,10);


//slingshot for attaching player with a fixed point
slingShot = new SlingShot(poly.body,{x: 200, y: 310});


//setting up gamestate for different windows
gamestate = 0;


//instructions icon
instructions = createSprite(width/2,50);
instructions.addImage(instructionsimg);
instructions.scale = 0.3;
instructions.visible = false;


//give up icon
giveup = createSprite(width-150,50);
giveup.addImage(giveupimg);
giveup.scale = 0.5;
giveup.visible = false;

//start icon
start = createSprite(width/2,height-100);
start.addImage(startimg);
start.scale = 0.2;
start.visible = false;


//box for not repeating sound everytime the start button is clicked
box = createSprite(200,200,20,20);
box.visible = false;
}






function draw() {

  if(gamestate === 0){
    fill("orange");
    textSize(30);
    textFont("segoe print");
    text("try reloading the page",100,100);
    start.visible = false;
    giveup.visible = false;
    
  if(backgroundimg){
    gamestate = 1;
  }
    
  }
  
    
  // Pre game or first window code
  if(gamestate === 1 && backgroundImg){
    // the first window background
    background(back);

    // first window texts
    fill("orange");
    textSize(30);
    textFont("segoe print");
    text("1. Drag the Hexagonal Stone and Release it to launch it towards the blocks.",50,100+50);

    fill("lightgreen");
    text("2. Press SPACE key to get another chance.",50,150+50);

    fill("pink");
    text("3. Dropping each block gives you 10 points.",50,200+50);

    fill("yellow");
    text("4. Background will be set according to the time.",50,250+50);
  
    fill("lightblue");
    text("5. Press on start to continue :-",50,300+50);

    //visibility for the icons for first window
    start.visible = true;
    instructions.visible = true;
    giveup.visible = false;


    //pressing over start to continue the game
    if(mousePressedOver(start)){
      gamestate = 2;

      // visibility of icons for second window
      start.visible = false;
      instructions.visible = false;
      giveup.visible = true;

      // for playing background sound on pressing the start button
      if(box.x === 200){
        bgsound.setVolume(0.2);
        bgsound.loop();
        bgsound.play();
        box.x = 300;
      }
    }
  }
  

  //Code for starting the game
  if(backgroundImg && gamestate === 2){
  background(backgroundImg);  
  Engine.update(engine);
  
  // setting the stroke for text
  strokeWeight(1.5);
  stroke(0);
  
  //displaying all the boxes
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
  
  //displaying the player
  poly.display();

  //displaying slingshot line
  stroke("lightblue");
  slingShot.display();


  //displaying the grounds
  ground1.display();
  ground2.display();
  ground3.display();

  // for getting score on dropping each box
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();

    // some important text
    fill("orange");
    textSize(30);
    textFont("segoe print");
    text("SCORE: "+score,150,150);

    fill("lightgreen");
    text("Press SPACE key to get another chance",50,100);


    // displaying the world time
  if(hours <= 12){
  text("Time: "+ hours + " AM",550,50);
  } else if(hours > 12) {
  text("Time: "+ hours + " PM",550,50);
  } 

  
  // for returning to first window
  if(mousePressedOver(giveup)){
    gamestate = 0;
  }
  
}

//displaying the icons
drawSprites();
}




// function to launch the player hexagon
function mouseDragged(){
  Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}





// function for shooting the hexagon
function mouseReleased(){
  slingShot.fly();
  
}




// function to rejoin slingshot on pressing space
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(poly.body, {x:200 , y:300});
    slingShot.rejoin();
  }
  
}





// function to get current world time
async function getTime(){
    
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  var datetime = responseJSON.datetime;
  hours = datetime.slice(11,13);
  console.log(hours);
  
 // getting background images as per the world time
  if(hours >= 07 && hours <= 16){
      back2 = "images/day.jpg";
  } else if(hours = 07 && hours >= 05 || hours >=16 && hours <= 17){
      back2 = "images/twilight.jpg";
  } else {
      back2 = "images/night.jpg";
  }


  backgroundImg = loadImage(back2);
}
