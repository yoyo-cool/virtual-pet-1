//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here
  dog1=loadImage("images/dogImg.png")
  happyDog=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database()
  dog=createSprite(250,250,50,50)

  foodStock=database.ref('Food')
  foodStock.on("value",readStock)
  
}


function draw() {  
  background(46,139,87)

  if(keyCode===UP_ARROW){
    writeStock(foodS)
    dog.addImage(happyDog)
    dog.scale=0.2
  } else {
    dog.addImage(dog1)
    dog.scale=0.2
  }


  drawSprites();
  //add styles here

}

function readStock(data){
  foodS=data.val()

}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
  
  if(x<=0){
    x=0
  } else{
    x=x=-1
  }
}