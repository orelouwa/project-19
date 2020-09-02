var bananaImage,obstacleImage,obstacleGroup,background,backImage,
score,bananaGroup,monkey,monkey_running,ground;
var PLAY=1,END=0,gameState=PLAY;

function preload() {
bananaImage=loadImage("banana.png");
obstacleImage=loadImage("stone.png");
backImage=loadImage("jungle.jpg");
monkey_running=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png",
"Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_08.png",
"Monkey_09.png","Monkey_10.png");
}


function setup() {
  createCanvas(800,500);
background=createSprite(0,0,800,500); 
background.addImage(backImage); 
  background.scale=1.5; 
  background.x=background.width/2; 
  background.velocityX=-4;
  
 monkey=createSprite(90,300,40,50);
    monkey.addAnimation("running",monkey_running);
    monkey.scale=0.4;
 
  ground = createSprite(400,450,800,10);
    ground.velocityX=-4;
    ground.x=ground.width/2;
  ground.visible=false; 
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
    
  score=0;


}

function draw() {

  
  if (background.x < 0){
      background.x = background.width/2;
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >= 125){
   monkey.velocityY = -12 ;
  }
  monkey.velocityY = monkey.velocityY + 0.8; 
  
  if(bananaGroup.isTouching(monkey)){
  score=score+2;
  }
    
     if(obstacleGroup.isTouching(monkey)){
       obstacleGroup.setVelocityXEach (0);
       bananaGroup.setVelocityXEach (0);
       monkey.velocityX= 0;
       background.velocityX=0;
       obstacleGroup.destroyEach();
       bananaGroup.destroyEach();
  }
  
    
     bananas();
  obstacles();
    
     switch(score) {
      case 10: monkey.scale=0.6;
              break;
      case 20:monkey.scale=0.8;
              break;
      case 30: monkey.scale=0.10;
              break;
      case 40: monkey  .scale=0.12;
              break;
      case 50: monkey.scale=0.14;
              break;
      case 60: monkey.scale=0.16;
              break;
      default: break;
    }
  

  if (background.x < 0){
      background.x = background.width/2;
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
monkey.collide(ground);
    
 
drawSprites();
  
   stroke("white");    
  textSize(20);
  fill("white");
   text("Score: "+ score,500,50);
  

}

function bananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(400,120,40,10);
    banana.y = random(120,200);
    banana.addImage (bananaImage);
    banana.scale = 0.10;
    banana.velocityX = -3;
    banana.lifetime = 134;
   bananaGroup.add(banana);
}
}

function obstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,430,10,40); 
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.3;
    obstacle.lifetime=134;
    obstacle.velocityX =-3;
    obstacle.depth = monkey.depth;
    obstacleGroup.add(obstacle);
}
}
