'use strict';

let Scene = {
  canvas: undefined,
  canvasContext: undefined,
  sprite: undefined,
};

Scene.start = function() {
  // Get the canvas and it's context.
  Scene.canvas = document.getElementById('canvas');
  Scene.canvasContext = Scene.canvas.getContext('2d');

  // Seup the number to be displayed.
  Scene.sprite = number;

  // Attach the image to be used for the sprite.
  Scene.sprite.img = new Image();
  Scene.sprite.img.src = Scene.sprite.src;

  // Wait till the number image is loaded before starting the animation.
  Scene.sprite.img.onload = function() {
    Scene.sprite.offset = -Scene.sprite.frames[Scene.sprite.frame].frame.w;
    Scene.mainLoop();
  };
};

document.getElementById('startBtn').addEventListener('click', Scene.start);

Scene.clearCanvas = function() {
  Scene.canvasContext.fillStyle = 'white';
  Scene.canvasContext.fillRect(0, 0, Scene.canvas.width, Scene.canvas.height);
};

Scene.mainLoop = function() {
  Scene.clearCanvas();
  Scene.update();
  Scene.draw();

  window.setTimeout(Scene.mainLoop, 500);
};

Scene.update = function() {
  // Set the canvas width to be that of the display Window. Which helps if you resize the window.
  Scene.canvas.width = window.innerWidth;

  // Set the location of the next frame.
  Scene.sprite.offset += 24;
  if (Scene.sprite.offset > Scene.canvas.width)
    Scene.sprite.offset = -Scene.sprite.frames[Scene.sprite.frame].frame.w;
};

Scene.draw = function() {
  Scene.canvasContext.drawImage(
      Scene.sprite.img,
      Scene.sprite.frames[Scene.sprite.frame].frame.x,
      Scene.sprite.frames[Scene.sprite.frame].frame.y,
      Scene.sprite.frames[Scene.sprite.frame].frame.w,
      Scene.sprite.frames[Scene.sprite.frame].frame.h,
      0,
      0,
      Scene.sprite.frames[Scene.sprite.frame].frame.w,
      Scene.sprite.frames[Scene.sprite.frame].frame.h,
  );

  // Advance to the next frame.
  Scene.sprite.frame++;

  // At the end of the sprite sheet, start at the first frame.
  if (Scene.sprite.frame === Scene.sprite.frames.length) {
    Scene.canvasContext.drawImage(
        Scene.sprite.img,
        Scene.sprite.frames[1].frame.x,
        Scene.sprite.frames[1].frame.y,
        Scene.sprite.frames[1].frame.w,
        Scene.sprite.frames[1].frame.h,
        0,
        0,
        Scene.sprite.frames[1].frame.w,
        Scene.sprite.frames[1].frame.h,
    );

    Scene.canvasContext.drawImage(
        Scene.sprite.img,
        Scene.sprite.frames[0].frame.x,
        Scene.sprite.frames[0].frame.y,
        Scene.sprite.frames[0].frame.w,
        Scene.sprite.frames[0].frame.h,
        Scene.sprite.frames[0].frame.w,
        0,
        Scene.sprite.frames[0].frame.w,
        Scene.sprite.frames[0].frame.h,
    );

    Scene.sprite.frame = 0;
  }
};