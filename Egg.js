class Egg{constructor(canvasContext, image, posX, posY)
    {    
        this.canvasContext = canvasContext;
        this.image = image;        
        this.xPosition = posX;
        this.yPosition = posY;
        this.fallPositionRight = getRandomInt(this.xPosition, imagePlank.image.width);
        this.fallPositionLeft = getRandomInt(10, this.xPosition);
        this.rollSpeed = 75;
        this.directionRight = Math.random() >= 0.5; //random true or false indicates left or right
        this.speed = getRandomInt(200,750);
        this.angle = 0;
        this.caught = false;
    }

    update(deltaTime)
    {
        if(!this.caught)
        {
            drawImageWithRotation(this.canvasContext, this.image, this.xPosition, this.yPosition, this.image.width / 2, this.image.height / 2, this.angle);
            
            //RIGHT
            if(this.xPosition < this.fallPositionRight && this.directionRight) //Roll on the plank
            {
                this.xPosition += this.rollSpeed / 1000 * deltaTime;
                this.angle += (this.rollSpeed * Math.PI / 45) / 1000 * deltaTime;
            }
           
            //LEFT
            else if(this.xPosition > this.fallPositionLeft && !this.directionRight)
            {
                this.xPosition -= this.rollSpeed / 1000 * deltaTime;
                this.angle -= (this.rollSpeed * Math.PI / 45) / 1000 * deltaTime;
            }
            
            else //Fall down
            {
                this.yPosition += this.speed / 1000 * deltaTime;            
                this.angle +=  (this.speed * Math.PI / 180) / 1000 * deltaTime;
            }
            
        }
    }
}