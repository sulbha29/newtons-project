class Stand {
    constructor(x,y,width,height){
		var options ={
			'isStatic':true,
			//restitution: 0.1,
			'friction':0.2,
			'density':1.2
		}
		this.body=Bodies.rectangle(x,y,width,height,options);
	this.width = width;
	this.height = height
		
		World.add(world,this.body);
	}
	display(){
	   rectMode(RADIUS);
		fill("brown");
		rect(this.body.position.x,this.body.position.y,this.width,this.height);
	}
}