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
	if (this.x > 400){
		this.speed = -(100 + Math.floor(Math.random() * 100));
	} else if (this.x < 0){
		this.speed = 100 + Math.floor(Math.random() * 100);
	};
	this.x += this.speed * dt;
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
	
};


var allEnemies = [];

var enemyYLocation = [63, 147, 230]

enemyYLocation.forEach(function(locationY) {
	enemy = new Enemy(0, locationY, 200);
	allEnemies.push(enemy);
});



var player = new Player(202, 405);


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
