 
 function first(){
    document.getElementById("slideimage").src="img/IMG_5.jpg";
 }
 function second(){
    document.getElementById("slideimage").src="img/IMG_6.jpg";
 }
 function third(){
    document.getElementById("slideimage").src="img/IMG_7.jpg";
 }
 function fourth(){
    document.getElementById("slideimage").src="img/IMG_4.jpg";
 }

 setInterval(first,4000);
 setInterval(second,8000);
 setInterval(third,12000);
 setInterval(fourth,16000);