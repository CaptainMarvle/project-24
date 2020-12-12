
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var line1, line2, line3;
var ground;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 600);
    

	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2,540, width,10);
	groundSprite.shapeColor=color("yellow")
   // ground = Bodies.rectangle(width/2, 500, width, 10 , {isStatic:true} );
	 //World.add(world, ground);
	 

	//Create the Bodies Here.
	line1 = new Line(1220,500,10,70)
    line2 = new Line(1320,500,10,70) 
    line3 = new Line(1275,530,100,10)
    ball = new Paper(200,530,5) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  line1.display()
  line2.display()
  line3.display()
  ball.display()

  drawSprites();
 
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
       
       Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
       
     }
   }

