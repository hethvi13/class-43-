var canvas, backgroundImage;
var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var obi
var ob 
var w, h 
var obGroup
var sliding
var PassedFinishLine
var b_img, s_img, g_img  

function preload(){
  track = loadImage("images/track.png");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  obi = loadImage("images/f1.png");
  sliding = loadSound("sound/sliding.mp3")
  b_img = loadImage("images/bronze.png")
  s_img = loadImage("images/silver.png")
  g_img = loadImage("images/gold.png")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  obGroup = createGroup();
  for(var i = 0; i<5; i++){
    w = random(200, 900)
    h = random(-height*4, height - 300)
    ob = createSprite(w, h);
    ob.addImage(obi)
    obGroup.add(ob)
  }
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 && finishedPlayers === 0 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }
  if(finishedPlayers === 4){
    game.update(2)
  }
  }
 
  
