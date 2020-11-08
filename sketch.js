const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var ground,ball;


function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }
/*
  var ball_options = {
    restitution : 1
  }
 */ 
  box = Bodies.rectangle(200,100,50,50,options);
  World.add(world , box);

  //ground = Bodies.rectangle(200,390,200,20,options);
  //World.add(world,ground);

  //ball = Bodies.circle(200,100,20, ball_options);
  //World.add(world, ball);

  

}

function draw() {
  background("cyan");  
  Engine.update(engine);
  
  rect(box.position.x, box.position.y, 50, 50);

  rectMode(CENTER);
  //rect(ground.position.x,ground.position.y,400,20);

  //ellipse(ball.position.x, ball.position.y, 20,20);

}