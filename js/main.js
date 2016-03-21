var framesP = {
	estatico: [{
		x: 30,
		y: 30,
		width: 50,
		height: 130,
	}],
	caminar: [{
		x: 30,
		y: 30,
		width: 50,
		height: 130,
	},{
		x: 170,
		y: 30,
		width: 50,
		height: 130,
	},{
		x: 290,
		y: 30,
		width: 50,
		height: 130,
	}, {
		x: 420,
		y: 30,
		width: 50,
		height: 130,
	}],
	saltar: [{
		x: 170,
		y: 30,
		width: 50,
		height: 130,
	}]
};

var stage,fondo, grupoAssets, puntaje, imagenFondo;
var keyboard = {};
var intv;
var  b = false;
var personaje;
var grav = 1.3;
var val_reb = 0;
var juego = new Game();

var imgEn = new Image();
imgEn.src = 'imgs/enemy.png';

var imgLla = new Image();
imgLla.src = 'imgs/llave.png';

var imgMon = new Image();
imgMon.src = 'imgs/moneda.png';

var imgHer = new Image();
imgHer.src = 'imgs/heroe.png';

var imgPuer = new Image();
imgPuer.src = 'imgs/puerta.png';

var imgPat = new Image();
imgPat.src = 'imgs/pattern.png';

var imgFondo = new Image();
imgFondo.src = 'imgs/luna.jpg';



grupoAssets = new Kinetic.Group({
	x: 0,
	y: 0
});

stage = new Kinetic.Stage({
	container:'game',
	width:960,
	height:500,
});

imagenFondo = new Kinetic.Image({
	x: 0,
	y: 0,
	image: imgFondo,
	width: stage.getWidth(),
	height: stage.getHeight()
});

puntaje = new Kinetic.Text({
	text: 'Puntaje: 0',
	height: 25,
	width: 150,
	x:stage.getWidth-150,
	y:15,
	fill: '#f7f7f7',
	fontFamily:'Arial',
	fontSize: 20
})

function nivelUno(){
	juego.puntaje =0;
	if(b) return;
	b = true; 
	juego.puntaje = 0;
	juego.llave = true;
	fondo = new Kinetic.Layer();
	grupoAssets.add(new Enemigo(200,stage.getHeight()-75,imgEn));
	grupoAssets.add(new Enemigo(850,stage.getHeight()/3.9-60,imgEn));
	grupoAssets.add(new Enemigo(170,stage.getHeight()/3-60,imgEn));
	grupoAssets.add(new Enemigo(1020,stage.getHeight()-75,imgEn));
	grupoAssets.add(new Enemigo(1600,stage.getHeight()/1.5-60,imgEn));

	/* Plataforma */

	var piso = new Plataforma(0,stage.getHeight()-15,imgPat);
	piso.setWidth(stage.getWidth()*2);
	grupoAssets.add(piso);	
	grupoAssets.add(new Plataforma(20,stage.getHeight()/1.5,imgPat));
	grupoAssets.add(new Plataforma(190,stage.getHeight()/3,imgPat));
	grupoAssets.add(new Plataforma(510,stage.getHeight()/1.6,imgPat));
	grupoAssets.add(new Plataforma(870,stage.getHeight()/3.9,imgPat));
	grupoAssets.add(new Plataforma(1210,stage.getHeight()/2.4,imgPat));
	grupoAssets.add(new Plataforma(1610,stage.getHeight()/1.5,imgPat));

	grupoAssets.add(new Moneda(250,stage.getHeight()/3-130,imgMon));
	grupoAssets.add(new Moneda(580,stage.getHeight()/2.6,imgMon));
	grupoAssets.add(new Moneda(350,stage.getHeight()/1.3,imgMon));
	grupoAssets.add(new Moneda(900,stage.getHeight()/1.5,imgMon));
	grupoAssets.add(new Moneda(1030,stage.getHeight()/3-130,imgMon));
	grupoAssets.add(new Moneda(1600,stage.getHeight()/3.6,imgMon));

	grupoAssets.add(new Puerta(900,stage.getHeight()-85,imgPuer));

	personaje = new Heroe(imgHer,framesP);
	personaje.setX(0);
	personaje.setY(stage.getHeight()-personaje.getHeight());
	personaje.limiteDer = stage.getWidth() - personaje.getWidth();
	personaje.limiteTope = stage.getHeight();
	fondo.add(imagenFondo);
	fondo.add(personaje);
	fondo.add(grupoAssets);
	fondo.add(puntaje);
	personaje.start();
	stage.add(fondo);

	intv = setInterval(frameloop,1000/20); 
}

function nivelDos(){
	fondo = new Kinetic.Layer();
	juego.llave = false;

	grupoAssets.add(new Enemigo(200,stage.getHeight()/1.5-60,imgEn));
	grupoAssets.add(new Enemigo(510,stage.getHeight()/3-60,imgEn));
	grupoAssets.add(new Enemigo(800,stage.getHeight()-75,imgEn));
	grupoAssets.add(new Enemigo(1660,stage.getHeight()/3.5-60,imgEn));
	grupoAssets.add(new Enemigo(1070,stage.getHeight()/2-60,imgEn));

	/* Plataforma */

	var piso = new Plataforma(0,stage.getHeight()-15,imgPat);
	piso.setWidth(stage.getWidth()*2);
	grupoAssets.add(piso);	

	grupoAssets.add(new Plataforma(200,stage.getHeight()/1.5,imgPat));
	grupoAssets.add(new Plataforma(510,stage.getHeight()/3,imgPat));
	grupoAssets.add(new Plataforma(1070,stage.getHeight()/2,imgPat));
	grupoAssets.add(new Plataforma(1410,stage.getHeight()/1.6,imgPat));
	grupoAssets.add(new Plataforma(800,stage.getHeight()/2.6,imgPat));
	grupoAssets.add(new Plataforma(1660,stage.getHeight()/3.5,imgPat));

	grupoAssets.add(new Llave(510,stage.getHeight()/3-60,imgLla));

	grupoAssets.add(new Moneda(150,stage.getHeight()/3,imgMon));
	grupoAssets.add(new Moneda(400,stage.getHeight()-75,imgMon));
	grupoAssets.add(new Moneda(780,stage.getHeight()/4-60,imgMon));
	grupoAssets.add(new Moneda(1000,stage.getHeight()-75,imgMon));
	grupoAssets.add(new Moneda(1330,stage.getHeight()/2,imgMon));
	grupoAssets.add(new Moneda(1700,stage.getHeight()/3.6-60,imgMon));

	grupoAssets.add(new Puerta(1600,stage.getHeight()-85,imgPuer));

	personaje = new Heroe(imgHer,framesP);
	personaje.setX(0);
	personaje.setY(stage.getHeight()-personaje.getHeight());
	personaje.limiteDer = stage.getWidth() - personaje.getWidth();
	personaje.limiteTope = stage.getHeight();
	fondo.add(imagenFondo);
	fondo.add(personaje);
	fondo.add(grupoAssets);
	fondo.add(puntaje);
	personaje.start();
	stage.add(fondo);

	intv = setInterval(frameloop,1000/20); 
}

function moverPersonaje(){
	if((personaje.getAnimation() != 'caminar') && (keyboard[37] || keyboard[39])){
		personaje.setAnimation('caminar');
	}
	if (keyboard[37]){
		personaje.retroceder();
	}
	if (keyboard[39]){
		personaje.caminar();
	}
	if (keyboard[38] && personaje.contador < 1){
		personaje.saltar();
	}
	if (!(keyboard[39] || keyboard[38] || keyboard[37]) && !personaje.estaSaltando) {
		personaje.setAnimation('estatico');
	};
}

function addKeyBoardEvents(){
	addEvent(document,"keydown",function(e){
		keyboard[e.keyCode] = true;
	});
	addEvent(document,"keyup",function(e){
		keyboard[e.keyCode] = false;
	});

	function addEvent(element,eventName,func){
		if(element.addEventListener){
			element.addEventListener(eventName,func,false);
		}
		else if(element.attachEvent){
			element.attachEvent(eventName,func);
		}
	}
}

function hit(a,b){
	var hit = false;
	//colisiones horizontales
	if(b.getX() + b.getWidth() >= a.getX() && b.getX() < a.getX() + a.getWidth())
	{
		//colisiones verticales
		if(b.getY() + b.getHeight() >= a.getY() && b.getY() < a.getY() + a.getHeight())
			hit = true;
	}
	
	//colisiones de a con b
	if(b.getX() <= a.getX() && b.getX() + b.getWidth() >= a.getX() + a.getWidth())
	{
		if(b.getY() <= a.getY() && b.getY() + b.getHeight() >= a.getY() + a.getHeight())
			hit = true;
	}

	//colisiones b con a
	if(a.getX() <= b.getX() && a.getX() + a.getWidth() >= b.getX() + b.getWidth())
	{
		if(a.getY() <= b.getY() && a.getY() + a.getHeight() >= b.getY() + b.getHeight())
			hit = true;
	}
	return hit;

}

function moverFondo(){
	if(personaje.getX() > (stage.getWidth()/2) && keyboard[39]){
		personaje.vx = 2;
		for(i in grupoAssets.children){
			var asset = grupoAssets.children[i];
			asset.move(-5,0);
		}
	}
	else {
		personaje.vx = 10;
	}
}

function moverEnemigo(){
	var enemigos = grupoAssets.children;
	for(i in enemigos){
		var enemigo = enemigos[i];
		if(enemigo instanceof Enemigo)
			enemigo.mover();
	}
}

function aplicarFuerzas(){
	personaje.aplicarGravedad(grav,val_reb)
}

function detectarColPlataforma(){
	var plataformas = grupoAssets.children;
	for(i in plataformas){
		var plataforma = plataformas[i];
		if (hit(plataforma,personaje)) {
			if (plataforma instanceof Enemigo) {
				if (personaje.vy > 2 && personaje.getY() < plataforma.getY()) {
					plataforma.remove();
					juego.puntaje += 5;
					console.log(juego.puntaje);
				}
				else {
					grupoAssets.removeChildren();
					document.querySelector('#perder').style.display = "block";
					document.querySelector('#game').style.display = "none";
					window.clearInterval(intv);
					b = false;
				}
			}
			else if(plataforma instanceof Plataforma && personaje.getY() < plataforma.getY() && personaje.vy >= 0){
				//Comportamiento 
				personaje.contador = 0;
				personaje.setY(plataforma.getY() - personaje.getHeight());
				personaje.vy *= val_reb;
			}
			else if(plataforma instanceof Moneda){
				plataforma.remove();
				juego.puntaje++;
			}
			else if(plataforma instanceof Llave){
				plataforma.remove();
				juego.llave = true;
				continue;
			}
			else if(plataforma instanceof Puerta && juego.llave){
				if(juego.nivel == 1){
					grupoAssets.removeChildren();
					window.clearInterval(intv);
					juego.nivel = 2;
					nivelDos();
				}
				else if(juego.nivel == 2) {
					grupoAssets.removeChildren();
					document.querySelector('#ganar').style.display = "block";
					document.querySelector('#game').style.display = "none";
					document.querySelector('#score').innerHTML = juego.puntaje;
					window.clearInterval(intv);
					b = false;
				}
			}
		}
	}
}
function actualizarTexto() {
	puntaje.setText('Puntaje: '+juego.puntaje);
}
addKeyBoardEvents();

function frameloop(){
	aplicarFuerzas();
	actualizarTexto();
	detectarColPlataforma();
	moverFondo();
	moverPersonaje();
	moverEnemigo();
	stage.draw();
}


