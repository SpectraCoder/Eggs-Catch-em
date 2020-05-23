class Basket{constructor(canvas, canvasContext, image)
    {        
        this.canvas = canvas;
        this.canvasContext = canvasContext;
        this.image = image;        
        this.yPosition = canvas.height * 0.85;
        this.xPosition = 0; 
    }

    Update()
    {  
        this.xPosition = calculateMiddleOfImage(this.image, this.canvas).x;

        drawImage(this.canvasContext, this.image, this.xPosition, this.yPosition);

    }

    CheckCollision(objEgg)
    {   
        if (objEgg.xPosition < this.xPosition + this.image.width && 
            objEgg.xPosition + objEgg.image.width > this.xPosition && 
            objEgg.yPosition < this.yPosition + (this.image.height * getCanvasScale(this.canvas).y) 
            && objEgg.yPosition + objEgg.image.height > this.yPosition + (this.image.height / 2* getCanvasScale(this.canvas).y)) 
        {
            objEgg.caught = true;
            return true;
        }
        else 
        {
            return false;
        }
    }

}