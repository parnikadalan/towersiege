const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygonImg

function preload(){
  polygon_img=loadImage("polygon.png");
}

function setup() {
  engine  = Engine.create();
  world = engine.world;

  createCanvas(900,400);
  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);
 
  //one
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  // two
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  // three
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  //four
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  // five
  block21 = new Block(385,115,30,40);


  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new SlingShot(this.ball,{x:200,y:200});

}

function draw() {
  
 background("black")
  Engine.update(engine);
 
  

  strokeWeight(2);
  stroke(15);
  
  stand1.display();
  stand2.display();
  
  stroke(15);
  fill("black")
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  stroke(15)
  fill("turquoise")
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
 stroke(15)
 fill("pink")
  block15.display();
  block16.display();
  block17.display();
  block18.display();
    stroke(15)
    fill("green")
  block19.display();
  block20.display();
 stroke(15)
 fill("blue")
  block21.display();
  
  text("drag the hexagonal stone to release it, launch it towards the blocks",600,250)


  ellipse(ball.position.x,ball.position.y,20);
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}