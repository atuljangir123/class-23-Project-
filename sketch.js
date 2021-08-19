const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
    var ball_options={
		isStatic:true			
	}


	roof = Bodies.rectangle(385,100,230,20,roof_options);
    World.add(world,roof);

	ball = Bodies.circle(300,400,40,ball_options);
    World.add(world,ball);
    ball1 = Bodies.circle(340,400,40,ball_options);
    World.add(world,ball1);
	ball2 = Bodies.circle(380,400,40,ball_options);
    World.add(world,ball2);
	ball3 = Bodies.circle(420,400,40,ball_options);
    World.add(world,ball3);
	ball4 = Bodies.circle(460,400,40,ball_options);
    World.add(world,ball4);



	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  ellipse(RADIUS);

  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
ellipse(ball.position.x,ball.position.y,40);
ellipse(ball1.position.x,ball1.position.y,40);
ellipse(ball2.position.x,ball2.position.y,40);
ellipse(ball3.position.x,ball3.position.y,40);
ellipse(ball4.position.x,ball4.position.y,40);

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
