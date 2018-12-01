var x = 75, y = 0;//coordenadas do gatinho

var oX = 975, oY;//coordenadas do primeiro tronco
var oX1 = 975, oY1;//coordenadas do segundo tronco
var oX2 = 975, oY2;//coordenadas do terceiro tronco

//vetores que guardam as imagens do jogo
var gato = [], tronco = [], ambiente = [], painel = [];

//variaveis responsaveis pela animação do jogo
var cont = 0, cont2 = 0, l = 0, indice = [];

//variavel responsavel pela mudanca de tela
var tela = 1, k = 0;

//contador de pontuação
var pontuacao = 0;

function preload() { 
	for(i=0;i<4;i++){
		painel[i] = loadImage("figuras/tela"+i+".png");
	}
	for(i=0;i<4;i++){
		tronco[i] = loadImage("figuras/tronco"+i+".png");
	}
	for(i=0;i<4;i++){
		gato[i] = loadImage("figuras/gato"+i+".png");
	}
	for(i=0;i<10;i++){
		ambiente[i] = loadImage("figuras/ambiente"+i+".png");
	}
}

function setup() {
 	createCanvas(1000, 563);
}

function draw(){
	background(0);

	//GERANDO A TELA INICIAL
	if(tela == 1){
		cont++;

		if(cont >= 30 && cont <= 80){
			k=1;
		}else{
			k=0;
		}

		if(cont > 80){
			cont = 0;
		}

		image(painel[k],0,0);
		
		if ( keyIsDown(13) ) {
			tela = 2; 
			cont = 0;
		}


	}

	//TELA DE JOGO
	if(tela == 2){

		for(i=0;i<10;i++){
			indice[i] = i;
		}

		//CONTAGEM DA PONTUAÇÃO
		if(pontuacao <= 1000){
			pontuacao++;
		}

		//GERANDO O CENÁRIO
		for(i=0;i<10;i++){
			image(ambiente[indice[i]],i*100,0);
		}

		//CONDIÇÃO PARA MUDANÇA DE NÍVEL É PONTUCACAO > 1000
		//NIVEL 2 ADICIONA OUTRO TRONCO
		if(pontuacao >= 1000 && pontuacao < 3000){
			//AUMENTANDO A PONTUACAO PELA DIFICULDADE
			pontuacao+=2;

			image(tronco[l],oX1,oY1);//SEGUNDO TRONCO
		
			//DETECTANDO COLISÃO COM O SEGUNDO TRONCO
			if(oX1 <= 115){
				var condicao = y-oY1;
				if(condicao < 50 && condicao > -50){
					tela = 3;
		
				}
			}
		}
	
		//PONTUACAO > 3000 AUMENTA O NIVEL DE JOGO
 		//NIVEL 3 ADICIONA OUTRO TRONCO
		if(pontuacao >= 3000){
			pontuacao+=5;//AUMENTANDO A PONTUACAO PELA DIFICULDADE

			image(tronco[l],oX1,oY1);//SEGUNDO TRONCO
		
			//DETECTANDO COLISÃO COM O SEGUNDO TRONCO
			if(oX1 <= 115){ 
				var condicao = y-oY1;
				if(condicao < 50 && condicao > -50){
				tela = 3;
				cont=0;
				}
			}

			image(tronco[l],oX2,oY2);//
		
			//DETECTANDO COLISÃO COM A TERCEIRA MAOSINHA
			if(oX2 <= 115){
				var condicao = y-oY2;
				if(condicao < 50 && condicao > -50){
					tela = 3;
					cont=0;
				}
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

		//DETECTANDO COLISÃO COM O PRIMEIRO TRONCO
		if(oX <= 115){
			var condicao = y-oY;
			if(condicao < 50 && condicao > -50){
				tela = 3;
				cont=0;
			}
		}
	
	
	
		image(tronco[l],oX,oY);//GERANDO O PRIMEIRO TRONCO

		image(gato[l],x,y);//GERANDO O GATINHO
	
		/*GERANDO VALORES DO EIXO X DOS TRONCOS, QUANDO ATRAVESSA O 
		CENÁRIO, RESETA OS VALORES.*/
		if(oX > 25){
			oX -= 5;
		}else{		
			oX = 975;
			oY = random(475);
		}
		if(oX1 > 25){
			oX1 -= 10;
		}else{
			oX1 = 975;
			oY1 = random(475);
		}
		if(oX2 > 25){
			oX2 -= 15;
		}else{
			oX2 = 975;
			oY2 = random(475);
		}

		/*A PROGRESSAO DA ANIMACAO DO MAPA SE DA PELA MUDANCA DO INDICE
		PRESENTE NO ARMAZENAMENTO DO VERTOR DO AMBIENTE*/
		cont2++;
		if(cont2 == 5){
			var aux = indice [0];
			for(i=0;i<9;i++){
				indice[i] = indice[i+1]
			}
			indice[9] = aux;
			cont2 = 0
		}

		/*O PROGRAMA ESTA EM UM LOOP MUITO ACELERADO, ENTAO
		PRA SUAVIZAR AS ANIMACOES EXISTE ESSAS CONDICOES*/
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

	if(tela==3){
		image(painel[2],0,0);
		cont++;
		if(cont == 100){
			tela = 4;
		}
	}

	//TELA DE GAME OVER
	if(tela == 4){
		image(painel[3],0,0);
		if ( keyIsDown(13) ) {
			tela = 1;
			oX = 975
			oX1 = 975
			oX2 = 975
			cont = 0;
			pontuacao = 0;
		}
	}
}
