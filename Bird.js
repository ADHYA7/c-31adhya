class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png")
    this.trajectary=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.position.x>210 && this.body.velocity.x>5){
    var position = [this.body.position.x,this.body.position.y]
    this.trajectary.push(position)}
    for (var i = 0;i<this.trajectary.length;i = i+1){
    image (this.smokeimg,this.trajectary[i][0],this.trajectary[i][1])
  }
  }
  }
