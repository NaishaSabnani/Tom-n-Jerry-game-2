var cat, catImg, catImg2, catImg3
var mouse,mouseImg, mouseImg2, mouseImg3
var bg, bgImg

function preload() {
    //load the images here
    bgImg=loadImage("images/garden.png")
    catImg=loadAnimation("images/cat1.png")
    catImg2=loadAnimation("images/cat2.png", "images/cat3.png")
    catImg3=loadAnimation("images/cat4.png")
    mouseImg=loadAnimation("images/mouse1.png")
    mouseImg2=loadAnimation("images/mouse2.png", "images/mouse4.png")
    mouseImg3=loadAnimation("images/mouse3.png")

}

function setup(){
    createCanvas(1000,800);
    
     //create tom and jerry sprites here
    cat=createSprite(700, 600)
    cat.addAnimation("tomSleeping",catImg)
    cat.scale=0.2
    mouse=createSprite(300,600)
    mouse.addAnimation("jerryStanding",mouseImg)
    mouse.scale=0.1

   
}

function draw() {

    background(bgImg);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(mouse.width-cat.width)/2)
    {
       cat.velocityX=0
       cat.addAnimation("catHappy", catImg3)
       cat.changeAnimation("catHappy")
      

       mouse.addAnimation("mouseHappy", mouseImg3)
       mouse.changeAnimation("mouseHappy")
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW)
  {

    cat.velocityX=-1
    mouse.addAnimation("mouseTeasing",mouseImg2)
    mouse.changeAnimation("mouseTeasing")
    mouse.frameDelay=25
  

    cat.addAnimation("catMoving", catImg2)
    cat.changeAnimation("catMoving")
    cat.x=cat.x+3
    

  }


}
