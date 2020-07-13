const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var drops = [];
var batman;
var maxDrops = 100;
var umbrella;

function preLoad(){
 batmanimage = loadImage("batman.png");
 umbrellaimage = loadImage("umbrella.jpeg")
}

function setup(){
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,390,800,20);
  batman = createSprite(400,380,10,10);
  batman.addImage("image", batmanimage);
  umbrella = createSprite(400,376);
  umbrella.addImage("umbrellaImage", umbrellaimage)
  
  for(var i=0; 1 < maxDrops; i++){
    drops.push(new Drop(random(0,800), random(0,800)));
  }
}
function draw(){
background("black");
ground.display();
batman.display();
drops.display();
}


function mousePressed() {
      drops = new Drop(mouseX, 10, 10, 10);
  }