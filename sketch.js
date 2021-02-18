var mouse,mouseImage1,mouseImage2;
var cat,catImage1,catImage2,catImage3;
var garden,gardenImage;
function preload() {
    //load the images here
    gardenImage=loadImage("images/garden.png");
    mouseImage1=loadAnimation("images/mouse1.png");
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImage3=loadAnimation("images/mouse4.png");
    catImage1=loadAnimation("images/cat1.png");
    catImage2=loadAnimation("images/cat2.png","images/cat3.png");
    catImage3=loadAnimation("images/cat4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(800,600);
garden.addImage(gardenImage)
garden.scale=2.5;

mouse=createSprite(200,600);
mouse.addAnimation("mouseStanding",mouseImage1);
mouse.scale=0.15;

cat=createSprite(870,600);
cat.addAnimation("catSleeping",catImage1);
cat.scale=0.2;
}

function draw() {

    background(255);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2) { 
        cat.velocityX=0;
         cat.addAnimation("catLastImage",catImage);
         cat.x =300; 
         cat.scale=0.2; 
         cat.changeAnimation("tomLastImage");

         mouse.addAnimation("mouseLastImage", mouseImg3); 
         mouse.scale=0.15;
         mouse.changeAnimation("mouseLastImage");
         keyPressed();

         }
     

    drawSprites();

}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catImage2);
    cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseTeasing", mouseImg2);
	mouse.frameDelay = 25;
	mouse.changeAnimation("mouseTeasing");

}

}
