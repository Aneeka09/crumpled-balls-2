class Dustbin{
    constructor(x,y){
      this.bottom=Bodies.rectangle(x,y,200,20,{isStatic:true})
      this.left=Bodies.rectangle(1100,600,20,100,{isStatic:true})
      this.right=Bodies.rectangle(1300,600,20,100,{isStatic:true})
      this.image=loadImage("sprites/dustbin.js")
      World.add(world,this.bottom)
      World.add(world,this.left)
      World.add(world,this.right)

}
display(){
    var posB=this.bottom.position
    var posL=this.left.position
    var posR=this.right.position
    push();
    image(this.image,200,20);
    translate(posB.x,posB.y)
    rectMode(CENTER);
    fill(0);
    rect(0,0,200,20);
    pop();
    push();
    translate(posL.x,posL.y)
    rectMode(CENTER);
    fill(0);
    rect(0,0,20,100);
    pop();
    push();
    translate(posR.x,posR.y)
    rectMode(CENTER);
    fill(0);
    rect(0,0,20,100);
    pop();
}
}