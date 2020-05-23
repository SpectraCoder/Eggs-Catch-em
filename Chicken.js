class Chicken{constructor(canvasContext, image, posX, posY)
    {  
        this.canvasContext = canvasContext;
        this.image = image;
        this.position = {x:posX,y:posY};
    }

    update()
    {
        drawImage(this.canvasContext, this.image, this.position.x, this.position.y);
    }

} 