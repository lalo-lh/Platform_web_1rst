function Plataforma(x,y,imagen){
	Kinetic.Rect.call(this);
	this.setWidth(200);
	this.setHeight(50);
	this.setX(x);
	this.setY(y);
	this.setFill('white');
}
Plataforma.prototype = Object.create(Kinetic.Rect.prototype);	