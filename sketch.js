const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops=[];
var engine, world; 
var maxDrops=100;
var umbrella;
var rand, bat, batImg, thunder;
var thunderCreatedFrame;
var batCreatedFrame;

function preload(){
thunder1 =loadImage("images/thunderbolt/1.png")
thunder2 =loadImage("images/thunderbolt/2.png")
thunder3 =loadImage("images/thunderbolt/3.png")
thunder4 =loadImage("images/thunderbolt/4.png")

batImg=loadImage("PRO-C43 image/bat/bat12.png")

theme=loadSound("Batman Bgm.mp3")
}

function setup(){
 createCanvas(500,800);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Ground(250, 600, 370)
  

    if(frameCount % 150 === 0){
    
        for(var i=0; i<maxDrops; i++){ 
            drops.push(new Drop(random(0,400), random(0,400)));
            }
        }
       
}

function draw(){
 Engine.update(engine);
    background(0);
 
     umbrella.display();
 
     rand = Math.round(random(1,4));

     if(frameCount % 80===0){

        thunderCreatedFrame=frameCount;
        thunder=createSprite(random(18,370), random(18,30), 18, 10)

        switch(rand){
      
        case 1 :thunder.addImage(thunder1);
        break;

        case 2 :thunder.addImage(thunder2);
        break;

        case 3 :thunder.addImage(thunder3);
        break;

        case 4 :thunder.addImage(thunder4);
        break;

        default:break;
        }

      thunder.scale=random(0.3, 0.6)

     }

     if(thunderCreatedFrame +10 === frameCount && thunder){
        thunder.destroy();

     }


     if(frameCount %40===0){

      batCreatedFrame=frameCount;

      bat=createSprite(random(42,500), random(35,420), random(17, 24), random(17, 24))
      bat.addImage(batImg)
      bat.scale=random(0.3, 0.7)

   }

 
     for(var i=0; i<maxDrops; i++){
      drops[i].display();
      drops[i].updateY()
     }

drawSprites();
}   

