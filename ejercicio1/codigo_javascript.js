function invertirCadena(cadena){
	let cadenaInvertida='';
	for(let i=cadena.length-1; i>=0; --i){
		cadenaInvertida+=cadena[i];
	}
	return cadenaInvertida;
}

var cadena = prompt("Introduce una cadena de caracteres");
alert(invertirCadena(cadena));