var teclas = {
UP: 40,
DOWN: 38,
LEFT: 37,
RIGHT: 39,

};

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel= cuadrito.getContext("2d");
var x = 150;
var y = 150;
dibujarLinea("colorcito",149,149,151,151,papel); 

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth= 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
	var colorcito = "green";
	var	movimiento = 1;
	switch(evento.keyCode)
	{
		case teclas.DOWN:
		dibujarLinea (colorcito, x, y-movimiento, x, y , papel);
		y = y - movimiento;
		break;
		case teclas.UP:
		dibujarLinea (colorcito, x, y, x, y +movimiento, papel);
		y = y + movimiento;
		break;
		default:
		case teclas.LEFT:
		dibujarLinea (colorcito, x- movimiento, y, x , y, papel);
		x = x - movimiento;
		case teclas.RIGHT:
		dibujarLinea (colorcito, x, y, x + movimiento, y, papel);
		x = x + movimiento;
	}
}