
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter;

function preload()
{
	
}

function setup()
{
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	//Create the Bodies Here.
	
	bobObject1 = new Bob (165,600,125);
	bobObject2 = new Bob (290,600,125);
	bobObject3 = new Bob (415,600,125);
	bobObject4 = new Bob (540,600,125);
	bobObject5 = new Bob (665,600,125);

	roof = new Roof (420,100,680,75);
	rope1 = new Rope (bobObject1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope (bobObject2.body, roof.body, -bobDiameter*2, 0);
	rope3 = new Rope (bobObject3.body, roof.body, -bobDiameter*2, 0);
	rope4 = new Rope (bobObject4.body, roof.body, -bobDiameter*2, 0);
	rope5 = new Rope (bobObject5.body, roof.body, -bobDiameter*2, 0);
	
}

function draw() 
{
  rectMode(CENTER);
  background(255);

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyDown(UP_ARROW))
	{
		Matter.Body.applyForce(bobObject1, {}, {});
	}


}