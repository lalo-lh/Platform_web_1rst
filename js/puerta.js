function Puerta(x,y,imagen) {
	Kinetic.Image.call(this);
	this.setWidth(50);
	this.setHeight(80);
	this.setX(x);
	this.setY(y);
	this.setImage(imagen);
}
Puerta.prototype = Object.create(Kinetic.Image.prototype);