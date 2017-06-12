(function (Fly) { 
    'use strict'

    var Sky = function (config) {
        this.img = config.img;
        this.ctx = config.ctx;

        this.imgW = this.img.width;
        this.x = config.x;
        this.y = 0;
        this.speed = 0.15;

      }

      Sky.prototype =  { 
        constructor: Sky,
        draw:function (interval) { 
            this.x -= this.speed * interval;
            if(this.x <= -this.imgW){
                this.x += this.imgW * 2 
            }
        this.ctx.drawImage(this.img, this.x, this.y);
        
         }
       }
    Fly.Sky = Sky;
        
 })(Fly)