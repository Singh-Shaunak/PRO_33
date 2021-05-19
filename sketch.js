const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImg, bg;
var character;
var snow  = [];
var inviground;
function preload(){
  bgImg = loadImage("snow2.jpg");
}
function setup() {
  createCanvas(400,390);
  engine = Engine.create();
    world = engine.world;
  inviground = createSprite(200, 285, 50, 15);
  inviground.visible = false;
  bg = createSprite(200, 30, 20, 20);
  bg.addImage("img", bgImg);
  bg.scale = 1.0;
  character = createSprite(50, 360, 20, 40);
  character.shapeColor = "darkblue";
}

function draw() {
  background(0); 
  Engine.update(engine); 
    bg.velocityX = -2;
  if (bg.x < 0){
    bg.x = bg.width/2;
  }
  drawSprites();
  if(frameCount%20 === 0){
    snow.push(new Snow(random(width/2-300, width/2+500), 10, 10));
    snow.scale = 1.9;
  }
  for(var j = 0; j < snow.length; j++){
    snow[j].display();
  }
}