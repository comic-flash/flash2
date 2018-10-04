//

//https://www.dropbox.com/s/qm6mynnfsqk5aer/flash.mp4?raw=1

//https://www.dropbox.com/s/mspqrx6jcmusjp1/startagain.png?raw=1

//https://www.dropbox.com/s/lj893xpb112zfzv/style.css?raw=1

//https://www.dropbox.com/s/2vw7fq6ckrcw5la/script.js?raw=1

//https://www.dropbox.com/s/bec6v06csrxvygr/index.html?raw=1

//<iframe src="comic-quest.github.io/flash" allowtransparency="true" allow="autoplay" width=640 height=480 frameBorder="0" scrolling="no">

//https://raw.githack.com/comic-quest/flash/gh-pages/script.js



(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
                              window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

window.cancelAnimationFrame = window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
        window.msCancelAnimationFrame;



var reqanim;

var percent = document.getElementById("percent")

   var video = document.getElementById("flash");

var canvas = document.getElementById("canvas");
    
    canvas.width=650;
    canvas.height=450;

var ctx = canvas.getContext("2d");

var loadingtext = "Cargando";

var loadingsecond;

var loadingsecondtime;

var isloaded=false;

var showLoading=true;

var showStart=false;

ctx.font='50px Arial';

ctx.fillStyle="white";

var startagain = new Image();

var credits={
    x:225,
    y:175,
    width:200,
    height:100
    
    
}
var goback={
    x:5,
    y:canvas.height-60,
    width:100,
    height:50
}
    
    startagain.src = "https://www.dropbox.com/s/mspqrx6jcmusjp1/startagain.png?raw=1"

function loadimg(){

    if(!isloaded){
        sword2.degrees = ((new Date().getHours()%12)*30+new Date().getMinutes()*0.5)-90
       sword1.degrees = Math.floor(map(new Date().getUTCSeconds(),0,60,0,360))

       reqanim = requestAnimationFrame(main);
       
       }
           
}

function onend(){
    
    
               
               ctx.fillStyle="black"
               ctx.fillRect(0,0,canvas.width,canvas.height)
               
               ctx.drawImage(startagain,canvas.width-40,canvas.height-35)
               ctx.lineWidth=2
               ctx.strokeStyle="white"
               ctx.beginPath();
               ctx.rect(credits.x,credits.y,credits.width,credits.height)
                   ctx.stroke()
                    
               ctx.fillStyle="white";
               ctx.font="50px Arial"
               ctx.fillText("Créditos.",credits.x,credits.y+60)
               
              
               
               canvas.onclick=function(e){
                  
                   
                   
                   if(e.pageX>=credits.x&&e.pageX<credits.x+credits.width&&e.pageY>credits.y&&e.pageY<credits.y+credits.height){
                      
                      ctx.clearRect(0,0,canvas.width,canvas.height);
                       
                       ctx.lineWidth=2
               ctx.strokeStyle="white"
               ctx.beginPath();
               ctx.rect(5,canvas.height-60,100,50)
                   ctx.stroke()
                       ctx.font="30px arial"
                       ctx.fillText("Volver",8,canvas.height-25);
                       
                       ctx.fillText("Director: Erizo14",5,40);
                      
                       ctx.fillText("Músico: Zinc",5,80);
                       ctx.fillText("Artista: Kimsa",5,120)
                       ctx.fillText("Programador: Helius Universe",5,160)
                       
                       canvas.onclick=function(e){
                           
                            if(e.pageX>=goback.x&&e.pageX<goback.x+goback.width&&e.pageY>goback.y&&e.pageY<goback.y+goback.height){
                                onend();
                       }
                       
                      }
                   
                   console.log(e)
                   
                
               
               //ctx.clearRect(0,0,canvas.width,canvas.height)
               
                   
                   
               }else if(e.pageX>=canvas.width-40&&e.pageX<canvas.width&&e.pageY>canvas.height-35&&e.pageY<canvas.height){
                   ctx.clearRect(0,0,canvas.width,canvas.height);
                         canvas.onclick=function(){}
                   video.play();
                   
                        
                        }
               
           
    
}
               
}

video.oncanplaythrough=function(){
    video.oncanplaythrough=function(){}
     
     showLoading=false;
     showStart=true;
    
         TweenMax.pauseAll();
         TweenMax.killAll();
     
    
    
    if(!video.paused){
       
       return
        
       }
    
  
      
      
       
       canvas.onclick= function(){
           canvas.onclick=function(){};
           showStart=false;
           isloaded=true;
           percent.innerHTML="";
       
           cancelAnimationFrame(reqanim)
           
           ctx.clearRect(0,0,canvas.width,canvas.height)
           
           video.play();
           
           video.onended=onend
           
           
       }
       
       
       
      


    

    
     
     
     
     
     
  
     

}
var urls = ["https://comic-flash.github.io/flash2/flash2.mp4?raw=1","https://r4---sn-h5q7dnee.c.drive.google.com/videoplayback?id=1364533dbb6758f1&itag=18&source=webdrive&requiressl=yes&mm=30&mn=sn-h5q7dnee&ms=nxu&mv=m&pl=22&sc=yes&ttl=transient&ei=DWO2W5CrIcnkqgXqlrOYAQ&susc=dr&driveid=1aj8wNpBlxWY-bbQUD_aMhdSKH0pBt9Nw&app=texmex&mime=video/mp4&dur=110.457&lmt=1538679445005968&mt=1538679459&ip=87.221.43.4&ipbits=0&expire=1538693965&cp=QVNIWkdfUllURlhOOnZIV1hZUzk5UUxZ&sparams=ip,ipbits,expire,id,itag,source,requiressl,mm,mn,ms,mv,pl,sc,ttl,ei,susc,driveid,app,mime,dur,lmt,cp&signature=D26C0A306DC2927F19F9171EE840E1897DA6E05FEC40FA66CE7316A072617CCD.D386A3D51F0C3F9EAD1B6F0433ED1F1999AE727CEC1FF17F0D7E5C6A1F4354CF&key=us0&cpn=qE9WpvbDFCgloci8&c=WEB_EMBEDDED_PLAYER&cver=20181003"]
var fail=true;

function recursiveRequest(i){
    fail=false;
    if(urls.length<=i){
       return
       
       }
    var r = new XMLHttpRequest();
r.onload = function() {
    video.src = URL.createObjectURL(r.response);
    
   
};
console.log(urls[i])
    r.open("GET", urls[i]);
    r.responseType = "blob";
r.send();

r.onloadstart = function(){
    
    percent.innerHTML="0%"
    
    
}
r.onprogress = function(e){
    var str = ((e.loaded/e.total)*100).toFixed()+"%"
    if(str!=="NaN%"){
        percent.innerHTML = str;
       
       }

    
}
r.onabort = function(){
console.log("abort")
    if(!fail){
       recursiveRequest(i+1);
       
       }
    
}
r.onerror=function(){
if(!fail){
   recursiveRequest(i+1);
   
   }
    
}
    
    
}


recursiveRequest(0)






var sword1 = {degrees:0}



sword1.img = new Image();
    
sword1.img.onload = loadimg;

    sword1.img.src = "https://www.dropbox.com/s/15iek960twu7c5z/sword1.png?raw=1";




var sword2 = {degrees:0}




    
    
    var imgsloaded = 0;



function main(){

reqanim = requestAnimationFrame(main);
    
  var date = new Date()
  
  var newloadingsecondtime = date.getTime();
  
  var newloadingsecond = Math.floor(date.getTime()/1000);
  
  
  

  
  if(loadingsecond===newloadingsecond){
     
     
      
     }else if(Math.floor((newloadingsecondtime-loadingsecondtime)/1000)<2){
         
         loadingsecond=newloadingsecond;
         loadingsecondtime=newloadingsecondtime;
         
         var newDegree;
         
         if((sword1.degrees)>=360){
            
             sword1.degrees=sword1.degrees-360
            newDegree= Math.floor(map(date.getUTCSeconds(),0,60,0,360))
            
            }else{
                
                
            newDegree = Math.floor(map(date.getUTCSeconds(),0,60,0,360))
         
        
         
         if(newDegree<sword1.degrees){
            
             newDegree+=360
            
            }
                
            }
         
         
         

         
        var tween1 = TweenMax.to(sword1, 0.5, { degrees: newDegree,onUpdate:function(){
         
            
            
             
           /*
            
            ctx.save();
            ctx.scale(0.5,0.5);
            
            ctx.translate(7,62)
            
            ctx.rotate(0*Math.PI/180);
            
            ctx.translate(0,23) 
ctx.drawImage(sword1.img,100,90);
             
            
            ctx.restore();
            
            ctx.save()
            
            context.save(); 
 */
// move the origin to 50, 35  
            if(!isloaded){
                 ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.save()
                
                
            
                ctx.translate(300,180);
            
ctx.translate(7, 62); 
 
 
// rotate around this point
ctx.rotate(sword2.degrees*Math.PI/180); 
 
// then draw the image back and up
ctx.drawImage(sword1.img, -7, -62); 
 
// and restore the co-ordinate system to its default
// top left origin with no rotation
ctx.restore();
                
               
               
               
           
            ctx.save()
                
 ctx.translate(300,180);
            
ctx.translate(7, 62); 
 
 
// rotate around this point
ctx.rotate((sword1.degrees*Math.PI/180)-90); 
 
// then draw the image back and up
                
           
                
ctx.drawImage(sword1.img, -7, -62);
            
 
// and restore the co-ordinate system to its default
// top left origin with no rotation
ctx.restore();
                
                if(showLoading){
                    ctx.font="50px Arial"
                ctx.fillText("Cargando.",200,70);
                   }
                
                if(showStart){
                   
                    ctx.font="50px Arial"
                ctx.fillText("Haz click para comenzar.",30,420);
                   
                   }
               
                
                
                
            }else{
                
                tween1.pause();
                tween1.kill();
            }
            
            
            
        },onComplete:function(){
          
            
            if(tween1){
                
                tween1.kill();
               
               }
            
           
            
        }})
        
        tween1.play();
         
         
         
     }else{
         
          loadingsecond=newloadingsecond;
         loadingsecondtime=newloadingsecondtime;
         
         TweenMax.pauseAll();
         TweenMax.killAll();
         
         sword1.degrees=map(new Date().getUTCSeconds(),0,60,0,360);
         
         
         
     }
    
    
    
    
    
}




/*
var isloading = function(){
    
    
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    var loadingdots= loadingtext.substring("cargando".length);
    
    if(loadingdots.length<3){
       
        loadingtext+="."
       
       }else{
           loadingtext="Cargando";
           
           
           
       }
    
    ctx.fillText(loadingtext,100,canvas.height/4,canvas.height/2,10000);
    
    
    
}
isloading();
var loading = setInterval(isloading,500)
*/



window.onload = function(){
    

}




    
                       
                       



                       
                       

function map (num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
