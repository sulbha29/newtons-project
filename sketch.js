
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function preload()
{
	
}

function setup() {
  createCanvas(800, 700);
  
 

	engine = Engine.create();
  world = engine.world;
  
  

  bob1 = new Bob(280,490,20);
  bob2 = new Bob(340,490,20);
  bob3 = new Bob(400,490,20);
  bob4 = new Bob(460,490,20);
  bob5 = new Bob(520,490,20);
  stand = new Stand(400,240,200,10);

 slingshot = new SlingShot(bob1.body,stand.body,-120, 10);
  //slingshot1 = new SlingShot(bob2.body,stand.body,415, 200);
 // slingshot2 = new SlingShot(bob3.body,{x:455, y:200});
 // slingshot3 = new SlingShot(bob4.body,{x:495, y:200});
 // slingshot4 = new SlingShot(bob5.body,{x:535, y:200});
  
	//Create the Bodies Here.

	
    //var option = {
     //   restitution: 0.8
   // }

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  Engine.update(engine);
bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();
stand.display();
slingshot.display();
//slingshot1.display();
//slingshot2.display();
//slingshot3.display();
//slingshot4.display();

//bob4.display();


 
}



