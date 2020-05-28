class Egg{constructor(canvasContext, image, chickenPositions)
    {    
        var randomChickenPosition = chickenPositions[getRandomInt(0, chickenPositions.length)]
        this.canvasContext = canvasContext;
        this.image = image;
        this.xPosition = randomChickenPosition.x + imageChicken.image.width / 2;
        this.yPosition = randomChickenPosition.y + imageChicken.image.height;       
        this.fallPositionRight = getRandomInt(this.xPosition, canvasContext.canvas.width); //TODO: This should become a calculation beween the length of the plank, the position of the chicken, and the direction of the egg to move.
        this.fallPositionLeft = getRandomInt(0, this.xPosition);
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