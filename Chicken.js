class Chicken{constructor(canvasContext, image, posX, posY, spriteWidth, spriteHeight)
    {  
        this.canvasContext = canvasContext;
        this.image = image;
        this.position = {x: posX, y: posY};
        this.sourcePosition = {x: 0, y: 0};
        this.spriteSize = {width: spriteWidth, height: spriteHeight};
        this.spriteIndex = 1;
        this.tickCounter = 0;
        this.frameDelay = 5; //frameDelay causes the animation to play at a slower speed
        this.animationPlaying = false;

    }

    //TODO 
    //returns egg object
    layEgg(eggImage)
    {
        this.animationPlaying = true;
        this.playAnimation();
        return new Egg(this.canvasContext, eggImage, this.position.x + this.spriteSize.width  / 2, this.position.y + this.spriteSize.height);
    }

    update()
    {
        //drawImage(this.canvasContext, this.image.image, this.position.x, this.position.y);
        
        drawSpriteAnimation(//context
                            this.canvasContext, 
                             //image
                            this.image, 
                            //sourceX
                            this.sourcePosition.x, 
                            //sourceY
                            this.sourcePosition.y,
                            //sourceWidth
                            this.spriteSize.width,
                            //sourceHeight
                            this.spriteSize.height,
                            //destinationX
                            this.position.x,
                            //destinationY
                            this.position.y,
                            //destinationWidth
                            this.spriteSize.width,
                            //destinationHeight
                            this.spriteSize.height)
    }

    playAnimation()
    {          
        if(this.animationPlaying)
        {
            drawSpriteAnimation(
                //context
                this.canvasContext, 
                 //image
                this.image, 
                //sourceX
                this.sourcePosition.x + (this.spriteSize.width * this.spriteIndex), 
                //sourceY
                this.sourcePosition.y,
                //sourceWidth
                this.spriteSize.width,
                //sourceHeight
                this.spriteSize.height,
                //destinationX
                this.position.x,
                //destinationY
                this.position.y,
                //destinationWidth
                this.spriteSize.width,
                //destinationHeight            
                this.spriteSize.height)
            
            if (this.tickCounter > this.frameDelay) 
            {
                //if the current shown sprite is still within the boundaries of the spritesheet width, advance to the next sprite.
                if (this.sourcePosition.x + this.spriteSize.width + (this.spriteSize.width * this.spriteIndex) < this.image.width) 
                {
                    this.spriteIndex++;
                    this.tickCounter = 0;              
                }
                else 
                {
                    this.spriteIndex = 1;
                    this.animationPlaying = false;
                }            
    
            }        
    
            this.tickCounter++;

        }

        
        
    }

} 