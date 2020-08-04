class SlingShot{
    constructor(bodyA, bodyB,offsetX,offsetY){
       this.offsetX = offsetX;
       this.offsetY = offsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
           // stiffness: 0.014,
           // length: 10
           pointB:{x:this.offsetX, y:this.offsetY}
        }
     //   this.pointB = pointB
        this.sling = Constraint.create(options);
       // this.sling1 = loadImage("sprites/sling1.png");
       // this.sling2 = loadImage("sprites/sling2.png");
       // this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

   // fly(){
       // this.sling.bodyA = null;
   // }

    display(){
       // image(this.sling1,200,20);
       // image(this.sling2,175,20);

        
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
           
     
          
                strokeWeight(2);
    stroke("red");
                var c=pointB.x+this.offsetX;
                var d=pointB.y+this.offsetY;
                line(pointA.x,pointA.y-(this.offsetY*2),c,d);
               
                //line(pointA.x-10,pointA.y, pointB.x+40, pointB.y+40);
            
          
           
        }
    }
    
