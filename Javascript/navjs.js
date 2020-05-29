
//nav
function myFunction(){
    var x = document.getElementById("menu");
    
     if(x.style.display == "block")
     {
         x.style.display = "none";
     }
     else{
         x.style.display = "block";
     }
 }

 //slideshow
 const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; 


slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  
  slideshowImages[currentImageCounter].style.opacity = 1;
}