class Pack {
    constructor(x,y,width,hieght){
        var options ={
          restitution : 0.5

        }
        this.body = BODIES.rectangle(x, y , width , hieght ,options);
        this.width = width;
        this.hieght = hieght;
        World.add(world , this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}