var tela;

var executaTela1 = new Boolean(true);
var executaTela2 = new Boolean(false);
var executaTela3 = new Boolean(false);
var executaTela4 = new Boolean(false);
var executaTela5 = new Boolean(false);


var executaIcoLev = new Boolean(false);
var executaIcoAlt = new Boolean(false);
var executaIcoInt = new Boolean(false);
var executaIcoSPu = new Boolean(false);
var executaIcoTDe = new Boolean(false);
var executaIcoVis = new Boolean(false);


var executaCapPadrao = new Boolean(true);
var executaCapLeveza = new Boolean(false);
var executaCapAlteridade = new Boolean(false);
var executaCapIntelectualidade = new Boolean(false);
var executaCapSPublico = new Boolean(false);
var executaCapTDesign = new Boolean(false);
var executaCapVisualidade = new Boolean(false);


function main() {

	tela = new createjs.Stage("tela1");



	if (executaTela1 == true) {
		exeTela1();
	}
	if (executaTela2 == true) {
		exeTela2();
	}
	if (executaTela3 == true) {
		exeTela3();
	}
	if (executaTela4 == true) {
		exeTela4();
	}
	if (executaTela5 == true) {
		exeTela5();
	}



	function exeTela1(){
		var tela1 = new createjs.Bitmap("Imagens/TELA 1/tela1.png");
			tela1.x = 0;
			tela1.y = 0;
		tela.addChild(tela1);

		var setaTela1 = new createjs.Bitmap("Imagens/TELA 1/seta1.png");
			setaTela1.x = 880;
			setaTela1.y = 600;
		tela.addChild(setaTela1);
		setaTela1.addEventListener("click", avancaTela2);
			function avancaTela2() {
				executaTela1 = false;
				executaTela2 = true;
				setaTela1.removeEventListener("click", avancaTela2);
				main();
			}
	}


	function exeTela2(){
		var tela2 = new createjs.Bitmap("Imagens/TELA 2/tela2.png");
			tela2.x = 0;
			tela2.y = 0;
		tela.addChild(tela2);

		var setaTela2 = new createjs.Bitmap("Imagens/TELA 2/seta1.png");
			setaTela2.x = 880;
			setaTela2.y = 600;
		tela.addChild(setaTela2);
		setaTela2.addEventListener("click", avancaTela3);
			function avancaTela3() {
				executaTela1 = false;
				executaTela2 = false;
				executaTela3 = true;
				setaTela2.removeEventListener("click", avancaTela3);
				main();
			}
	}

	function exeTela3(){
		var tela3 = new createjs.Bitmap("Imagens/TELA 3/tela3.png");
			tela3.x = 70;
			tela3.y = 120;
		tela.addChild(tela3);

		var tristeDesign = new createjs.SpriteSheet({
	        "images": ["Imagens/TELA 3/TristeDes.png"],
	        "frames": {"regX":0, "height":567, "count":6, "regY":0, "width":200},
	        "animations": {"anima":[1,3]}
		    });
		    animTriDes = new createjs.Sprite(tristeDesign);
		    animTriDes.gotoAndPlay();
		    animTriDes.name = "animando";
		    animTriDes.x = 750;
		    animTriDes.y = 70;
		    animTriDes.framerate = 1;
		    tela.addChild(animTriDes);

		var ajudaJoao = new createjs.Bitmap("Imagens/TELA 3/BotãoAjudarJoão1.png");
			ajudaJoao.x = 700;
			ajudaJoao.y = 650;
		tela.addChild(ajudaJoao);
		ajudaJoao.addEventListener("click", avancaTela4);
			function avancaTela4() {
				executaTela1 = false;
				executaTela2 = false;
				executaTela3 = false;
				executaTela4 = true;
				ajudaJoao.removeEventListener("click", avancaTela4);
				main();
			}
	}

	function exeTela4(){
		// CAPSULAS
		if (executaCapPadrao == true) {
		exeCapPadrao();
		}
		if (executaCapLeveza == true) {
		exeCapLeveza();
		}
		if (executaCapAlteridade == true) {
		exeCapAlteridade();
		}
		if (executaCapIntelectualidade == true) {
		exeCapIntelectualidade();
		}
		if (executaCapSPublico == true) {
		exeCapSPublico();
		}
		if (executaCapTDesign == true) {
		exeCapTDesign();
		}
		if (executaCapVisualidade == true) {
		exeCapVisualidade();
		}


		//ICONES
		if (executaIcoLev == false){
			exeIconLevIN();
		} if (executaIcoLev == true){
			exeIconLevAT();
		}
		if (executaIcoAlt == false){
			exeIconAltIN();
		} if (executaIcoAlt == true){
			exeIconAltAT();
		}
		if (executaIcoInt == false){
			exeIconIntIN();
		} if (executaIcoInt == true){
			exeIconIntAT();
		}
		if (executaIcoSPu == false){
			exeIconSPuIN();
		} if (executaIcoSPu == true){
			exeIconSPuAT();
		}
		if (executaIcoTDe == false){
			exeIconTDeIN();
		} if (executaIcoTDe == true){
			exeIconTDeAT();
		}
		if (executaIcoVis == false){
			exeIconVisIN();
		} if (executaIcoVis == true){
			exeIconVisAT();
		}



		var titulo = new createjs.Bitmap("Imagens/TELA 4/Título/título.png");
				titulo.x = 172.5;
				titulo.y = 5;
			tela.addChild(titulo);

		function exeCapPadrao(){
			var capsulaPad = new createjs.SpriteSheet({
	        "images": ["Imagens/TELA 4/Cápsula/Padrão/CapPadrao.png"],
	        "frames": {"regX":0, "height":309, "count":6, "regY":0, "width":281},
	        "animations": {"anima":[1,6]}
		    });
		    animCapPad = new createjs.Sprite(capsulaPad);
		    animCapPad.gotoAndPlay();
		    animCapPad.name = "animando";
		    animCapPad.x = 404.5;
		    animCapPad.y = 211.5;
		    animCapPad.framerate = 1;
		    tela.addChild(animCapPad);
		}

//******************** INICIO LEVEZA
		function exeIconLevIN(){
			var iconLevezaIN = new createjs.Bitmap("Imagens/TELA 4/Ícones/LevezaInativo.png");
				iconLevezaIN.x = 180;
				iconLevezaIN.y = 331;
			tela.addChild(iconLevezaIN);
			iconLevezaIN.addEventListener("click", popLeveza);
				function popLeveza() {
					var popLev = new createjs.Bitmap("Imagens/TELA 4/PopLeveza/PopLeveza.png");
						popLev.x = 261;
						popLev.y = 180;
					tela.addChild(popLev);
					var exitPopLev = new createjs.Bitmap("Imagens/TELA 4/PopLeveza/BotaoFecharLeveza1.png");
						exitPopLev.x = 762;
						exitPopLev.y = 185;
					tela.addChild(exitPopLev);
					exitPopLev.addEventListener("click", fechaPopLev);
						function fechaPopLev(){
							exitPopLev.removeEventListener("click", fechaPopLev);
							tela.removeAllChildren();
							exeTela4();
						}
					var apliLev = new createjs.Bitmap("Imagens/TELA 4/PopLeveza/BotaoLeveza2.png");
						apliLev.x = 386.5;
						apliLev.y = 570;
					tela.addChild(apliLev);
					apliLev.addEventListener("click", apliLeveza);
						function apliLeveza(){
							apliLev.removeEventListener("click", apliLeveza);
							tela.removeAllChildren();
							executaCapPadrao = false;
							executaCapLeveza = true;
							executaIcoLev = true;
							exeTela4();
						}

				}
		}

		function exeIconLevAT(){
			var iconLevezaAT = new createjs.Bitmap("Imagens/TELA 4/Ícones/LevezaAtivo.png");
				iconLevezaAT.x = 180;
				iconLevezaAT.y = 331;
			tela.addChild(iconLevezaAT);
		}
		function exeCapLeveza(){
			var capsulaLev = new createjs.SpriteSheet({
	        "images": ["Imagens/TELA 4/Cápsula/Leveza/CapLeveza.png"],
	        "frames": {"regX":0, "height":309, "count":6, "regY":0, "width":281},
	        "animations": {"anima":[1,6]}
		    });
		    animCapLev = new createjs.Sprite(capsulaLev);
		    animCapLev.gotoAndPlay();
		    animCapLev.name = "animando";
		    animCapLev.x = 404.5;
		    animCapLev.y = 211.5;
		    animCapLev.framerate = 1;
		    tela.addChild(animCapLev);
		    executaCapLeveza = false;
		}

//******************** FIM LEVEZA

//******************** INICIO ALTERIDADE
		function exeIconAltIN(){
			var iconAlteridadeIN = new createjs.Bitmap("Imagens/TELA 4/Ícones/AlteridadeInavito.png");
				iconAlteridadeIN.x = 180;
				iconAlteridadeIN.y = 200;
			tela.addChild(iconAlteridadeIN);
			iconAlteridadeIN.addEventListener("click", popAlteridade);
				function popAlteridade() {
					var popAlt = new createjs.Bitmap("Imagens/TELA 4/PopAlteridade/PopAlteridade.png");
						popAlt.x = 261;
						popAlt.y = 180;
					tela.addChild(popAlt);
					var exitPopAlt = new createjs.Bitmap("Imagens/TELA 4/PopAlteridade/BotaoFecharAlteridade1.png");
						exitPopAlt.x = 762;
						exitPopAlt.y = 185;
					tela.addChild(exitPopAlt);
					exitPopAlt.addEventListener("click", fechaPopAlt);
						function fechaPopAlt(){
							exitPopAlt.removeEventListener("click", fechaPopAlt);
							tela.removeAllChildren();
							exeTela4();
						}
					var apliAlt = new createjs.Bitmap("Imagens/TELA 4/PopAlteridade/BotaoPopAlteridade2.png");
						apliAlt.x = 386.5;
						apliAlt.y = 570;
					tela.addChild(apliAlt);
					apliAlt.addEventListener("click", apliAlteridade);
						function apliAlteridade(){
							apliAlt.removeEventListener("click", apliAlteridade);
							tela.removeAllChildren();
							executaCapPadrao = false;
							executaCapAlteridade = true;
							executaIcoAlt = true;
							exeTela4();
						}

				}
		}

		function exeIconAltAT(){
			var iconAlteridadeAT = new createjs.Bitmap("Imagens/TELA 4/Ícones/AlteridadeAtivo.png");
				iconAlteridadeAT.x = 180;
				iconAlteridadeAT.y = 200;
			tela.addChild(iconAlteridadeAT);
		}
		function exeCapAlteridade(){
			var capsulaAlt = new createjs.SpriteSheet({
	        "images": ["Imagens/TELA 4/Cápsula/Alteridade/CapAlteridade.png"],
	        "frames": {"regX":0, "height":309, "count":6, "regY":0, "width":281},
	        "animations": {"anima":[1,6]}
		    });
		    animCapAlt = new createjs.Sprite(capsulaAlt);
		    animCapAlt.gotoAndPlay();
		    animCapAlt.name = "animando";
		    animCapAlt.x = 404.5;
		    animCapAlt.y = 211.5;
		    animCapAlt.framerate = 1;
		    tela.addChild(animCapAlt);
		    executaCapAlteridade = false;
		}

//******************** FIM ALTERIDADE

//******************** INICIO INTELECTUALIDADE

		function exeIconIntIN(){
			var iconIntelectualidadeIN = new createjs.Bitmap("Imagens/TELA 4/Ícones/IntelectualidadeInativo.png");
				iconIntelectualidadeIN.x = 180;
				iconIntelectualidadeIN.y = 462;
			tela.addChild(iconIntelectualidadeIN);
			iconIntelectualidadeIN.addEventListener("click", popIntelectualidade);
				function popIntelectualidade() {
					var popInt = new createjs.Bitmap("Imagens/TELA 4/PopIntelectualidade/PopIntelectualidade.png");
						popInt.x = 261;
						popInt.y = 180;
					tela.addChild(popInt);
					var exitPopInt = new createjs.Bitmap("Imagens/TELA 4/PopIntelectualidade/BotaoFecharIntelectualidade1.png");
						exitPopInt.x = 762;
						exitPopInt.y = 185;
					tela.addChild(exitPopInt);
					exitPopInt.addEventListener("click", fechaPopInt);
						function fechaPopInt(){
							exitPopInt.removeEventListener("click", fechaPopInt);
							tela.removeAllChildren();
							exeTela4();
						}
					var apliInt = new createjs.Bitmap("Imagens/TELA 4/PopIntelectualidade/BotaoIntelectualidade2.png");
						apliInt.x = 386.5;
						apliInt.y = 570;
					tela.addChild(apliInt);
					apliInt.addEventListener("click", apliIntelectualidade);
						function apliIntelectualidade(){
							apliInt.removeEventListener("click", apliIntelectualidade);
							tela.removeAllChildren();
							executaCapPadrao = false;
							executaCapIntelectualidade = true;
							executaIcoInt = true;
							exeTela4();
						}

				}
		}

		function exeIconIntAT(){
			var iconIntelectualidadeAT = new createjs.Bitmap("Imagens/TELA 4/Ícones/IntelectualidadeAtivo.png");
				iconIntelectualidadeAT.x = 180;
				iconIntelectualidadeAT.y = 462;
			tela.addChild(iconIntelectualidadeAT);
		}
		function exeCapIntelectualidade(){
			var capsulaInt = new createjs.SpriteSheet({
	        "images": ["Imagens/TELA 4/Cápsula/Intelectualidade/CapIntelectualidade.png"],
	        "frames": {"regX":0, "height":309, "count":6, "regY":0, "width":281},
	        "animations": {"anima":[1,6]}
		    });
		    animCapInt = new createjs.Sprite(capsulaInt);
		    animCapInt.gotoAndPlay();
		    animCapInt.name = "animando";
		    animCapInt.x = 404.5;
		    animCapInt.y = 211.5;
		    animCapInt.framerate = 1;
		    tela.addChild(animCapInt);
		    executaCapIntelectualidade = false;
		}

//******************** FIM INTELECTUALIDADE

//******************** INICIO SETOR PUBLICO
		function exeIconSPuIN(){
			var iconSPublicoIN = new createjs.Bitmap("Imagens/TELA 4/Ícones/SetorPublicoInativo.png");
				iconSPublicoIN.x = 823;
				iconSPublicoIN.y = 200;
			tela.addChild(iconSPublicoIN);
			iconSPublicoIN.addEventListener("click", popSPublico);
				function popSPublico() {
					var popSPub = new createjs.Bitmap("Imagens/TELA 4/PopSetorPublico/PopSetorPublico.png");
						popSPub.x = 261;
						popSPub.y = 180;
					tela.addChild(popSPub);
					var exitPopSPub = new createjs.Bitmap("Imagens/TELA 4/PopSetorPublico/BotaoFecharSetorPublico1.png");
						exitPopSPub.x = 762;
						exitPopSPub.y = 185;
					tela.addChild(exitPopSPub);
					exitPopSPub.addEventListener("click", fechaPopSPub);
						function fechaPopSPub(){
							exitPopSPub.removeEventListener("click", fechaPopSPub);
							tela.removeAllChildren();
							exeTela4();
						}
					var apliSPub = new createjs.Bitmap("Imagens/TELA 4/PopSetorPublico/BotaoSetorPublico2.png");
						apliSPub.x = 386.5;
						apliSPub.y = 570;
					tela.addChild(apliSPub);
					apliSPub.addEventListener("click", apliSPublico);
						function apliSPublico(){
							apliSPub.removeEventListener("click", apliSPublico);
							tela.removeAllChildren();
							executaCapPadrao = false;
							executaCapSPublico = true;
							executaIcoSPu = true;
							exeTela4();
						}

				}
		}

		function exeIconSPuAT(){
			var iconSPublicoAT = new createjs.Bitmap("Imagens/TELA 4/Ícones/SetorPublicoAtivo.png");
				iconSPublicoAT.x = 823;
				iconSPublicoAT.y = 200;
			tela.addChild(iconSPublicoAT);
		}
		function exeCapSPublico(){
			var capsulaSPu = new createjs.SpriteSheet({
	        "images": ["Imagens/TELA 4/Cápsula/Setor Público/CapSPublico.png"],
	        "frames": {"regX":0, "height":309, "count":6, "regY":0, "width":281},
	        "animations": {"anima":[1,6]}
		    });
		    animCapSPu = new createjs.Sprite(capsulaSPu);
		    animCapSPu.gotoAndPlay();
		    animCapSPu.name = "animando";
		    animCapSPu.x = 404.5;
		    animCapSPu.y = 211.5;
		    animCapSPu.framerate = 1;
		    tela.addChild(animCapSPu);
		    executaCapSPublico = false;
		}

//******************** FIM SETOR PUBLICO

//******************** INICIO TEORIA DO DESIGN
		function exeIconTDeIN(){
			var iconTDesignIN = new createjs.Bitmap("Imagens/TELA 4/Ícones/TeoriaInativo.png");
				iconTDesignIN.x = 823;
				iconTDesignIN.y = 331;
			tela.addChild(iconTDesignIN);
			iconTDesignIN.addEventListener("click", popTDesign);
				function popTDesign() {
					var popTDe = new createjs.Bitmap("Imagens/TELA 4/PopTeoriaDoDesign/PopTeoriaDoDesign.png");
						popTDe.x = 261;
						popTDe.y = 180;
					tela.addChild(popTDe);
					var exitPopTDe = new createjs.Bitmap("Imagens/TELA 4/PopTeoriaDoDesign/BotaoFecharTeoriaDoDesign1.png");
						exitPopTDe.x = 762;
						exitPopTDe.y = 185;
					tela.addChild(exitPopTDe);
					exitPopTDe.addEventListener("click", fechaPopTDe);
						function fechaPopTDe(){
							exitPopTDe.removeEventListener("click", fechaPopTDe);
							tela.removeAllChildren();
							exeTela4();
						}
					var apliTDe = new createjs.Bitmap("Imagens/TELA 4/PopTeoriaDoDesign/BotaoTeoriaDoDesign2.png");
						apliTDe.x = 386.5;
						apliTDe.y = 570;
					tela.addChild(apliTDe);
					apliTDe.addEventListener("click", apliTDesign);
						function apliTDesign(){
							apliTDe.removeEventListener("click", apliTDesign);
							tela.removeAllChildren();
							executaCapPadrao = false;
							executaCapTDesign = true;
							executaIcoTDe = true;
							exeTela4();
						}

				}
		}

		function exeIconTDeAT(){
			var iconTDesignAT = new createjs.Bitmap("Imagens/TELA 4/Ícones/TeoriaAtivo.png");
				iconTDesignAT.x = 823;
				iconTDesignAT.y = 331;
			tela.addChild(iconTDesignAT);
		}
		function exeCapTDesign(){
			var capsulaTDe = new createjs.SpriteSheet({
	        "images": ["Imagens/TELA 4/Cápsula/Teoria do Design/CapTDesign.png"],
	        "frames": {"regX":0, "height":309, "count":6, "regY":0, "width":281},
	        "animations": {"anima":[1,6]}
		    });
		    animCapTDe = new createjs.Sprite(capsulaTDe);
		    animCapTDe.gotoAndPlay();
		    animCapTDe.name = "animando";
		    animCapTDe.x = 404.5;
		    animCapTDe.y = 211.5;
		    animCapTDe.framerate = 1;
		    tela.addChild(animCapTDe);
		    executaCapTDesign = false;
		}

//******************** FIM TEORIA DO DESIGN

//******************** INICIO VISUALIDADE

		function exeIconVisIN(){
			var iconVisualidadeIN = new createjs.Bitmap("Imagens/TELA 4/Ícones/VisualidadeInativo.png");
				iconVisualidadeIN.x = 823;
				iconVisualidadeIN.y = 462;
			tela.addChild(iconVisualidadeIN);
			iconVisualidadeIN.addEventListener("click", popVisualidade);
				function popVisualidade() {
					var popVis = new createjs.Bitmap("Imagens/TELA 4/PopVisualidade/PopVisualidade.png");
						popVis.x = 261;
						popVis.y = 180;
					tela.addChild(popVis);
					var exitPopVis = new createjs.Bitmap("Imagens/TELA 4/PopVisualidade/BotaoFecharVisualidade1.png");
						exitPopVis.x = 762;
						exitPopVis.y = 185;
					tela.addChild(exitPopVis);
					exitPopVis.addEventListener("click", fechaPopVis);
						function fechaPopVis(){
							exitPopVis.removeEventListener("click", fechaPopVis);
							tela.removeAllChildren();
							exeTela4();
						}
					var apliVis = new createjs.Bitmap("Imagens/TELA 4/PopVisualidade/BotaoVisualidade2.png");
						apliVis.x = 386.5;
						apliVis.y = 570;
					tela.addChild(apliVis);
					apliVis.addEventListener("click", apliVisualidade);
						function apliVisualidade(){
							apliVis.removeEventListener("click", apliVisualidade);
							tela.removeAllChildren();
							executaCapPadrao = false;
							executaCapVisualidade = true;
							executaIcoVis = true;
							exeTela4();
						}

				}
		}

		function exeIconVisAT(){
			var iconVisualidadeAT = new createjs.Bitmap("Imagens/TELA 4/Ícones/VisualidadeAtivo.png");
				iconVisualidadeAT.x = 823;
				iconVisualidadeAT.y = 462;
			tela.addChild(iconVisualidadeAT);
		}
		function exeCapVisualidade(){
			var capsulaVis = new createjs.SpriteSheet({
	        "images": ["Imagens/TELA 4/Cápsula/Visualidade/CapVisualidade.png"],
	        "frames": {"regX":0, "height":309, "count":6, "regY":0, "width":281},
	        "animations": {"anima":[1,6]}
		    });
		    animCapVis = new createjs.Sprite(capsulaVis);
		    animCapVis.gotoAndPlay();
		    animCapVis.name = "animando";
		    animCapVis.x = 404.5;
		    animCapVis.y = 211.5;
		    animCapVis.framerate = 1;
		    tela.addChild(animCapVis);
		    executaCapVisualidade = false;
		}

//******************** FIM VISUALIDADE

		if (executaIcoVis == true && executaIcoTDe == true && executaIcoSPu == true && executaIcoInt == true && executaIcoAlt == true && executaIcoLev == true){
			executaTela1 = false;
			executaTela2 = false;
			executaTela3 = false;
			executaTela4 = false;
			executaTela5 = true;
			tela.removeAllChildren();
			main();
		}


	}

	function exeTela5(){
		var tela5 = new createjs.Bitmap("Imagens/TELA 5/tela5.png");
			tela5.x = 70;
			tela5.y = 120;
		tela.addChild(tela5);

		var superDesign = new createjs.SpriteSheet({
	        "images": ["Imagens/TELA 5/SuperDes.png"],
	        "frames": {"regX":0, "height":567, "count":6, "regY":0, "width":448},
	        "animations": {"anima":[1,3]}
		    });
		    animSupDes = new createjs.Sprite(superDesign);
		    animSupDes.gotoAndPlay();
		    animSupDes.name = "animando";
		    animSupDes.x = 610;
		    animSupDes.y = 100;
		    animSupDes.framerate = 1;
		    tela.addChild( animSupDes);

		var iconInfo = new createjs.Bitmap("Imagens/TELA 5/Info2.png");
				iconInfo.x = 70;
				iconInfo.y = 635;
			tela.addChild(iconInfo);
			iconInfo.addEventListener("click", popInfo);
				function popInfo() {
					var popInf = new createjs.Bitmap("Imagens/TELA 5/TELA5INFO.png");
						popInf.x = 261;
						popInf.y = 180;
					tela.addChild(popInf);
					var exitPopInf = new createjs.Bitmap("Imagens/TELA 5/TELA5INFOFECHAR2.png");
						exitPopInf.x = 762;
						exitPopInf.y = 183;
					tela.addChild(exitPopInf);
					exitPopInf.addEventListener("click", fechaPopInfo);
						function fechaPopInfo(){
							exitPopInf.removeEventListener("click", fechaPopInfo);
							tela.removeAllChildren();
							exeTela5();
						}
				}

		var iconReload = new createjs.Bitmap("Imagens/TELA 5/Retornar2.png");
				iconReload.x = 120;
				iconReload.y = 635;
			tela.addChild(iconReload);
			iconReload.addEventListener("click", reseta);
				function reseta() {
					location.reload();
				}

		

		
	}

	


createjs.Ticker.on("tick",direto);

	function direto(params)
	{
	    tela.update(params);

	}

}