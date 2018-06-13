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





var player = new Player();


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
