function Llave(x,y,img){
	Kinetic.Image.call(this);
	this.setWidth(55);
	this.setX(x);
	this.setY(y);
	this.setImage(img);
	this.setHeight(45);
}

Llave.prototype = Object.create(Kinetic.Image.prototype);