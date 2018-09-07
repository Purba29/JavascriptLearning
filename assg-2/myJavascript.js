
var image = new Array()
 var i=0;
 image=["image001.jpg","image002.jpg","image003.jpg","image004.jpg"];
 



function back(){
    if (i>0){
     i=i-1;
    } else {
     i=image.length-1;
    }
    document.getElementById("prev").src=image[i];
 }

 function forward()
 {
    if (i<image.length-1){
     i=i+1;
    } else {
     i=0;
    }
 document.getElementById("prev").src=image[i]; }  