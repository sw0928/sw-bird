(function (Fly) { 
    'use strict'
    var Land = function (config) {
        this.img = config.img;
        this.ctx = config.ctx;

        this.imgW = this.img.width;
        this.speed = 0.15;
        this.x = config.x;
        this.y = config.y;
        
      }

    Land.prototype.draw = function (interval) { 
        this.x -= this.speed * interval;

        if(this.x <= -this.imgW){
            this.x += this.imgW * 4;
        }
        this.ctx.drawImage(this.img,this.x, this.y);
        
     }

    Fly.Land = Land;
 })(Fly)