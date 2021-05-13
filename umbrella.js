class Ground {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      
      this.x=x;
		  this.y=y;  
      this.r=r;
      
      this.image=loadImage("images/Walking Frame/walking_1.png")
      this.image2=loadImage("PRO-C43 image/bat/Bestman-01.png")
      this.image3=loadImage("PRO-C43 image/Walking Frame/batman.png")

      this.body = Bodies.circle(this.x, this.y, (this.r/2)-40, options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.r, this.r);

      if(frameCount>=220){

          image(this.image2,pos.x+10, pos.y+45, 200, 350)
      }
     
      if(frameCount>=370){

        image(this.image3,pos.x+40, pos.y+80, 680, 550)
    }


    }
  };
