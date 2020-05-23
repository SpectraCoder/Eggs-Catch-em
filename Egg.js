class Egg{constructor(canvasContext, image, chickenPositions)
    {    
        var randomChickenPosition = chickenPositions[getRandomInt(0, chickenPositions.length)]
        this.canvasContext = canvasContext;
        this.image = image;
        this.xPosition = randomChickenPosition.x + imageChicken.image.width / 2;
        this.yPosition = randomChickenPosition.y + imageChicken.image.height;
        //this.xPosition = getRandomInt(32, canvas.width - 32); //32 is the offset from the edge of the canvas
        //this.yPosition = 0;
        this.speed = getRandomInt(5,10);
        this.angle = 0;
        this.caught = false;
    }

    update()
    {
        if(!this.caught)
        {
            drawImageWithRotation(this.canvasContext, this.image, this.xPosition, this.yPosition, this.image.width / 2, this.image.height / 2, this.angle);
            this.yPosition += this.speed;            
            this.angle +=  (this.speed * Math.PI / 180);
        }
    }
}