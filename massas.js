alert('Bem vinda a pagina de massa')

var intervalo = 1000;

function slide1 (){
	document.getElementById("massa").src = "panqueca americana.jpg";
	setTimeout("slide2()",intervalo)
}


function slide2 (){
	document.getElementById("massa").src = "massa para crepe.jpg";
	setTimeout("slide3()",intervalo)
}


function slide3 (){
	document.getElementById("massa").src = "pizza de pao de forma.jpg";
	setTimeout("slide4()",intervalo)
}

function slide4 (){
	document.getElementById("massa").src = "macarrao sabor pizza.jpg";
	setTimeout("slide5()",intervalo)
}

function slide5 (){
	document.getElementById("massa").src = "rosca caseira.jpg";
	setTimeout("slide6()",intervalo)
}

function slide6 (){
	document.getElementById("massa").src = "pizza enrolada.jpg";
	setTimeout("slide7()",intervalo)
}

function slide7 (){
	document.getElementById("massa").src = "canelone invertido.jpg";
	setTimeout("slide8()",intervalo)
}

function slide8 (){
	document.getElementById("massa").src = "macarrao ao molho branco.jpg";
	setTimeout("slide9()",intervalo)
}

function slide9 (){
	document.getElementById("massa").src = "pao de calabresa.jpg";
	setTimeout("slide1()",intervalo)
}