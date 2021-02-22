var car, wall;
var speed, weigth ;

function setup() {

  createCanvas(1350,200);

  speed = random(55,90);
  weigth = random(400,1500);

  car = createSprite(200,100,60,30);
  wall = createSprite(1200,100,40,120);
  
  car.velocityX = speed ;

}

function draw() {

  background(0); 
  
  if(wall.x- car.x < (car.width + wall.width)/2 ){

    var deformation = (0.5* weigth * speed * speed )/ 22500 ; 
    car.velocityX = 0 ;

  if(deformation>180){
     car.shapeColor= color(255,0,0)  ;
  }
  if(deformation<180 && deformation> 100){
    car.shapeColor = color(230,230,0);
 }
 if(deformation<100){
    car.shapeColor = color(0,255,0) ;
 }
} 
  drawSprites();
}