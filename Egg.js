class Egg{constructor(canvasContext, image, chickenPositions)
    {    
        var randomChickenPosition = chickenPositions[getRandomInt(0, chickenPositions.length)]
        this.canvasContext = canvasContext;
        this.image = image;
        this.xPosition = randomChickenPosition.x + imageChicken.image.width / 2;
        this.yPosition = randomChickenPosition.y + imageChicken.image.height;       
        this.fallPosition = getRandomInt(randomChickenPosition.x, imagePlank.image.width); //TODO: This should become a calculation beween the length of the plank, the position of the chicken, and the direction of the egg to move.
        this.rollSpeed = 1;
        this.speed = getRandomInt(5,10);
        this.angle = 0;
        this.caught = false;
    }

    update()
    {
        if(!this.caught)
        {
            drawImageWithRotation(this.canvasContext, this.image, this.xPosition, this.yPosition, this.image.width / 2, this.image.height / 2, this.angle);
            
            if(this.xPosition < this.fallPosition) //Roll on the plank
            {
                this.xPosition += this.rollSpeed;
                this.angle += (this.rollSpeed * Math.PI / 180);
            }
            else //Fall down
            {
                this.yPosition += this.speed;            
                this.angle +=  (this.speed * Math.PI / 180);
            }
            
        }
    }
}