var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadImage("images/fairy.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 650);

	fairyVoice.play();


	fairy = createSprite(130, 500);
	fairy.addImage(fairyImg);  
	fairy.scale =0.18;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.19;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  textSize(15);
  fill("pink");
  textFont("algerian");
  text("go under the star then press down key to fall the the star ",20,40);
  
 
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 440 && starBody.position.y > 440 ){
	  Matter.Body.setStatic(starBody,true);
	  star.x=fairy.x+75;
	  
  }
keyPressed();
  drawSprites();


}

function keyPressed() {
	if(keyDown("right")){
		fairy.x = fairy.x + 10;

 }
 
	 if(keyDown ("left")){
		fairy.x = fairy.x - 10;
 }
 if(fairy.x>= 550){
	
if (keyDown("down")) {
	 Matter.Body.setStatic(starBody,false); 
 }
}
}