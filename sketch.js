var database, game;
var car1Img, car2Img;
var car1, car2, raceTrack, cars;
var cone, barrior, obstacles, obstaclesGroup;
var playerCount, allPlayers, form, player;
var gameState = 0;

function preload(){
 car1Img = loadImage("images/car2.png");
 car2Img = loadImage("images/car3.png");
 raceTrack = loadImage("images/track.png");
 cone = loadImage("images/coneImg.png");
 barrior = loadImage("images/barriorImg.png");
}

function setup() {
  createCanvas(displayWidth - 20, displayHeight - 30);
  database = firebase.database();
  game = new Game();
  game.getState()
  game.start()
  obstaclesGroup = new Group();
}

function draw() {
  background(raceTrack);
  if(playerCount === 2){
    game.update(1)
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  
  spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
  if(frameCount%80 === 0){
     obstacles = createSprite(Math.round(random(75, 400)), 0);
     obstacles.velocityY = 6;
     rand = Math.round(random(1, 2));
  if(rand === 1){
     obstacles.addImage(cone)
  }else 
  if(rand === 2){
     obstacles.addImage(barrior)
  }
  obstacles.lifetime = 200;
  obstaclesGroup.add(obstacles);
  }
}