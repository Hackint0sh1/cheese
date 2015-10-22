title('My Project');

// put variables here, just like kahn academy
var exampleVar = 100;
var charX = 100;
var charY = 460;

// put functions here, just like kahn academy
var exampleFunction = function() {
    
    // change color depending on key pressed
    if (keyIsPressed && keyCode === SPACE) {
        fill(255, 0, 0);
    } else {
        fill(0, 0, 255);
    }

    rect(300, 200, 55, 55);
};

// this code is executed once when the program is started
var setup = function() {
	/*
	music = new Audio("blank.wav");
	music.controls = true;
	music.loop = true;                      FOR MUSIC USE
	music.autoplay = true;
	document.body.appendChild(music);
	*/
	char = loadImage("swiggityswag.png");
    // set up the size of the canvas (you probably don't want to change this!)
    size(800, 600);

};

// override draw function, by default it will be called 60 times per second
var draw = function() {

        // clear the screen
        background(255, 255, 0);

	image(char, charX, charY);
	    if(charY > 600) {
		charY = charY - 600;
	    }

	    if(charX > 0 && keyIsPressed && keyCode == LEFT ) {
		charX = charX - 25;
	    }

	    if(charX < 700 && keyIsPressed && keyCode == RIGHT ) {
		charX = charX + 25;
	    }
	    if(charX > 0 && keyIsPressed && keyCode == UP ) {
		charY = charY - 25;
	    }

	    if(charY < 700 && keyIsPressed && keyCode == DOWN ) {
		charY = charY + 25;
	    }

	
	

};
