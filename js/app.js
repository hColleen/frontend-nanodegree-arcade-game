//tutorial here https://www.youtube.com/watch?v=7PHhRrjgTDA and previous game created here https://www.khanacademy.org/computer-programming/dragon-and-knight/6160202051
//note: KhanAcademy game credits also apply


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
		setTimeout(() => {
			player.x = 200;
			player.y = 400;
			this.speed = 100 + Math.floor(Math.random() * 100);
		}, 1000);
	};
};


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x, y){
	this.x = x;
	this.y = y;
	this.sprite = "images/char-cat-girl.png";
};

Player.prototype.update = function(dt){
	
};

Player.prototype.render = function(){
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress){
	//move along x axis
	if (keyPress === 'left' && this.x > 0){
		this.x -= 100;
	};
	if (keyPress === 'right' && this.x < 400){
		this.x += 100;
	};
	//movement along y axis
	if (keyPress === 'up' && this.y > 0){
		this.y -= 100;
	} 
	if (keyPress === 'down' && this.y < 400){
		this.y += 100;
	};
};

var player = new Player(200, 400);

var allEnemies = [];

var enemyYLocation = [50, 125, 200];

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

//Modal scripting
var modal = document.getElementById("modal");
var close = document.getElementsByClassName("close")[0];
var modalText = document.getElementsByClassName("modal-text")[0];

//onload modal
$(document).ready(function () {
	$('.modal').modal('show');
});