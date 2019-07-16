var imagenes = [];
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Tocinauro"] = "cerdo.png";
imagenes ["Pokacho"] = "pollo.png";
imagenes["jigglypuff"] = "jigglypuff.png"

var coleccion = [];
coleccion.push (new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Tocinauro", 120, 40));
coleccion.push(new Pakiman("Pokacho", 80,50));
coleccion.push(new Pakiman ("jigglypuff", 140,40));

for (var freddito of coleccion)
{
freddito.mostrar();
}

for (var x in imagenes[0])
{
	console.log(x);
}