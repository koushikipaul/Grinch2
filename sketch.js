var back_image,back,girlImage,boyImage,back1_image,back1;
var player1,player2;
var back_santa1,back_santa;
var choose,choose_image;
var san,san_image;
var side1,side2;
var score = 0;
var life = 3;
var bas,bas_image,bas1;
var gift1_image,gift2_image,gift3_image;
var GrinchGroup,grinch_image;
var gamegrinch,gamegrinch_image;
var GiftGroup1,GiftGroup2,GiftGroup3,GiftGroup4;
var PLAY = 1,END = 0;
var gameState = PLAY;
var heart1,heart1_image,heart2,heart2_image,heart3_image,heart3;
var go,go_image;
var back_song,collect,click,lose;
function preload(){
  back_image = loadImage("chris jenner.jpg");
   girlImage = loadImage("girl.png");
   boyImage = loadImage("boy.png");
    back_santa1 = loadImage("back_santa.png");
    back1_image = loadImage("back1.jpg");
    choose_image =loadImage("ch.png");
    san_image = loadImage("santa.png");
    bas_image = loadImage("bas.png");
  gift1_image = loadImage("gift1.png");
  gift2_image = loadImage("i.png");
  gift3_image = loadImage("gift3.png");
  gift4_image = loadImage("gift4.png");
  grinch_image = loadImage("grinch smile.png");
 gamegrinch_image = loadImage("grinch.jpg");
  heart1_image = loadImage("heart1.png");
  heart2_image = loadImage("heart1.png");
  heart3_image = loadImage("heart1.png");
  go_image = loadImage("go.png");
  back_song = loadSound("audio_1fecd92021.mp3");
  collect = loadSound("fairy-sparkle-06-sound-effect-34378052.mp3");
  click = loadSound("Magic-Spell-A-Secretive-www.fesliyanstudios.com.mp3");
  lose = loadSound("mixkit-horror-lose-2028.wav");
}
function setup() {
  createCanvas(1050,600);
  

  back = createSprite(500,300,90,10);
  back.addImage(back_image);
  back.scale = 1.9;
  
  back1 = createSprite(500,300,90,10);
  back1.addImage(back1_image);
  
  back1.visible = false;

  back_santa = createSprite(850,115,20,20);
  back_santa.addImage(back_santa1);
  back_santa.scale = 0.8;
  
  player1  = createSprite(400,500,20,20);
  player1.addImage(boyImage);
  player1.scale = 0.6;  

  player2 = createSprite(600,500,20,20);
  player2.addImage(girlImage);
  player2.scale = 0.5;  

  choose = createSprite(455,300,20,20);
  choose.addImage(choose_image);
  choose.scale = 1;

  san = createSprite(835,115,20,20);
  san.addImage(san_image);
  san.scale = 0.6;
  san.visible = false;
  san.velocityX = 5;
  san.velocityX = -5;
  
  side1 = createSprite(1045,200,20,700);
  side1.visible = false;

  side2 = createSprite(5,200,20,700);
  side2.visible = false;

  bas = createSprite(400,390,20,20);
  bas.addImage(bas_image);
  bas.visible = false ;
  bas.scale = 0.4;
  
  bas1 = createSprite(600,390,20,20);
  bas1.addImage(bas_image);
  bas1.visible = false ;
  bas1.scale = 0.4;
  
 

  heart1 = createSprite(75,50,50,60);
  heart1.addImage(heart1_image);
  heart1.visible = true;
  heart1.scale = 0.2;

  heart2 = createSprite(135,50,50,60);
  heart2.addImage(heart2_image);
  heart2.visible = true;
  heart2.scale = 0.2;

  heart3 = createSprite(200,50,50,60);
  heart3.addImage(heart3_image);
  heart3.visible = true;
  heart3.scale = 0.2;

  gamegrinch = createSprite(600,600,20,20);
  gamegrinch.addImage(gamegrinch_image);
  gamegrinch.visible = false;
  
  go = createSprite(600,40,70,70);
  go.addImage(go_image);
  go.scale = 0.5;
  go.visible = false;

  GiftGroup1 = new Group();
  GiftGroup2 = new Group();
  GiftGroup3 = new Group();
  GiftGroup4 = new Group();
  GrinchGroup = new Group();
  back_song.loop();
  
}

function draw() {
  if(gameState === PLAY){
  createEdgeSprites();
  
  san.bounceOff(side1);
  san.bounceOff(side2);
  player1.bounceOff(side1);
  player1.bounceOff(side2);
  player2.bounceOff(side1);
  player2.bounceOff(side2);
  bas.bounceOff(side2);
  bas.bounceOff(side1);

  bas1.bounceOff(side2);
  bas1.bounceOff(side1);

  background("black");
  player1.velocityX = 0;
  player2.velocityX = 0;
  bas.velocityX = player1.velocityX;
  bas1.velocityX = player2.velocityX;
  
    
  if(mousePressedOver(player1)){
   
    back.visible = 0;
    back1.visible = true;

    
    
    back_santa.visible = 0;
    player2.visible = 0;
    
    choose.visible = 0;
    san.visible = true;
    bas.visible = true;
    click.play();
    
  

  }
  if(keyDown("left")){
    
    bas.velocityX = -12;
    player1.velocityX = -12;
    

  }
  
  if(keyDown("right")){
   player1.velocityX = 12;
   bas.velocityX = 12;
   
 }
 
  if(mousePressedOver(player2)){
    back.visible = 0;
    back1.visible = true;
    back_santa.visible = 0;
    player1.visible = 0;
    choose.visible = 0;
    san.visible = true;
    bas1.visible  =  true;
    GiftGroup1.visible = true;
    click.play();
   
  }
  if(keyDown("left")){
    player2.velocityX = -12;
    bas1.velocityX = -12;
   
  }
  
  if(keyDown("right")){
   player2.velocityX = 12;
   bas1.velocityX = 12;
   
  }
  
  if(GiftGroup1.collide(bas)){
    GiftGroup1.destroyEach();
    score = score + 1;


  }
  if(GiftGroup2.collide(bas)){
    GiftGroup2.destroyEach();
    score = score + 1;
    collect.play();
  }
  if(GiftGroup3.collide(bas)){
    GiftGroup3.destroyEach();
    score = score + 1;
    collect.play();
  }
  if(GiftGroup4.collide(bas)){
    GiftGroup4.destroyEach();
    score = score + 1;
    collect.play();
  }
  if(score>=25){
    spawnGrinch();
  }
   
 if(GrinchGroup.isTouching(player1)){
   life  = life -1;
   GrinchGroup.destroyEach();
   lose.play();


   
    
 }
 if(GrinchGroup.isTouching(player2)){
  life  = life -1;
  GrinchGroup.destroyEach();
  lose.play();

  
   
}
 if(life==2){
   heart3.visible = false;
 }
 if(life==1){
  heart2.visible = false;
}
if(life==0){
  heart1.visible = false;
  gamegrinch.visible  = true;
  go.visible = true;
  collect.stop();
  back_song.stop();
  click.stop();
  lose.stop();

}
}
  

  
keyPressed();

  drawSprites();
  textSize(34);
  fill("white");
  text("SCORE:"+score,60,80,50,60);

}


function spawnGift1(){
  if(frameCount %100==0){

   var gift1 = createSprite(10,100,20,30);
  gift1.x = Math.round(random(200,450));
  
  gift1.addImage(gift1_image);
  gift1.scale = 0.2;
  gift1.velocityY = 5;
  gift1.lifetime = 160;
 
  if(score>=10){
    gift1.velocityY = 15;
   
  }
  GiftGroup1.add(gift1);

 

  }
 
}




function spawnGift2(){
  if(frameCount %90==0){
   
  var gift2 = createSprite(500,100,20,30);
  gift2.x = Math.round(random(400,800));
  
  gift2.addImage(gift2_image);
  gift2.scale = 0.2;
 gift2.velocityY = 5;
  gift2.lifetime = 160;
  if(score>=10){
    gift2.velocityY = 15;
    
  }
  GiftGroup2.add(gift2);
 
}

}

function spawnGift3(){
  if(frameCount %70==0){
   
  var gift3 = createSprite(400,100,20,30);
  gift3.x = Math.round(random(20,40));
  
  gift3.addImage(gift3_image);
  gift3.scale = 0.2;
  gift3.velocityY = 5;
  gift3.lifetime = 160;
  if(score>=10){
    gift3.velocityY = 15;
    
  }
  GiftGroup3.add(gift3);
 
}

}

function spawnGift4(){
  if(frameCount %60==0){
   
  var gift4 = createSprite(100,100,20,30);
  gift4.x = Math.round(random(800,60));

  gift4.addImage(gift4_image);
  gift4.scale = 0.2;
  gift4.velocityY = 5;
  gift4.lifetime = 160;
  if(score>=10){
    gift4.velocityY = 15;
    
  }
  GiftGroup4.add(gift4);
 
}

}
function spawnGrinch(){
  if(frameCount %60==0){
   
  var grinch = createSprite(100,100,20,30);
  grinch.x = Math.round(random(800,60));

  grinch.addImage(grinch_image);
  grinch.scale = 0.2;
  grinch.velocityY = 5;
  grinch.lifetime = 160;
  
  if(score>=20){
    grinch.velocityY = 10;
  }
  
  

  GrinchGroup.add(grinch);
 
}

}

function keyPressed(){
  if(key == "ArrowLeft"){
    spawnGift1();
    spawnGift2();
    spawnGift3();
    spawnGift4();
  }
}