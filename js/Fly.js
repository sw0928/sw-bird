(function (window) { 
    'use strict'

    var Flyobj = {};

    Flyobj.toRadian = function (angle) {
        return angle / 180 * Math.PI;
      };
    
    Flyobj.loadImages = function (imgList,callback) {  
        var imgObj = {},
            count = 0,
            allCount = imgList.length;
        imgList.forEach(function(imgStr) {
            var img = new Image();
            img.src = './fy/'+ imgStr +'.png';
            imgObj[imgStr] = img;
            console.log(imgObj);
            img.onload = function () {  
                count++
                if(count >= allCount){
                    callback(imgObj);
                }
            }
        });
    }

    window.Fly = Flyobj;

 })(window)