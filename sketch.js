var bird,pillar1,pillar2,back1,back2;
var birdImage,pillar1Image,pillar2Image,back1Image,back2Image,pillar3,pillar3Image,pillar4,pillar4Image; 
var pillarsGroup,pillars2Group;
//var score;
var score = 0;
var Play = 1;
var End = 0;
var gameState = Play;

function preload(){
 birdImage = loadImage("sprites/th.3.jpg");
 pillar1Image = loadImage("sprites/pillars1.png");
 pillar2Image = loadImage("sprites/pillars2.png");
 pillar3Image = loadImage("sprites/pillars3.png");
 pillar4Image = loadImage("sprites/pillars4.jpg");
 back1Image = loadImage("sprites/background.png");
 back2Image = loadImage("sprites/winter_night.png");
}

function setup() {
  createCanvas(800,400);

  back1 = createSprite(10,10,20,20);
  back1.addImage(back1Image);
  back1.velocityX = -1;

 bird = createSprite(200,200,20,30);
 scale(0.2);
 bird.addImage(birdImage);
 
 /*pillar1 = createSprite (400,50,5,2);
 scale(0.2);
 pillar1.addImage(pillar1Image);
 pillar1.velocityX = -2;*/

 bird.setCollider("circle",0,0,35);
 bird.debug = false;

 pillarsGroup = new Group();
 pillars2Group = new Group();

}

function draw() {
  //background(0);
 
  console.log(back1.x);

  if(gameState === Play){
    score = score+ Math.round(World.frameRate/60);
  if (back1.x < 0 ){
        back1.x = back1.width/4;
      }

   if(keyDown("space")){
       bird.velocityY = -4;
   }
   bird.velocityY = bird.velocityY + 0.3;

   
    
  
    //bird.display();
    spawnPillars();
    spawnPillars1();

    if(pillarsGroup.isTouching(bird)||pillars2Group.isTouching(bird)){
      gameState = End;

   }
  }
  else if(gameState === End){
    bird.velocityY = 0; 
    back1.velocityX = 0;
    textSize(25);
    fill("red");
    text("You Lose :",380,200);
    pillarsGroup.setVelocityXEach(0);
    pillars2Group.setVelocityXEach(0);


  }
  drawSprites();
  fill("red");
  textSize = 20;
  text("Score: "+ score,450,30);
}

function spawnPillars(){
  if (frameCount % 60 === 0){
    var pillar = createSprite(800,10,5,2);
    pillar.velocityX = -2;
  
     var rand = Math.round(random(1,7));      //1,7
     switch(rand) {
       case 1: pillar.addImage(pillar1Image);
               break;
       case 2: pillar.addImage(pillar1Image);
               break;
      // case 3: pillar.addImage(pillar3Image);
        //       break;
       //case 4: pillar.addImage(pillar4Image);
         //      break;

       default: break;
     }
     
     pillar.scale = 1;
     pillar.lifetime = 400;
     pillarsGroup.add(pillar);
     pillar.debug = false;
     pillar.setCollider("rectangle",0,0,70,350);
     
}
}
              
    

     function spawnPillars1(){
        if (frameCount % 60 === 0){
          var pillar2 = createSprite(800,550,5,2);
          pillar2.velocityX = -2;
          
           var rand = Math.round(random(10,180));     //1,8
           switch(rand) {
             case 1: pillar2.addImage(pillar2Image);
                     break;
             case 2: pillar2.addImage(pillar2Image);
                     break;
             default: break;
           }
                    
           pillar2.scale = 1;
           pillar2.lifetime = 400;
           pillars2Group.add(pillar2);
           pillar2.debug = false;
           pillar2.setCollider("rectangle",0,0,70,350);
        
}

}
