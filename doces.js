alert('Bem vinda  apagina de doces')

var intervalo = 1000;

function slide1 (){
	document.getElementById("doces").src = "torta de limao.jpg";
	setTimeout("slide2()",intervalo)
}


function slide2 (){
	document.getElementById("doces").src = "fundue de chocolate.jpg";
	setTimeout("slide3()",intervalo)
}


function slide3 (){
	document.getElementById("doces").src = "ceviche peruano.jpg";
	setTimeout("slide4()",intervalo)
}

function slide4 (){
	document.getElementById("doces").src = "rosquinhas doces.jpg";
	setTimeout("slide5()",intervalo)
}

function slide5 (){
	document.getElementById("doces").src = "cajuzinhos finos.jpg";
	setTimeout("slide6()",intervalo)
}

function slide6 (){
	document.getElementById("doces").src = "bisnaguinhas doces.jpg";
	setTimeout("slide7()",intervalo)
}

function slide7 (){
	document.getElementById("doces").src = "bolinho de chuva.jpg";
	setTimeout("slide8()",intervalo)
}

function slide8 (){
	document.getElementById("doces").src = "banoffee.jpg";
	setTimeout("slide9()",intervalo)
}

function slide9 (){
	document.getElementById("doces").src = "bolo no pote.jpg";
	setTimeout("slide1()",intervalo)
}