//Create variables here
var dog
var happyDog
var dogImage,dogImage1
var database
var S 
var foodS 


function preload()
{

dogImage=	loadImage("images/dogImg.png")
dogImage1=loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);
  dog=createSprite(250,300,150,150)
  dog.addImage(dogImage)
  dog .scale=0.15
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImage1);
  
}
  drawSprites();
  fill ("yellow")
  stroke ("black")
  textSize(20)
  text ("food remaining : "+foodS,170,200)
  text ("note:pess up arrow key to feed the dog",130,50)

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

