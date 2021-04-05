var fixSprite1, fixSprite2, fixSprite3, fixSprite4
var movingSprite
var canvas;

var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
movingSprite=createSprite(random(10,750),300,20,20);
movingSprite.shapeColor="white";
movingSprite.velocityX=3;
movingSprite.velocityY=3;
    //create 4 different surfaces


fixSprite1=createSprite(100,590,180,20);
fixSprite1.shapeColor="red";


    
fixSprite2=createSprite(300,590,180,20);
fixSprite2.shapeColor="green";

    
fixSprite3=createSprite(500,590,180,20);
fixSprite3.shapeColor="blue";

    
fixSprite4=createSprite(700,590,180,20);
fixSprite4.shapeColor="yellow";

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

 if(movingSprite.x>800){
    music.stop()
    movingSprite.velocityX=0;
} if(movingSprite.isTouching(fixSprite1)){
music.stop()
movingSprite.shapeColor="red"
movingSprite.velocityX=0;
movingSprite.velocityY=0;
}

if(movingSprite.isTouching(fixSprite2)){
    music.stop()
    movingSprite.shapeColor="green"
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
}
    
if(movingSprite.isTouching(fixSprite3)){
    music.stop()
    movingSprite.shapeColor="blue"
    movingSprite.velocityX=0;
    movingSprite.velocityY=0;
}
    
if(movingSprite.isTouching(fixSprite4)){
    music.stop()
 movingSprite.shapeColor="yellow"
 movingSprite.velocityX=0;
 movingSprite.velocityY=0;
}
    //add condition to check if box touching surface and make it box

    drawSprites()
}
