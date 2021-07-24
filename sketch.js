function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  astronaut = createSprite(300,230)
  astronaut . addAnimation("sleeping", sleep)
  astronaut.scale = 0.1
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if (keyDown("UP_ARROW")){
    astronaut . addAnimation("brushing", brush);
    astronaut . changeAnimation("brushing");
    astronaut . y = 350;
    astronaut . velocityX = 0;
    astronaut . velocityY = 0;
  }
  if (keyDown("Down_Arrow")){
    astronaut . addAnimation("Gymming", Gymming);
    astronaut . changeAnimation("Gymming");
    astronaut . y = 350;
    astronaut . velocityX = 0;
    astronaut . velocityY = 0;
  }
  if (keyDown("Left_ARROW")){
    astronaut . addAnimation("Eating", Eating);
    astronaut . changeAnimation("Eating");
    astronaut . y = 350;
    astronaut . velocityX = 0;
    astronaut . velocityY = 0;
  }
  if (keyDown("Right_Arrow")){
    astronaut . addAnimation("Bathing", Bathing);
    astronaut . changeAnimation("Bathing");
    astronaut . y = 350;
    astronaut . velocityX = 0;
    astronaut . velocityY = 0;
  }
  if (keyDown("m key")){
    astronaut . addAnimation("Moving", Moving);
    astronaut . changeAnimation("Moving");
    astronaut . y = 350;
    astronaut . velocityX = 0;
    astronaut . velocityY = 0;
  }
}
function preload(){
  bg= loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym21.png",images/gym22.png);
  eat = loadAnimation("add image urls here");
  drink = loadAnimation("add image urls here")
  move = loadAnimation("add image urls here")
}