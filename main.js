'use strict';

    const canvas = document.getElementById("game_screen");
    const ctx = canvas.getContext("2d");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const originalWidth = canvas.width;
const originalHeight = canvas.height;
var scaleX = 0;
var scaleY = 0;

var keyD = new Image()
var keyW = new Image()
var keyA = new Image()
var keyS = new Image() 

this.keyD.src = 'https://raw.githubusercontent.com/loglot/key-images/10212df9a78eeeb348d6302c3b79ac149670d2e6/Keyboard%20%26%20Mouse/Dark/D_Key_Dark.png';
this.keyW.src = 'https://raw.githubusercontent.com/loglot/key-images/10212df9a78eeeb348d6302c3b79ac149670d2e6/Keyboard%20%26%20Mouse/Dark/W_Key_Dark.png';
this.keyA.src = 'https://raw.githubusercontent.com/loglot/key-images/10212df9a78eeeb348d6302c3b79ac149670d2e6/Keyboard%20%26%20Mouse/Dark/A_Key_Dark.png';
this.keyS.src = 'https://raw.githubusercontent.com/loglot/key-images/10212df9a78eeeb348d6302c3b79ac149670d2e6/Keyboard%20%26%20Mouse/Dark/S_Key_Dark.png';

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
      window.requestAnimationFrame(gameLoop)

    // Worry about later
      document.addEventListener('keydown', (event) => {
        var code = event.code;
        keyManager.setKeyPressed(code, true)
      }, false);

    document.addEventListener('keyup', (event) => {
        var code = event.code;
        keyManager.setKeyPressed(code, false)
    }, false);


    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// library
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    async function gameLoop() {
        while(true) {
            keyManager.doActionsFromKeyInput();
            keyManager.onTick();
            resizeCanvasForWindowSize()
            draw.Game()
            await misc.sleep(1000/60)
        }
    }

    function resizeCanvasForWindowSize() {

      var currentWidth = canvas.width;
      var currentHeight = canvas.height;

      // Get the current window dimensions
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
  
      // Calculate the desired width and height based on the window's dimensions
      
      var desiredWidth = windowWidth;
      var aspectRatio = originalWidth / originalHeight;
      var desiredHeight = desiredWidth / aspectRatio;
      canvas.width = desiredWidth;
      canvas.height = desiredHeight;
      scaleX = (desiredWidth / originalWidth);
      scaleY = (desiredHeight / originalHeight);
      ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)

       currentWidth = canvas.width;
       currentHeight = canvas.height;

      if (currentHeight >= windowHeight) {
         desiredHeight = windowHeight;
         aspectRatio = originalWidth / originalHeight;
         desiredWidth = desiredHeight * aspectRatio;
        canvas.width = desiredWidth;
        canvas.height = desiredHeight;
        scaleX = (desiredWidth / originalWidth);
        scaleY = (desiredHeight / originalHeight);
        ctx.setTransform(scaleY, 0, 0, scaleX, 0, 0)
      }
      

  
      // Set the canvas element's width and height

  
      // Resize the canvas drawing area to maintain the aspect ratio
  
      // Apply the scaling transformation to maintain the aspect ratio

  }