//tutorial here https://www.youtube.com/watch?v=7PHhRrjgTDA and previous game created here https://www.khanacademy.org/computer-programming/dragon-and-knight/6160202051
//note: KhanAcademy game credits also apply


//onload modal
$(document).ready(function () {
	$('#gameStart').modal('show');
});

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
	this.x = x;
	this.y = y;
	this.speed = speed;
    this.sprite = 'images/char-boy.png';
};

Enemy.prototype.update = function(dt) {
	//enemies move back and forth at random speeds
	if (this.x > 400){
		this.speed = -(100 + Math.floor(Math.random() * 100));
	} else if (this.x < 0){
		this.speed = 100 + Math.floor(Math.random() * 100);
	};
	this.x += this.speed * dt;
	//collision checking
	if (player.x < this.x + 50 &&
	player.x + 50 > this. x &&
	player.y < this.y + 50 &&
	player.y + 50 > this.y){
		this.speed = 0;
		$("#caughtModal").modal('show');
		starCount -= 1;
		setTimeout(() => {
			player.x = 200;
			player.y = 400;
			this.speed = 100 + Math.floor(Math.random() * 100);
		}, 100);
	};
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player trying to do her work without being caught
var Player = function(x, y){
	this.x = x;
	this.y = y;
	this.sprite = "images/char-cat-girl.png";
	this.starCount = 0;
};

Player.prototype.update = function(dt){
	/*if (this.y === 0){
	$("#winModal").modal('show');
	setTimeout(() => {
		this.x = 200;
		this.y = 400;
	}, 1000);
};*/
	if ((star.x < this.x + 50 && star.x + 50 > this. x ) &&
	(star.y < this.y + 50 && star.y + 50 > player.y)){
		console.log("got me");
		this.starCount ++;
		star.y = -400;
	};
};

Player.prototype.grab = function(Star){

};

Player.prototype.render = function(){
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress){
	//move along x axis
	if (keyPress === 'left' && this.x > 0){
		this.x -= 50;
	};
	if (keyPress === 'right' && this.x < 400){
		this.x += 50;
	};
	//movement along y axis
	if (keyPress === 'up' && this.y > 0){
		this.y -= 50;
	} 
	if (keyPress === 'down' && this.y < 400){
		this.y += 50;
	};
};

//create star object
var Star = function(x, y){
	this.x = x;
	this.y = y;
	this.sprite = "images/star.png";
};

Star.prototype.update = function(dt){

};

Star.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//create array for stars
var allStars = [];

var allStarsX = [];

for (var i = 0; i < 2; i++){
	allStarsX.push(Math.random() * 400);
}

var allStarsY = [];

for (var i = 0; i < 2; i++){
	allStarsY.push(Math.random() * 300);
}

for (var i = 0; i < allStarsX.length; i ++){
		star = new Star(allStarsX[i], allStarsY[i]);
		allStars.push(star);
		//Player.update(allStars[i]);
		//allStars[i] -= 1;
}

//new player
var player = new Player(200, 400);

//create array for enemies
var allEnemies = [];

var enemyYLocation = [/*850, 125, 200, 275*/];

enemyYLocation.forEach(function(locationY) {
	enemy = new Enemy(0, locationY, 200);
	allEnemies.push(enemy);
});

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});