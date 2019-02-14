var bgimage = [ 'Secondary-background.png',
                'lovelivebg.jpg',
                'fatebg.png',
                'SAObg.png',
                'rebg.jpg',
                'collection.jpg',
                'umaru.jpg',
                'actor.jpg',
                'nogame.png'
              ];
var count =0;
var autochbg;
           
function bg1(){
    if (sessionStorage.autostate == 1){
       window.clearInterval(autochbg);
        sessionStorage.autostate =2;
    }
    count =0;       document.body.style.backgroundImage="url('"+bgimage[count]+"')";
    sessionStorage.imagecount = 0;
    
}

function bg2(){
    if (sessionStorage.autostate == 1){
       window.clearInterval(autochbg);
        sessionStorage.autostate =2;
    }
    count =1;       document.body.style.backgroundImage="url('"+bgimage[count]+"')";
    sessionStorage.imagecount = 1;
    
}

function bg3(){
    if (sessionStorage.autostate == 1){
       window.clearInterval(autochbg);
        sessionStorage.autostate =2;
    }
    count =2;       document.body.style.backgroundImage="url('"+bgimage[count]+"')";
    sessionStorage.imagecount = 2;
    
}

function bg4(){
    if (sessionStorage.autostate == 1){
       window.clearInterval(autochbg);
        sessionStorage.autostate =2;
    }
    count =3;       document.body.style.backgroundImage="url('"+bgimage[count]+"')";
    sessionStorage.imagecount = 3;
    
}

function bg5(){
    if (sessionStorage.autostate == 1){
       window.clearInterval(autochbg);
        sessionStorage.autostate =2;
    }
    count =4;       document.body.style.backgroundImage="url('"+bgimage[count]+"')";
    sessionStorage.imagecount = 4;
    
}

function bg6(){
    if (sessionStorage.autostate == 1){
       window.clearInterval(autochbg);
        sessionStorage.autostate =2;
    }
    count =5;       document.body.style.backgroundImage="url('"+bgimage[count]+"')";
    sessionStorage.imagecount = 5;
    
}

function bg7(){
    if (sessionStorage.autostate == 1){
       window.clearInterval(autochbg);
        sessionStorage.autostate =2;
    }
    
    count =6; 
   document.body.style.backgroundImage="url('"+bgimage[count]+"')";
    
    sessionStorage.imagecount = 6;
   
    
}

function bg8(){
    if (sessionStorage.autostate == 1){
       window.clearInterval(autochbg);
        sessionStorage.autostate =2;
    }
    count =7;       document.body.style.backgroundImage="url('"+bgimage[count]+"')";
    sessionStorage.imagecount = 7;
    
}

function bg9(){
    if (sessionStorage.autostate == 1){
       window.clearInterval(autochbg);
        sessionStorage.autostate =2;
    }
    
    
    count =8;       document.body.style.backgroundImage="url('"+bgimage[count]+"')";
    sessionStorage.imagecount = 8;
    
}

function autobg(){
    
    function changebg(){                                   document.body.style.backgroundImage="url('"+bgimage[sessionStorage.imagecount]+"')";
    sessionStorage.imagecount++;
    if(sessionStorage.imagecount>8){
        sessionStorage.imagecount=0
    }
    }
    
    autochbg = window.setInterval(changebg, 3000);
    sessionStorage.autostate = 1 ;
}