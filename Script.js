const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

var deltaTime;
var timeStart;
var lastTime;

var debug = false;

var imageMenu = new ImageSource("Images/Menu.png", x=0,y=0, width=720, height=1280);
var imageBackground = new ImageSource("Images/Background.jpg", x=0,y=0, width=720, height=1280);
var imageBasket = new ImageSource("Images/Basket.png", x=0,y=0, width=100, height=100);
var imageChickenIdle = new ImageSource("Images/ChickenIdle.png", x=0,y=0, width=96, height=82);
var imageChickenAnimation = new ImageSource("Images/ChickenLayingAnimation.png", x=0,y=0, width=1632, height=82);
var imageWhiteEgg = new ImageSource("Images/Egg.png", x=0,y=0, width=27, height=35);
var imageBrownEgg = new ImageSource("Images/Brown_egg.png", x=0,y=0, width=27, height=35);
var imageBonusEgg = new ImageSource("Images/EggBonus.png", x=0,y=0, width=27, height=35);
var imageLifeEgg = new ImageSource("Images/EggLife.png", x=0,y=0, width=27, height=35);
var imageBrokenEgg = new ImageSource("Images/Broken_egg.png", x=0,y=0,width=35, height=35);
var imagePlank = new ImageSource("Images/Plank.png", x=0,y=0,width=650, height=24);
var imageLives0 = new ImageSource("Images/Lives0.png", x=0,y=0,width=187, height=40);
var imageLives1 = new ImageSource("Images/Lives1.png", x=0,y=0,width=187, height=40);
var imageLives2 = new ImageSource("Images/Lives2.png", x=0,y=0,width=187, height=40);
var imageLives3 = new ImageSource("Images/Lives3.png", x=0,y=0,width=187, height=40);
var imageLives4 = new ImageSource("Images/Lives4.png", x=0,y=0,width=187, height=40);
var imageLives5 = new ImageSource("Images/Lives5.png", x=0,y=0,width=187, height=40);

var soundChickenLaying1 = "Sounds/ChickenLaying1.mp3";
var soundChickenLaying2 = "Sounds/ChickenLaying2.mp3";
var soundChickenLaying3 = "Sounds/ChickenLaying3.mp3";
var soundEggCatch = "Sounds/EggCatch.mp3";
var soundEggBroken = "Sounds/EggBroken.mp3";
var soundHeal = "Sounds/Heal.mp3"
var soundBonus = "Sounds/Bonus.mp3"
var soundGameOver = "Sounds/GameOver.mp3"

var soundChickenArray = [soundChickenLaying1,soundChickenLaying2,soundChickenLaying3];

var imageEggArray = [imageWhiteEgg, imageBrownEgg];
var imageLivesArray = [imageLives0,imageLives1,imageLives2,imageLives3,imageLives4,imageLives5];

var cursorPosition = {x: 350 * getCanvasScale(canvas).x, y: 1000 * getCanvasScale(canvas).y};

var plankPositionsArray = [{x:35,y:200}, {x:35, y:400}, {x:35, y:600}];

var chickenArray;
var chickenPositions;  

var eggArray;
var basket = new Basket(canvas, canvasContext, imageBasket.image, cursorPosition);

var timer;
var spawnTime;
var score;
var highScore;
var caughtEggs;
var lives;
var menu = true;
var luckyNumber;
const BONUSAMOUNT = 500;
const MINSPAWNTIME = 50;

document.addEventListener("DOMContentLoaded", startup);

function startup()
{
    window.addEventListener("resize", getCanvasScale(canvas), false);
    canvas.addEventListener("click", function(){clickHandler()});
    canvas.addEventListener("mousemove", setCursorPosition, false);

    canvas.addEventListener("touchstart", touchStart, false);    
    canvas.addEventListener("touchmove", touchMove, false);

    init();
}

function init()
{   
    timer = 0;
    spawnTime = 250;
    score = 0;
    highScore = getHighScore();
    caughtEggs = 0;
    lives = 5;
    eggArray = [];    

    chickenArray = [];    
    chickenPositions = [
        {x:getRandomInt(plankPositionsArray[0].x, imagePlank.image.width - imageChickenIdle.image.width), y:plankPositionsArray[0].y - imageChickenIdle.image.height}, 
        {x:getRandomInt(plankPositionsArray[1].x, imagePlank.image.width - imageChickenIdle.image.width), y:plankPositionsArray[1].y - imageChickenIdle.image.height}, 
        {x:getRandomInt(plankPositionsArray[2].x, imagePlank.image.width - imageChickenIdle.image.width), y:plankPositionsArray[2].y - imageChickenIdle.image.height}
    ] 

    eggArray.forEach(egg =>{
        removeEgg(egg);
    })

    for(var i = 0; i < chickenPositions.length; i++)
    {
        addChicken(chickenPositions[i]);
    }     
} 

gameMenu();

function gameMenu()
{
    menu = true;
    canvasContext.clearRect(0,0, canvas.width, canvas.height);
    drawImage(canvasContext, imageBackground.image,0,0); //BACKGROUND 

    showCursor(true);
    drawImage(canvasContext, imageMenu.image, 0,0);        

    highScore = getHighScore();        
    drawText(canvasContext, highScore, canvas.width / 2, 800, "85px Mini Pixel-7", "white", "center");

    requestAnimationFrame(gameMenu);    
}

function gameOver()
{
    menu = true;    
    canvasContext.clearRect(0,0, canvas.width, canvas.height);
    
    showCursor(true);
    drawImage(canvasContext, imageBackground.image,0,0); //BACKGROUND    
    drawImage(canvasContext, imageMenu.image, 0,0);
    drawText(canvasContext, "GAME OVER", canvas.width / 2, canvas.height / 2, "85px Mini Pixel-7", "white", "center");
    updateScore();
    setHighScore();
    highScore = getHighScore();        
    drawText(canvasContext, highScore, canvas.width / 2, 800, "85px Mini Pixel-7", "white", "center");  
    
    requestAnimationFrame(gameOver);
}

function playGame(timestamp)
{       
    deltaTime = calculateDeltaTime(timestamp);

    canvasContext.clearRect(0,0, canvas.width, canvas.height);
    drawImage(canvasContext, imageBackground.image,0,0); //BACKGROUND   
    
    menu = false;
    showCursor(false);
    updateLives();
    updateScore();
    drawPlanks(plankPositionsArray);

    if(lives > 0)
    {        
        basket.update();
        luckyNumber = getRandomInt(0,50);        

        chickenArray.forEach(chicken =>{
            
            chicken.update();            
                      
        })

        eggArray.forEach(egg =>{
            if (egg.yPosition + egg.image.height * getCanvasScale(canvas).y >= canvas.height) //if egg hits the ground
            {                
                playSound(soundEggBroken);
                lives--                
                removeEgg(egg);
            }
            else 
            { 
                if (basket.checkCollision(egg)) //if egg hits basket
                {
                    playSound(soundEggCatch);
                    
                    caughtEggs++;

                    if(egg.lifeEgg)
                    {
                        lives++;
                        playSound(soundHeal);
                    }

                    else if(egg.bonusEgg)
                    {
                        score += BONUSAMOUNT;
                        playSound(soundBonus);
                    }
                    else
                    {
                        score += Math.round(egg.speed * deltaTime/1000); //determine score based on the speed of the egg
                    }


                    
                    if (spawnTime > MINSPAWNTIME)
                    {
                        spawnTime --;
                    }
                    
                    removeEgg(egg);
                }
                else
                {
                    egg.update(deltaTime);
                }
            }
        });

        if (timer > spawnTime) 
        {
            if((lives < 5) && (luckyNumber == 25)) //Get an extra life!
            {
                addEgg(imageLifeEgg.image, lifeEgg = true, bonusEgg = false);
            }
            if(luckyNumber == 10) //Get bonus!
            {   
                addEgg(imageBonusEgg.image, lifeEgg = false, bonusEgg = true);
            }
            else
            {
                addRandomEgg(imageEggArray);
            }            
            
            timer = 0;
        }

        if (debug) {
            console.log("DeltaTime: " + deltaTime + "ms");
            console.log("spawnTime = " + spawnTime);
            console.log("Score: " + score);
            console.log("CaughtEggs: " + caughtEggs);
            console.log(eggArray);
            console.log("MousePosition X:" + cursorPosition.x + " Y:" + cursorPosition.y);
            console.log("BasketPosition X:" + ((cursorPosition.x - imageBasket.image.width * getCanvasScale(canvas).x / 2) / getCanvasScale(canvas).x) + " Y:" + ((cursorPosition.y - imageBasket.image.height * getCanvasScale(canvas).y / 2) / getCanvasScale(canvas).y));
            console.log("Timer: " + timer);
            console.log("Lives: " + lives);
        }
        
        timer++;
        requestAnimationFrame(playGame);
    }
    else
    {
        requestAnimationFrame(gameOver);
        playSound(soundGameOver);
    }
}    


function updateLives()
{  
    drawImage(canvasContext, imageLivesArray[lives].image, canvas.width - imageLivesArray[lives].image.width - 25, 25);   
}

function updateScore()
{
    drawText(canvasContext,"score: " + score, 50,50);
    //canvasContext.fillText("score: " + score, 50,50);
}

//Adds a random egg to the game, which is layed by a random chicken.
function addRandomEgg(imageArray)
{
    
    var egg = chickenArray[getRandomInt(0, chickenArray.length)].layEgg(imageArray[getRandomInt(0,imageArray.length)].image, lifeEgg = false, bonusEgg = false)
    
    eggArray.push(egg);
}

//Adds a specified egg to the game, which is layed by a random chicken.
function addEgg(imageEgg, lifeEgg, bonusEgg)
{
    var egg = chickenArray[getRandomInt(0, chickenArray.length)].layEgg(imageEgg, lifeEgg, bonusEgg);
    eggArray.push(egg);
}

function addChicken(position)
{
    chickenArray.push(new Chicken(canvasContext, imageChickenAnimation.image, position.x, position.y, 96, 82));
}

function removeEgg(egg)
{
    eggArray.splice(eggArray.indexOf(egg), 1);
}

function showCursor(bool)
{    
    if(bool)
    {
        canvas.style.cursor = "initial" 
        
    }
    else
    {
        canvas.style.cursor = "none"; 
    }
       
}

function drawPlanks(plankPositionsArray)
{
    for(var i = 0; i < plankPositionsArray.length; i++)
    {   
        drawImage(canvasContext, imagePlank.image, plankPositionsArray[i].x, plankPositionsArray[i].y );
    }
}

function drawImage(canvasContext, image, posX, posY)
{        
    canvasContext.drawImage(image, posX, posY, image.width, image.height);
}

function drawSpriteAnimation(context, image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight)
{
    context.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destinationX, destinationY, destinationWidth, destinationHeight);
}

function drawImageWithRotation(canvasContext, image, posX, posY, centerX, centerY, angle)
{        
    canvasContext.setTransform(1,0,0,1,posX, posY);
    canvasContext.rotate(angle);
    canvasContext.drawImage(image, -centerX, -centerY);
    canvasContext.setTransform(1,0,0,1,0,0);
}

function drawText(canvascontext, text, positionX, positionY, font = "40px Mini Pixel-7", fillstyle = "white", textalign = "left")
{
    canvascontext.font = font;
    canvascontext.fillStyle = fillstyle;
    canvascontext.textAlign = textalign;    
    canvascontext.fillText(text, positionX, positionY);
}

function getMousePosition(canvas, event) 
{
    var rect = canvas.getBoundingClientRect();
    
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}

function getCanvasScale(canvas)
{
    var canvasStyle = window.getComputedStyle(canvas);
    var scaleX = parseInt(canvasStyle.getPropertyValue("width")) / canvas.width;
    var scaleY = parseInt(canvasStyle.getPropertyValue("height")) / canvas.height; 

    return {x: scaleX,  y: scaleY};
}

//Generates a random integer
function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * Math.floor(max - min) + min);
}

//calculates the center of the given image and returns an object of x and y
function calculateMiddleOfImage(image, canvas)
{
    var x = (cursorPosition.x - image.width * getCanvasScale(canvas).x / 2) / getCanvasScale(canvas).x;
    var y = (cursorPosition.y - image.height * getCanvasScale(canvas).y / 2) / getCanvasScale(canvas).y;

    return{x,y};
}

//returns deltaTime in milliseconds
function calculateDeltaTime(timestamp)
{
    if(timeStart === undefined)
    {
        timeStart = timestamp;
    }
    var deltatime = timestamp - lastTime;
    lastTime = timestamp;    
    
    return deltatime;
}

function setHighScore()
{
    if(score > localStorage.getItem("Highscore"))
    {
        localStorage.setItem("Highscore", score);
        console.log("New highscore: " + score);
    }
}

function getHighScore()
{
    if(localStorage.getItem("Highscore") != null)
    {
        return localStorage.getItem("Highscore");
    }
    else
    {
        return 0;
    }
}

function playSound(soundSource)
{
    new Audio(soundSource).play();
}
function playRandomSound(soundArray)
{
    new Audio(soundArray[getRandomInt(0, soundArray.length)]).play();
}

function setCursorPosition(event)
{
    cursorPosition.x = getMousePosition(canvas, event).x;
    cursorPosition.y = getMousePosition(canvas, event).y;
}

function clickHandler()
{
    if(menu)
    {
        init();
        requestAnimationFrame(playGame);
    }   
}

function touchStart(event)
{   
    event.preventDefault();
    clickHandler();
}

function touchMove(event)
{
    event.preventDefault();
    var touches = event.changedTouches;
    var rect = canvas.getBoundingClientRect();

    for(var i = 0; i < touches.length; i++)
    {
        cursorPosition.x = touches[i].clientX - rect.left;
        cursorPosition.y = touches[i].clientY - rect.top;
    }
}