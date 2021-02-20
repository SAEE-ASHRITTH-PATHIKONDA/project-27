const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70)
    log6 = new Log(230,180,80, PI/2);
    bird = new Bird(100,100);
    chain = new Chain (bird.body,log6.body)
    chain = new Chain (bird.body,box1.body)
    chain = new Chain (bird.body,box2.body)
    chain = new Chain (bird.body,box3.body)
    chain = new Chain (bird.body,box4.body)
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    console.log(box1.body.position.x);
    console.log(box1.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();

    

    
    log6.display();

    chain.display();

    bird.display();
    platform.display();
}
