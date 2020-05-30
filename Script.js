const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

var debug = true;

var imageMenu = new ImageSource("Images/Menu.png", x=0,y=0, width=720, height=1280);
var imageBackground = new ImageSource("Images/Background.jpg", x=0,y=0, width=720, height=1280);
var imageBasket = new ImageSource("Images/Basket.png", x=0,y=0, width=100, height=100);
var imageChicken = new ImageSource("Images/Chicken.png", x=0,y=0, width=96, height=82);
var imageWhiteEgg = new ImageSource("Images/Egg.png", x=0,y=0, width=27, height=35);
var imageBrownEgg = new ImageSource("Images/Brown_egg.png", x=0,y=0, width=27, height=35);
var imageBrokenEgg = new ImageSource("Images/Broken_egg.png", x=0,y=0,width=35, height=35);
var imagePlank = new ImageSource("Images/Plank.png", x=0,y=0,width=650, height=24);
var imageLives0 = new ImageSource("Images/Lives0.png", x=0,y=0,width=187, height=40);
var imageLives1 = new ImageSource("Images/Lives1.png", x=0,y=0,width=187, height=40);
var imageLives2 = new ImageSource("Images/Lives2.png", x=0,y=0,width=187, height=40);
var imageLives3 = new ImageSource("Images/Lives3.png", x=0,y=0,width=187, height=40);
var imageLives4 = new ImageSource("Images/Lives4.png", x=0,y=0,width=187, height=40);
var imageLives5 = new ImageSource("Images/Lives5.png", x=0,y=0,width=187, height=40);

var imageEggArray = [imageWhiteEgg, imageBrownEgg];
var imageLivesArray = [imageLives0,imageLives1,imageLives2,imageLives3,imageLives4,imageLives5];

var cursorPosition = {x: 350 * getCanvasScale(canvas).x, y: 1000 * getCanvasScale(canvas).y};

var plankPositions = [{x:35,y:200}, {x:35, y:400}, {x:35, y:600}];

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
const minSpawnTime = 50;

document.addEventListener("DOMContentLoaded", startup);

function startup()
{
    window.addEventListener("resize", getCanvasScale(canvas), false);
    canvas.addEventListener("click", function(){clickHandler()});
    canvas.addEventListener("mousemove", setCursorPosition, false);

    canvas.addEventListener("touchstart", touchStart, false);
    //canvas.addEventListener("touchend", touchEnd, false);
    //canvas.addEventListener("touchcancel", touchCancel, false);
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
        {x:getRandomInt(plankPositions[0].x, imagePlank.image.width - imageChicken.image.width), y:plankPositions[0].y - imageChicken.image.height}, 
        {x:getRandomInt(plankPositions[1].x, imagePlank.image.width - imageChicken.image.width), y:plankPositions[1].y - imageChicken.image.height}, 
        {x:getRandomInt(plankPositions[2].x, imagePlank.image.width - imageChicken.image.width), y:plankPositions[2].y - imageChicken.image.height}
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

function playGame()
{
    canvasContext.clearRect(0,0, canvas.width, canvas.height);
    drawImage(canvasContext, imageBackground.image,0,0); //BACKGROUND   
    
    menu = false;
    showCursor(false);
    updateLives();
    updateScore();
    drawPlanks(plankPositions);

    if(lives > 0)
    {        
        basket.Update();

        chickenArray.forEach(chicken =>{
            chicken.update();
        })

        eggArray.forEach(egg =>{
            if (egg.yPosition + egg.image.height * getCanvasScale(canvas).y >= canvas.height) //if egg hits the ground
            {                
                lives--                
                removeEgg(egg);
            }
            else 
            { 
                if (basket.CheckCollision(egg)) //if egg hits basket
                {
                    score += egg.speed;
                    caughtEggs++;
                    
                    if (spawnTime > minSpawnTime)
                    {
                        spawnTime--;
                    }
                    
                    removeEgg(egg);
                }
                else
                {
                    egg.update();
                }
            }
        });

        if (timer > spawnTime) 
        {
            addEgg();            
            timer = 0;
        }

        if (debug) {
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

function addEgg()
{
    //Instantiates the eggs that are going to be dropped
    eggArray.push(new Egg(canvasContext, imageEggArray[getRandomInt(0,imageEggArray.length)].image, chickenPositions));
}

function addChicken(position)
{
    chickenArray.push(new Chicken(canvasContext, imageChicken.image, position.x, position.y));
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

function drawPlanks(plankPositions)
{
    for(var i = 0; i < plankPositions.length; i++)
    {   
        drawImage(canvasContext, imagePlank.image, plankPositions[i].x, plankPositions[i].y );
    }
}

function drawImage(canvasContext, image, posX, posY)
{        
    canvasContext.drawImage(image, posX, posY, image.width, image.height);
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
        requestAnimationFrame(function(){playGame()});
    }   
}

function touchStart(event)
{   
    event.preventDefault();
    clickHandler();
}

// function touchEnd()
// {

// }

// function touchCancel()
// {

// }

function touchMove(event)
{
    event.preventDefault();
    var touches = event.changedTouches;

    for(var i = 0; i < touches.length; i++)
    {
        cursorPosition.x = touches[i].clientX;
        cursorPosition.y = touches[i].clientY;
    }
}