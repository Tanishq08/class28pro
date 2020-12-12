
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload(){
    treeimage=loadImage("images/tree.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	
	boy1 = new Boy(150,650,150,150);
	stone1 = new Stone(110,605,50,50);
	
	ground1 = new Ground(400,700,800,10);
//	tree1 = new Tree(600,500,400,400);
    mango1 = new Mango(705,505,50,50);
    mango2 = new Mango(650,415,50,50);
    mango3 = new Mango(605,425,50,50);
    mango4 = new Mango(555,405,50,50);
    mango5 = new Mango(505,455,50,50);
	
    sling1 = new Sling(stone1.body,{x:105,y:605});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  boy1.display();
  stone1.display();
  ground1.display();
  sling1.display();
  drawSprites();
  image(treeimage,400,300,400,400)
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
}	

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling1.fly();
}

function detectollision(stone,mango){
    mangoBodyPosition=mango.body.position
    stoneBodyPosition=stone.body.position

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=mango.r+stone.r){
        Matter.Body.setStatic(mango.body,false);
    }
}