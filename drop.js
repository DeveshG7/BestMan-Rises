class Drop{

constructor(x, y){

var options = {
  'friction' : 0.001,
   'restitution' : 0.1
}

this.body=Bodies.circle(x, y, 20/2, options)
this.r=15;

World.add(world, this.body)

}

display(){

var pos=this.body.position;

push()
translate(pos.x,pos.y);
ellipseMode(CENTER);
fill("darkBlue")
ellipse(0,0,this.r,this.r)
pop();


}

updateY(){

  if(this.body.position.y>1200){
    Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
}


}
}