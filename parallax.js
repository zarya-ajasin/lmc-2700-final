// inside main_javascript.js
 
var can = document.getElementById('canvas1');
 
// The 2D Context for the HTML canvas element. It
// provides objects, methods, and properties to draw and
// manipulate graphics on a canvas drawing surface.
var ctx = can.getContext('2d');
 
// canvas width and height
can.width = 8000;
can.height = 8000;
 
// create an image element
var img = new Image();
 
// specify the image source relative to the html or js file
// when the image is in the same directory as the file
// only the file name is required:
img.src = "spacebg.png";
 
// window.onload is an event that occurs when all the assets
// have been successfully loaded( in this case only the spacebg.png)
window.onload = function() {
    // the initial image height
    var imgHeight = 0;
    var imgWidth = 0;
 
    // the scroll speed
    // an important thing to ensure here is that can.height
    // is divisible by scrollSpeed
    var scrollSpeed = 0;
  // this is the primary animation loop that is called 60 times
    // per second

    // #move screen from arrowkeys

    function loop()
    {
        // draw image 1
        
        ctx.drawImage(img, imgWidth, 0);
 
        // draw image 2
        ctx.drawImage(img, imgWidth - can.width, 0);
 
        // update image height
        imgWidth += scrollSpeed;
 
        //resetting the images when the first image entirely exits the screen
        if (imgWidth == can.width)
            imgWidth = 0;
 
        // this function creates a 60fps animation by scheduling a
        // loop function call before the
        // next redraw every time it is called
        window.requestAnimationFrame(loop);
    }
 
    // this initiates the animation by calling the loop function
    // for the first time
    loop();


    function moveLeft() {
        var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        if (left > -10) {
        character.style.left = left - 2 + "px";
        scrollSpeed += 2;
        }
    }
    
    function moveRight() {
        var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
        if (left < 1000) {
        character.style.left = left + 2 + "px";
        scrollSpeed += 2;
        }
    }
    
    document.addEventListener("keydown", event => {
        if (both == 0) {
            both++;
        if (event.key == "ArrowLeft") {
            interval = setInterval(moveLeft, 1);
        }
        if (event.key == "ArrowRight") {
            interval = setInterval(moveRight, 1);
        }
    }
    });
 
}