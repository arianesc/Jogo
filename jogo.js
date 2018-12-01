var x = 75; var y = 0;//posição do gatinho
var oX = 975;var oY = 75;//posição da maosinha inicial
var oY1 = 75;var oY2 = 75;var oY3 = 75;//posição Y das maosinhas adicionais, como a posição X
//o X é igual pra todas
var oX1; var oX2;var cont = 0; var l = 0;
var gato = []; var mao = [];
var condicao = 1;
var ambiente;
var tela = 1;var regressao = 10;
	var cont2 = 0;

var pontuacao = 0;//contador de pontuação

function preload() { 
	for(i=0;i<4;i++){
		mao[i] = loadImage("figuras/mao"+i+".png");
	}
	for(i=0;i<4;i++){
		gato[i] = loadImage("figuras/gato"+i+".png");
	}

	ambiente = loadImage("figuras/ambiente.jpg");
}

function setup() {
 	createCanvas(1001, 600);
}

function draw(){
	
	background(0);

	if(tela == 1){
		textSize(28); 
		fill(200);
		text("Pressione ENTER para iniciar", 50, 50);
		if ( keyIsDown(13) ) 
			tela = 2; 


	}


	if(tela == 2){
	//CONTAGEM DA PONTUAÇÃO
	if(pontuacao < 1000){
		pontuacao++;
	}

			
	image(ambiente,0,0);
	//CONDIÇÃO PARA MUDANÇA DE NÍVEL
	//NIVEL 2
	if(pontuacao >= 1000 && pontuacao < 3000){//ADICIONA OUTRA MAOSINHA

		pontuacao+=2;//AUMENTANDO A PONTUACAO PELA DIFICULDADE

		image(mao[l],oX1,oY1);//SEGUNDA MAOSINHA
		
		
		
		//DETECTANDO COLISÃO COM A SEGUNDA MAOSINHA
		if(oX1 <= 115){
			var condicao = y-oY1;
			if(condicao < 50 && condicao > -50){
				tela = 3;
		
			}
		}
	}
	
	//NIVEL 3
	if(pontuacao >= 3000){//ADICIONA OUTRA MAOSINHA
		pontuacao+=5;//AUMENTANDO A PONTUACAO

		image(mao[l],oX1,oY1);//SEGUNDA MAOSINHA
		
		//DETECTANDO COLISÃO COM A SEGUNDA MAOSINHA
		if(oX1 <= 115){
		var condicao = y-oY1;
			if(condicao < 50 && condicao > -50){
			tela = 3;
			}
		}

		image(mao[l],oX2,oY2);
		
		//DETECTANDO COLISÃO COM A TERCEIRA MAOSINHA
		if(oX2 <= 115){
			var condicao = y-oY2;
			if(condicao < 50 && condicao > -50){
				tela = 3;
			}
		}
		
	}
	
	
	//DETECTANDO COLISÃO COM A PRIMEIRA MAOSINHA
	if(oX <= 115){
		var condicao = y-oY;
		if(condicao < 50 && condicao > -50){
			tela = 3;
		}
	}
			
	//CAPTURA DE TECLADO E MOVIMENTAÇÃO VERTICAL DO GATINHO
	if(keyIsDown(UP_ARROW)){
		if(y >= 5)
				y -= 5;
	}

	if(keyIsDown(DOWN_ARROW)){
		if(y <= 445){
				y += 5;
		}
	}
	
	
	
	image(mao[l],oX,oY);//REPRESENTAÇÃO GRÁFICA DA PRIMEIRA MAOSINHA

	image(gato[l],x,y);//REPRESENTAÇÃO DO GATINHO
	
	//GERANDO VALORES DO EIXO X DAS MAOSINHAS, QUANDO ATRAVESSA O 
	//CENÁRIO, RESETA OS VALORES.
	if(oX > 25){
		oX -= 5;
		if(pontuacao >= 1000 && pontuacao < 3000){
			oX -= 10;
		}
		if(pontuacao > 3000){
			oX -=15;
		}
	}else{
		
		oX = 975;
		oY = random(475);
	}

	if(oX1 > 25){
		oX -= 5;
		if(pontuacao >= 1000 && pontuacao < 3000){
			oX1 -= 10;
		}
		if(pontuacao > 3000){
			oX1 -=15;
		}
	}else{
		
		oX1 = 975;
		oY1 = random(475);
	}

	if(oX2 > 25){
		oX2 -= 5;
		if(pontuacao >= 1000 && pontuacao < 3000){
			oX2 -= 10;
		}
		if(pontuacao > 3000){
			oX2 -=15;
		}
	}else{
		
		oX2 = 975;
		oY2 = random(475);
	}





	cont++;
	if(cont <= 10){
		l = 0;
	}
	if(cont > 10 && cont <= 20){
		l = 1;
	}
	if(cont > 20 && cont <= 30){
		l = 2;
	}
	if(cont > 30 && cont <= 40){
		l = 3;
	}
	if(cont > 40){
		cont = 0;
		l = 0;
	}

	//TEXTO DA PONTUAÇÃO
	textSize(50);
	fill(50);
	text("Pontos: " + pontuacao + " ", 600, 65);

	
	}
	if(tela == 3){
		cont2++;
		textSize(50);
		fill(255);
		text("GAME OVER", 300, 300)

		textSize(50);
		fill(255);
		text("O jogo reinicia em: "+ regressao, 300, 360);

		if(cont2 == 30){
			regressao--;
		}
		if(cont2 == 60){
			regressao--;
		}
		if(cont2 == 90){
			regressao--;
		}
		if(cont2 == 120){
			regressao--;
		}
		if(cont2 == 150){
			regressao--;
		}
		if(cont2 == 180){
			regressao--;
		}
		if(cont2 == 210){
			regressao--;
		}
		if(cont2 == 240){
			regressao--;
		}
		if(cont2 == 270){
			regressao--;
		}
		if(cont2 == 300){
			regressao--;
		}

		if(regressao == 0){
			tela = 1;
			regressao = 0;
		}
	}
}