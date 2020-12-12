class Stone{
    constructor(x, y,r) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
          //  isStatic:true
        }
        this.body = Bodies.circle( x,y,r, options);
        this.image=loadImage("images/stone.png")
        World.add(world, this.body);
        this.r=r
      }
      display(){
        var angle=this.body.angle;
        fill("brown");
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
      }
}