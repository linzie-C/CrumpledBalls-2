class Paper{
    constructor(x, y, r){
        var options = {
            'isStatic': false,
            'density':1.2,
            'friction': 0.5,
            'restitution':0.3
          };
          this.x = x;
          this.y = y;
          this.r = r;
          this.body = Bodies.circle(this.x, this.y, this.r, options);
          this.image = loadImage("crumpledPaper.png");
          World.add(world, this.body);
        };
        display(){
          var pos = this.body.position;
          //var angle = this.body.angle;
      
          push();
          translate(pos.x, pos.y);
          //rectMode(CENTER);
          //rotate(angle);
          strokeWeight(3);
          stroke('blue')
          fill('red')
          imageMode(CENTER);
          image(this.image, 0, 0, this.r, this.r);
          //ellipse(0, 0, this.r, this.r)
          pop();
        };
      };