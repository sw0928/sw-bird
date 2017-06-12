(function (Fly) {  
    'use strict'
    var Pipe = function (config) { 
        this.imgTop = config.imgTop;
        this.imgBottom = config.imgBottom;
        this.ctx = config.ctx;

        this.x = config.x;
        //间距
        this.pipeSpace = config.pipeSpace;
        this.imgW = this.imgTop.width;
        this.imgH = this.imgTop.height;
        //随机生成
        this.topY = 0;
        this.bottomY =0;
        this.speed = 0.15;
        this.initPipeHeight()
     };

    Pipe.prototype.draw = function (interval) {  
            this.x -= this.speed * interval;

            if(this.x <= -this.imgW * 3){
                this.x += this.imgW *3 *6;
                 this.initPipeHeight()
            }
            this.ctx.rect(this.x, this.topY,this.imgW, this.imgH);
            this.ctx.rect(this.x, this.bottomY,this.imgW, this.imgH);
            // this.ctx.fill()

            this.ctx.drawImage(this.imgTop, this.x, this.topY);
            this.ctx.drawImage(this.imgBottom, this.x, this.bottomY);
            
        };
       

       
        //随机生成管道
       Pipe.prototype.initPipeHeight = function () {  
            //top
            var pipeTopH = Math.random()* 200 +50;
            //bottom
            this.bottomY = pipeTopH + this.pipeSpace;

            //top
            this.topY = pipeTopH - this.imgH
        }
    
     Fly.Pipe = Pipe;
})(Fly)