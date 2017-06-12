(function (Fly) {
    'use strict';
    var Bird = function (config) { 
        this.img = config.img;
        this.ctx = config.ctx;

        this.imgW = this.img.width /3;
        this.imgH = this.img.height;
        this.index = 0 ;
        this.speed = 0;
        this.a = 0.0005;
        this.x = 100;
        this.y = 100;
        this.maxAngle = 45;
        this.maxSpeed = 0.3;
        this.curAngle = 0;
     }

    Bird.prototype = {
        constructor: Bird,

        draw: function (interval) { 
           this.speed =  this.speed + this.a * interval;

            this.y += this.speed * interval + 1/2 *this.a *Math.pow(interval,2)

            //计算角度
            this.curAngle = this.speed / this.maxSpeed * this.maxAngle;

            if(this.curAngle > this.maxAngle){
                this.curAngle = this.maxAngle;
            } else if( this.curAngle < -this.maxAngle){
                 this.curAngle = -this.maxAngle;
            }
            //先平移,再旋转
            this.ctx.translate(this.x, this.y);
            
            this.ctx.rotate(Fly.toRadian(this.curAngle));
            
            this.ctx.drawImage(this.img, this.imgW * this.index++, 0, 
            this.imgW, this.imgH,-1/2 * this.imgW, -1/2 * this.imgH, this.imgW, this.imgH);
            
            this.index %= 3;
         },
         changeSpeed: function (speed) { 
             this.speed = speed;
          }
    }
    //将小鸟暴露在全剧中
    Fly.Bird = Bird
  })(Fly)