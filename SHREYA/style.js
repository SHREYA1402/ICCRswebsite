function first(){
    document.getElementById("slideimage").src="images/2.webp";
 }
 function second(){
    document.getElementById("slideimage").src="images/dance.jpg";
 }
 function third(){
    document.getElementById("slideimage").src="images/film-club.jpg";
 }
 function fourth(){
    document.getElementById("slideimage").src="images/fine-art.jpg";
 }

 setInterval(first,4000);
 setInterval(second,8000);
 setInterval(third,12000);
 setInterval(fourth,16000);