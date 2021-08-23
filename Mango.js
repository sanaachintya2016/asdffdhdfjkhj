class Mango {
constructor(x,y){
var options = {isStatic:true,
restitution:0,
friction:0.1,
density : 0.2
}
this.mango = Bodies.rectangle(x,y,50,50,options);
this.image = loadImage("Pluckingmangoes/mango.png");
World.add(world,this.mango);




}
display(){
    var pos=this.mango.position;
    var angle=this.mango.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("blue");
    image(this.image,0,0,50,50);
    pop();


}
}