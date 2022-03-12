
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var ball;
function preload(){

}

	


function setup() {
	createCanvas(900, 900);
	
var ball_options ={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}

	engine = Engine.create();
	world = Engine.world;

	groundObj = new ground(width/2,670,width,20);
	leftSide = new ground (1100,600,20,120);


	Engine.run(engine);
	ball=Bodies.circle(200,100,20,ball_options)
World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  background(0);
  Matter.Boidies.circle(10,20,30,50)
World.add(world,ball);
 ground.display();
 groundObj.display();
 leftSide.display();
 drawSprites();
 keyPressed ()
}

function keyPressed (){	
	if (keycode ===UP_ARROW)

	Matter.Body.applyForce(body, position, force);



}
