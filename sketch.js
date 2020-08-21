var ball,ballimg,paddle,paddleimg;
var edges;
function preload() {
  
    ballimg = loadImage("ball.png")
    paddleimg = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200 , 200 , 20 , 20);
  paddle = createSprite(350 , 200 , 10 , 70);
  /* assign the images to the sprites */
  ball.addImage(ballimg)
  paddle.addImage(paddleimg)
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = -9

}

function draw() {
  background(205,153,0);

 edges =  createEdgeSprites()
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,randomVelocity);


  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {
     
     paddle.y -= 10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y += 10;
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY = random(-8,8);
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

