//pagina inicial//

var mensagem = "Bem Vindo ao Blog Culinária";
alert("Bem Vindo ao Blog Culinária");

var intervalo = 1000;

function slide1 (){
	document.getElementById("foto").src = "pizza de calabresa.jpg";
	setTimeout("slide2()",intervalo)
}


function slide2 (){
	document.getElementById("foto").src = "cupcake de chocolate.JPG";
	setTimeout("slide3()",intervalo)
}


function slide3 (){
	document.getElementById("foto").src = "empadao de frango com catupiry.JPG";
	setTimeout("slide4()",intervalo)
}

function slide4 (){
	document.getElementById("foto").src = "pave de chocolate.jpg";
	setTimeout("slide5()",intervalo)
}

function slide5 (){
	document.getElementById("foto").src = "feijoada.jpg";
	setTimeout("slide6()",intervalo)
}

function slide6 (){
	document.getElementById("foto").src = "lasanha de frango.jpg";
	setTimeout("slide7()",intervalo)
}

function slide7 (){
	document.getElementById("foto").src = "coxinha de frango.jpg";
	setTimeout("slide8()",intervalo)
}

function slide8 (){
	document.getElementById("foto").src = "brownie.JPG";
	setTimeout("slide9()",intervalo)
}

function slide9 (){
	document.getElementById("foto").src = "nhoque de batata.jpg";
	setTimeout("slide1()",intervalo)
}