var contadorJogadas = 0;
var turno = 1;
var O_val = "O";
var X_val = "X";
var EMP_val = " ";

function rodada(btn) {
	if (btn.value == EMP_val){
		if(turno == 1){
			btn.value = X_val;
			btn.style.backgroundColor = "red";
		}else{
			btn.value = O_val;
			btn.style.backgroundColor = "green";
		}
		turno = turno*(-1);
		validaJogada();
	}
}

function validaJogada() {
	contadorJogadas = 0;
	var btn1 = document.velha.btn1.value;
	var btn2 = document.velha.btn2.value;
	var btn3 = document.velha.btn3.value;
	var btn4 = document.velha.btn4.value;
	var btn5 = document.velha.btn5.value;
	var btn6 = document.velha.btn6.value;
	var btn7 = document.velha.btn7.value;
	var btn8 = document.velha.btn8.value;
	var btn9 = document.velha.btn9.value;
	
	var valorTurno;
	if(turno == -1){
		valorTurno = X_val;		
	}else if (turno == 1){
		valorTruno = O_val;
	}
	
	if(
	(btn1 == valorTurno && btn2 == valorTurno && btn3 == valorTurno)||
	(btn4 == valorTurno && btn5 == valorTurno && btn6 == valorTurno)||
	(btn7 == valorTurno && btn8 == valorTurno && btn9 == valorTurno)||
	(btn1 == valorTurno && btn4 == valorTurno && btn7 == valorTurno)||
	(btn2 == valorTurno && btn5 == valorTurno && btn8 == valorTurno)||
	(btn3 == valorTurno && btn6 == valorTurno && btn9 == valorTurno)||
	(btn1 == valorTurno && btn5 == valorTurno && btn9 == valorTurno)||
	(btn3 == valorTurno && btn5 == valorTurno && btn7 == valorTurno)){
		alert("Jogador "+ valorTurno+ " ganhou!");
		reset();
	}else{
		if(btn1 != EMP_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(btn2 != EMP_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(btn3 != EMP_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(btn4 != EMP_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(btn5 != EMP_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(btn6 != EMP_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(btn7 != EMP_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(btn8 != EMP_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(btn9 != EMP_val){
			contadorJogadas = contadorJogadas + 1;
		}
		if(contadorJogadas >= 9){
			alert("XIIIIIII deu velha")
			reset()
		}
	}
}

function reset(){
	document.velha.btn1.value = EMP_val;
	document.velha.btn2.value = EMP_val;
	document.velha.btn3.value = EMP_val;
	document.velha.btn4.value = EMP_val;
	document.velha.btn5.value = EMP_val;
	document.velha.btn6.value = EMP_val;
	document.velha.btn7.value = EMP_val;
	document.velha.btn8.value = EMP_val;
	document.velha.btn9.value = EMP_val;
	
	document.velha.btn1.style.backgroundColor = "blue";
	document.velha.btn2.style.backgroundColor = "blue";
	document.velha.btn3.style.backgroundColor = "blue";
	document.velha.btn4.style.backgroundColor = "blue";
	document.velha.btn5.style.backgroundColor = "blue";
	document.velha.btn6.style.backgroundColor = "blue";
	document.velha.btn7.style.backgroundColor = "blue";
	document.velha.btn8.style.backgroundColor = "blue";
	document.velha.btn9.style.backgroundColor = "blue";
	
	turno = 1;
	contadorJogadas = 0;
}