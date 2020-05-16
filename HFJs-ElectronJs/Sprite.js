var Game = window.Game();

var Player={x:0,y:0,X:0,Y:330,W:200,H:200, url:"Image/Sprite.png"};
var Obtaculos={ X:0, Y:0, W:100, H:100}
var Vx=10;
var Vy=10;
var Animacion=0;

var Intro  =   new Game.Sound('Sound/Intro.wav');
var Pasos  =   new Game.Sound('Sound/Cordero.wav');
var Saltos =   new Game.Sound('Sound/Salto.wav');
var Enter  =   new Game.Sound('Sound/Enter.wav');



var AminacionPlayerLeft=new Array(3);
AminacionPlayerLeft[0]=0;
AminacionPlayerLeft[1]=200;
AminacionPlayerLeft[2]=400;

var AminacionPlayerLeft_up=new Array(2);
AminacionPlayerLeft_up[0]=0;
AminacionPlayerLeft_up[1]=200;

var AminacionPlayerRight=new Array(3);
AminacionPlayerRight[0]=400;
AminacionPlayerRight[1]=200;
AminacionPlayerRight[2]=0;

var AminacionPlayerRight_up=new Array(2);
AminacionPlayerRight_up[0]=200;
AminacionPlayerRight_up[1]=0;



/***************************/

var Obstacles={ X:0, Y:0, W:100, H:100};
var Obstacleslength=6;
var ImageObstacles=new Array(6);
ImageObstacles[0]="Image/Terreno1.png";
ImageObstacles[1]="Image/Terreno2.png";
ImageObstacles[2]="Image/Nuve.png";
ImageObstacles[3]="Image/Arbol.png";
ImageObstacles[4]="Image/Nuve1.png";
ImageObstacles[5]="Image/Nuve2.png";
ImageObstacles[6]="Image/Montana.png";

/*Fondo*/ /*Fondo*/ /*Fondo*/ /*Fondo*/

var Scene = 1;

var Letras=new Array(4);
	Letras[0]="A";
	Letras[1]="S";
	Letras[2]="D";
	Letras[3]="W";
	
var Letras2=new Array(4);
	Letras2[0]="Right";
	Letras2[1]="Down";
	Letras2[2]="Left";
	Letras2[3]="Up";
	
	
var Pos=1;
var G=false;
var Salto=false;

	

function Background_Game(){

Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"#2ba0e4");
Game.Circle(100, 100, 60, 0, "#ffe680");
Game.Circle(100, 100, 55, 0, "#ffff80");
	
	Game.Images(0,-50,960,540,ImageObstacles[6]);
	
	for(var i=0; i<5; i++){
		Game.Images(0+240*i,0,200,200,ImageObstacles[4]);
		Game.Images(0+120*i,20,220,200,ImageObstacles[5]);
		
	}
}

/*Fondo*/ /*Fondo*/ /*Fondo*/ /*Fondo*/ 
	
	/******************Player******************/
function Players(){
	
Game.Sprite(Player.x,Player.y,Player.X,Player.Y,Player.W,Player.H,Player.url);

}

/******************Player******************/
/*************Fondo**************/
function ground(){

	for(var i=0; i<12; i++){
		
	Game.Images(Obstacles.X+Obstacles.W*i,Obstacles.Y+Game.Screen.H-100,Obstacles.W,Obstacles.H,ImageObstacles[0]);
	

	}
}
/*************Fondo**************/

function Animacion_UP(){
	if(Pos==1 && Salto==true){
		
		Player.y=200;

	}
if(Pos==2){
	Player.y=600;
	
		}
}

function Animacion_Left(){
	Player.y=0;
	Animacion+=1;

		if(Animacion==2){
					Animacion=0;
		}


}

function Animacion_Right(){
	Player.y=400;
	Animacion+=1;

	if(Animacion==2){
		Animacion=0;
		
	}

}


function Move(){
		if(Pos==1){	
			if(Salto==true && Player.Y>200){
				Player.Y-=50;
				Player.x=AminacionPlayerLeft_up[0];
			}
			if(Player.Y<=200){
				Salto=false;
				
			}
			if(Salto==false && Player.Y<330){
				Player.Y+=Game.Gravity.init(true,30);
				Player.x=AminacionPlayerLeft_up[1];
				
			}
			if(Player.Y>=330){
				Player.y=0;
				Player.x=AminacionPlayerLeft[0];
			}
		}
	if(Pos==2){	
			if(Salto==true && Player.Y>200){
				Player.Y-=50;
				Player.x=AminacionPlayerRight_up[0];
			}
			if(Player.Y<=200){
				Salto=false;
				
			}
			if(Salto==false && Player.Y<330){
				Player.Y+=Game.Gravity.init(true,30);
				Player.x=AminacionPlayerRight_up[1];
				
			}
			if(Player.Y>=330){
				Player.y=400;
				Player.x=AminacionPlayerRight[0];
			}
		}
	
if(Keyboard[87]==true && Player.Y>200  ){

		Salto=true;			
		
		Saltos.play();
		Animacion_UP();

}
else{ 
	Saltos.stop();
}

if(Keyboard[83]==true  && Player.Y+Player.H<window.Game.Screen.Canvas.height ){


		Player.Y+=Vy;
	  
	  
}


if(Keyboard[68]==true  && Player.X+Player.W<Game.Screen.Canvas.width ){
	
  
		Player.X+=Vx;
		Pasos.play();
		Player.x=AminacionPlayerLeft[Animacion];
		
		Animacion_Left();
		Pos=1;
		

}
else{ 
		Pasos.stop();
}

if(Keyboard[65]==true  && Player.X!=0 ){
		 Player.X-=Vx;
		 Pasos.play();
		 Player.x=AminacionPlayerRight[Animacion];
		 
		 Animacion_Right();
		 
Pos=2;
		

}else{ 
Pasos.stop();
}



	
	
}//fin moveAbove


function IntroGame(){

for(var i=0; i<3; i++){
	
	Game.Square(Obtaculos.X+102,Obtaculos.Y+0,Obtaculos.W,Obtaculos.H,0,"rgba(204, 204, 204,0.5)");
	Game.Text(Letras[3],'30px Calibri',"black",Obtaculos.X+102,Obtaculos.Y+30);
	Game.Text(Letras2[3],'30px Calibri',"black",Obtaculos.X+102,Obtaculos.Y+50);

	Game.Square(Obtaculos.X+102*i,Obtaculos.Y+105,Obtaculos.W,Obtaculos.H,0,"rgba(204, 204, 204,0.5)");
	Game.Text(Letras[i],'30px Calibri',"black",Obtaculos.X+102*i,Obtaculos.Y+140);
	Game.Text(Letras2[i],'30px Calibri',"black",Obtaculos.X+102*i,Obtaculos.Y+165);
}

	Game.Time.Interval(5,10,true);
	if(Game.Time.state==true){
		
	Game.Text("Press Enter",'40px Calibri',"grey",Game.Screen.Canvas.width/2-100,Game.Screen.Canvas.height/2+50);
	Game.Text("Press ESC",'40px Calibri',"grey",Game.Screen.Canvas.width/2-100,Game.Screen.Canvas.height/2+85);
		
	}else{
			
	Game.Text("Press Enter",'40px Calibri',"White",Game.Screen.Canvas.width/2-100,Game.Screen.Canvas.height/2+50);
	Game.Text("Press ESC",'40px Calibri',"White",Game.Screen.Canvas.width/2-100,Game.Screen.Canvas.height/2+85);
	
	}
	
	if(Keyboard[13]==true){	
						Scene=2;
						Enter.play();
	}
	if(Keyboard[27]==true){
		
					window.Exit(); 
	}
	
	
}

	
	
function Pass(){

	Game.Transition.F("black");
	if(Game.Transition.state==true){
		Game.Time.Delay(20,Game.Transition.state==true);
	}
	if(Game.Time.state==true){	
								Scene=3;
	}
}

Game.Screen.init();
Game.KeyboardEvents();



(function startGame(){

		

switch(Scene){
	case 1:
		Intro.play();
		
	Background_Game();
	ground();
	IntroGame();

	break;
	case 2:
		Intro.stop();
		Enter.stop();
	Pass();
	break;
	case 3:
	Background_Game();
	Move();
	ground();
	Players();
	break;
	
	
	
	
}

Game.Game_loop.start(startGame);

 })();
 
 
 
 