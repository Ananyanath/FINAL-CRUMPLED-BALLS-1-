

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world;
var paper1;
var ground ;
var dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper1 = new Paper(100,300,10);
    ground = new Ground(400,height,800,20);
    dustbin1 = new Dustbin(600,680,100,20);
    dustbin2 = new Dustbin(550,655,20,70);
    dustbin3 = new Dustbin(650,655,20,70);
  Engine.run(engine);
 
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

}

  
 
  
function keyPressed(){
  if (keyCode === UP_ARROW ) {
 Body.applyForce(paper1.body, paper1.body.position, {
      x: 13,
      y: -13
    });
  }
}


