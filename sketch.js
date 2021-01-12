
var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");
}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 650);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.13;

    jerry = createSprite(100, 650);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.1;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < tom.width/2 - jerry.width/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x =250;
        tom.scale=0.13;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale=0.1;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}