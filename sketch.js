const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1600,20);
    base1 = new Base(200,380,100,20);
    base2 = new Base(200,360,100,20);
    ball = new Ball(200,345,80,80);
    valve = new Valve(245,300,25,-PI/4);
}

function draw(){
    background(0);
    stroke(-10)
    Engine.update(engine);
    
    ground.display();
    base1.display();
    base2.display();
    ball.display();
    valve.display();
}
