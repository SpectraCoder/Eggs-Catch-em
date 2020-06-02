class Egg{constructor(canvasContext, image, posX, posY)
    {    
        //var randomChickenPosition = chickenPositions[getRandomInt(0, chickenPositions.length)]
        this.canvasContext = canvasContext;
        this.image = image;
        //this.xPosition = randomChickenPosition.x + imageChickenIdle.image.width / 2;
        //this.yPosition = randomChickenPosition.y + imageChickenIdle.image.height;
        this.xPosition = posX;
        this.yPosition = posY;
        this.fallPositionRight = getRandomInt(this.xPosition, imagePlank.image.width);
        this.fallPositionLeft = getRandomInt(10, this.xPosition);
        this.rollSpeed = 1;
        this.directionRight = Math.random() >= 0.5; //random true or false indicates left or right
        this.speed = getRandomInt(5,10);
        this.angle = 0;
        this.caught = false;
    }

    update()
    {
        if(!this.caught)
        {
            drawImageWithRotation(this.canvasContext, this.image, this.xPosition, this.yPosition, this.image.width / 2, this.image.height / 2, this.angle);
            
            //RIGHT
            if(this.xPosition < this.fallPositionRight && this.directionRight) //Roll on the plank
            {
                this.xPosition += this.rollSpeed;
                this.angle += (this.rollSpeed * Math.PI / 45);
            }
           
            //LEFT
            else if(this.xPosition > this.fallPositionLeft && !this.directionRight)
            {
                this.xPosition -= this.rollSpeed;
                this.angle -= (this.rollSpeed * Math.PI / 45);
            }
            
            else //Fall down
            {
                this.yPosition += this.speed;            
                this.angle +=  (this.speed * Math.PI / 180);
            }
            
        }
    }
}