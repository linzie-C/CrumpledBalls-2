
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(450, 450, 900, 25);

	paper = new Paper(50, 425, 70, 70);
	
	dustBin1 = new DustBin(800, 363, 25, 150);
	
	dustBin2 = new DustBin(700, 423, 175, 25);

	dustBin3 = new DustBin(600, 363, 25, 150);

	Engine.run(engine);
    
}


function draw() {
  background(152, 244, 166);
  rectMode(CENTER);

  
  
  paper.display();
  ground.display();
  dustBin1.display();
  dustBin2.display();
  dustBin3.display();
  
  keyPressed()
  drawSprites();
  
}

function keyPressed() {
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y:-45});
	
} 
}