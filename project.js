title('My Project');

// put variables here, just like kahn academy
var exampleVar = 100;
var charX = 100;
var charY = 460;
var currentScene = 5;


var drawscene1 = function() {
    currentScene = 1;
    background(255, 255, 255);
    text("1", 178, 20);
   
};

var drawscene2 = function() {
    currentScene = 2;
    background(255, 255, 255);
    text("2", 178, 20);
   
};

var drawscene3 = function() {
    currentScene = 3;
    background(255, 255, 255);
    text("3", 178, 20);
   
};

var drawscene4 = function() {
    currentScene = 4;
    background(255, 255, 255);
    text("4", 178, 20);
   
};

var drawscene5 = function() {
    currentScene = 5;
     background(0, 200, 200);
    text("5", 178, 20);
    
   
};

var drawscene6 = function() {
    currentScene = 6;
     background(0, 200, 200);
    text("6", 178, 20);
   
};

var drawscene7 = function() {
    currentScene = 7;
    background(255, 255, 255);
    text("7", 178, 20);
   
};

var drawscene8 = function() {
    currentScene = 8;
    background(255, 255, 255);
    text("8", 178, 20);
   
};

var drawscene9 = function() {
    currentScene = 9;
    background(255, 255, 255);
    text("9", 178, 20);
   
};


    
var setup = function() {
	/*
	music = new Audio("blank.wav");
	music.controls = true;
	music.loop = true;                      FOR MUSIC USE
	music.autoplay = true;
	document.body.appendChild(music);
	*/
	char = loadImage("rsz_swiggityswag.png");
    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);
        // clear the screen
};


var draw = function() {

    drawscene5();

    
    
   

	image(char, charX, charY);
	    if(charY > 600) {
		charY = charY - 600;
	    }

	    if(keyIsPressed && keyCode == LEFT ) {
		charX = charX - 25;
            
		
	    };

            if(//add if hits left side and establish parameters (currentscene to move a scene tadadadadadda :D
    
	    if(keyIsPressed && keyCode == RIGHT ) {
		charX = charX + 25;
	    }
            




      /*      if(charX > 0 && keyIsPressed && keyCode == UP ) {
		charY = charY - 25;
	    }

	    if(charY < 700 && keyIsPressed && keyCode == DOWN ) {
		charY = charY + 25;
	    }
	    */
	
	

};
