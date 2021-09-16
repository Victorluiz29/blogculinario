alert('Bem vinda a pagina dos salgados')

var intervalo = 1000;

function slide1 (){
	document.getElementById("salgados").src = "palitinhos salgados royal.jpg";
	setTimeout("slide2()",intervalo)
}


function slide2 (){
	document.getElementById("salgados").src = "salgados de forno.jpg";
	setTimeout("slide3()",intervalo)
}


function slide3 (){
	document.getElementById("salgados").src = "massa de pastel.jpg";
	setTimeout("slide4()",intervalo)
}

function slide4 (){
	document.getElementById("salgados").src = "joelho.jpg";
	setTimeout("slide5()",intervalo)
}

function slide5 (){
	document.getElementById("salgados").src = "enroladinho de salsicha.jpg";
	setTimeout("slide6()",intervalo)
}

function slide6 (){
	document.getElementById("salgados").src = "pizza de liquidificador.jpg";
	setTimeout("slide7()",intervalo)
}

function slide7 (){
	document.getElementById("salgados").src = "kibe de forno.jpg";
	setTimeout("slide8()",intervalo)
}

function slide8 (){
	document.getElementById("salgados").src = "bolinho de queijo.jpg";
	setTimeout("slide9()",intervalo)
}

function slide9 (){
	document.getElementById("salgados").src = "cigarrete de presunto e queijo.jpg";
	setTimeout("slide1()",intervalo)
}