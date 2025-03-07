var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 500;
document.body.appendChild(canvas);

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function(){
	bgReady = true;
};
bgImage.src = "image/backgroung.jpg";

var heroReady = false;
var heroImage = new Image();
heroImage.onload = function(){
	heroReady = true;
};
heroImage.src = "image/hero.png";

var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function(){
	monsterReady = true;
};
monsterImage.src = "image/monster.png";

var monsterReady = false;
var monster2Image = new Image();
monster2Image.onload = function(){
	monsterReady = true;
};
monster2Image.src = "image/monster2.png";

var monsterReady = false;
var monster3Image = new Image();
monster3Image.onload = function(){
	monsterReady = true;
};
monster3Image.src = "image/monster3.png";

var monsterReady = false;
var monster4Image = new Image();
monster4Image.onload = function(){
	monsterReady = true;
};
monster4Image.src = "image/monster2.png";


var hero = {
	speed: 256
};

var monster = {};

var monster2 = {};

var monster3 = {};

var monster4 = {};

var monsterCaught = 0;

var keysDown = {};

addEventListener("keydown", function(e){
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function(e){
	delete keysDown[e.keyCode];
}, false);

//Resetando o Jogo
var reset = function(){
	//Testar outras opções
	hero.x = canvas.width / 2;
	hero.y = canvas.height / 2;
	//Testar outras opções
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.height - 64));
	
	monster2.x = 32 + (Math.random() * (canvas.width - 64));
	monster2.y = 32 + (Math.random() * (canvas.height - 64));
	
	monster3.x = 32 + (Math.random() * (canvas.width - 64));
	monster3.y = 32 + (Math.random() * (canvas.height - 64));
	
	monster4.x = 32 + (Math.random() * (canvas.width - 64));
	monster4.y = 32 + (Math.random() * (canvas.height - 64));
};

var update = function (modifier){
	if(38 in keysDown){
		//Para cima
		hero.y -= hero.speed * modifier;
	}
	if(40 in keysDown){
		//Para baixo
		hero.y += hero.speed * modifier;
	}
	if(37 in keysDown){
		//Para esquerda
		hero.x -= hero.speed * modifier;
	}
	if(39 in keysDown){
		//Para direita
		hero.x += hero.speed * modifier;
	}
	
	//Colisão
	if(
	hero.x <= (monster.x + 32)
	&& monster.x <= (hero.x + 32)
	&& hero.y <= (monster.y + 32)
	&& monster.y <= (hero.y + 32)
	){
		++monsterCaught;
		reset();
	}
	
	if(
	hero.x <= (monster2.x + 32)
	&& monster2.x <= (hero.x + 32)
	&& hero.y <= (monster2.y + 32)
	&& monster2.y <= (hero.y + 32)
	){
		--monsterCaught;
		reset();
	}
	
	if(
	hero.x <= (monster3.x + 32)
	&& monster3.x <= (hero.x + 32)
	&& hero.y <= (monster3.y + 32)
	&& monster3.y <= (hero.y + 32)
	){
		monsterCaught=2*monsterCaught;
		reset();
	}
	
	if(
	hero.x <= (monster4.x + 32)
	&& monster4.x <= (hero.x + 32)
	&& hero.y <= (monster4.y + 32)
	&& monster4.y <= (hero.y + 32)
	){
		--monsterCaught;
		reset();
	}
};

var render = function(){
	if(bgReady){
		ctx.drawImage(bgImage, 0, 0);
	}
	if(heroReady){
		ctx.drawImage(heroImage, hero.x, hero.y);
	}
	if(monsterReady){
		ctx.drawImage(monsterImage, monster.x, monster.y);
		ctx.drawImage(monster2Image, monster2.x, monster2.y);
		ctx.drawImage(monster3Image, monster3.x, monster3.y);
		ctx.drawImage(monster4Image, monster4.x, monster4.y);
	}

	
	//Placar
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.font = "22px Verdana";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Ovos pegos: " + monsterCaught, 32, 32);
};
//Loop
var main = function(){
	var now = Date.now();
	var delta = now - then;
	update(delta / 1000);
	render();
	then = now;
};

//Inicia o Jogo
reset();
var then = Date.now();
setInterval(main, 1);








