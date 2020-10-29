var PLAY = 1;
var END = 0;
var gameState = PLAY;

var player_running,monkey;

var bananaImage,bananaGroup;
var obstacleImage,obstacleGroup,obstacle;
var Background;
var score=0;
var text;
//var loadAnimation;

var gameFinish,restart;


function preload (){
  Background=loadImage("jungle.jpg");
  player_running= loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaImage=loadImage("banana.png");
  obstacleImage=loadImage("stone.png");

}


function setup() {
  createCanvas(450, 400);

   ground = createSprite(200,180,400,20);
  ground.addImage("jungle.jpg",Background);
  ground.x = ground.width /2;
  ground.velocityX = -6;
  
   monkey=createSprite(20,360,20,20);
  monkey.addAnimation("running",player_running)
   monkey.scale=0.1;
  
  
  
  invisibleGround= createSprite(200,380,400,20);
  invisibleGround.velocityX = -6;
  invisibleGround.x = invisibleGround.width /3;
  invisibleGround.visible=false;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  //obstacle.setCollider("circle",0,0,40);
  

  
}

function draw() {
  background(220);
  
    if(monkey.isTouching(bananaGroup))
    {
      score=score+4;
      bananaGroup.destroyEach();
      monkey.scale=0.2;
    }
      if (keyDown("space"))
    {
      monkey.velocityY=-25;
    }
      monkey.velocityY=monkey.velocityY+2;
   
    
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   
  switch(score)
    {
      case 10: monkey.scale=0.13;
               
        break;
      case 20: monkey.scale=0.14;
        break;
      case 30:monkey.scale=0.15;
        break;
      case 40:monkey.scale=0.16;
        break;
        default:break; 
    }
  
  if(monkey.isTouching(obstacleGroup))
    {
      monkey.scale=0.1;
    }
  
  
   
  if (invisibleGround.x < 0){
      invisibleGround.x = invisibleGround.width/2;
    }
  
  
  if (keyDown("space")&& monkey.y >= 340)
    {
      monkey.velocityY=-20;
    }
 
  
  
  if (frameCount%75===0)
    {
      obstacle= createSprite(400,360,20,20);
      obstacle.velocityX=-6;
      obstacle.addImage("stone.png",obstacleImage);
      obstacle.scale=0.1;
      obstacleGroup.add(obstacle);
    }
  
  if(frameCount%100===0)
  {
    banana=createSprite(400,230,20,20);
    banana.addImage("banana.png",bananaImage);
    banana.velocityX= -6;
    banana.scale=0.05;
    bananaGroup.add(banana);
  }
  
   
  
  
  
  monkey.velocityY=monkey.velocityY+2;
  
  monkey.collide(invisibleGround);
  
  //console.log(monkey.y);
  
drawSprites();
  
  
  stroke("white"); 
  textSize(15);
  fill("white");
  text("Score:"+ score, 330,50);
  textFont("Alabria");
 
  
}










