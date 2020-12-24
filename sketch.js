
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rod;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;
var balldia = 40;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

var option={
isStatic:true
}
rod=Bodies.rectangle(400,100,500,50,option);
World.add(world,rod);

ball1 = new Ball(190,500,50);
ball2 = new Ball(290,500,50);
ball3 = new Ball(390,500,50);
ball4 = new Ball(490,500,50);
ball5 = new Ball(590,500,50);

rope1=new Rope(ball1.body,rod.body, 0, 0);

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
  rectMode(CENTER);
  rect(rod.position.x,rod.position.y,500,50);

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  drawSprites();
 
}


