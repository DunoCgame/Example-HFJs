var Game = window.Game();

var Player={X:10,Y:10,W:100,H:100}
var Obtaculos={ X:0, Y:0, W:0, H:0}


var Obtaculolength=5;

var ObtaculoX=new Array(Obtaculolength);
ObtaculoX[0]=220;
ObtaculoX[1]=300;
ObtaculoX[2]=500;
ObtaculoX[3]=600;
ObtaculoX[4]=30;

var ObtaculoY=new Array(Obtaculolength);
ObtaculoY[0]=70;
ObtaculoY[1]=220;
ObtaculoY[2]=370;
ObtaculoY[3]=70;
ObtaculoY[4]=270;

var ObtaculoW=new Array(Obtaculolength);
ObtaculoW[0]=100;
ObtaculoW[1]=100;
ObtaculoW[2]=100;
ObtaculoW[3]=100;
ObtaculoW[4]=100;

var ObtaculoH=new Array(Obtaculolength);
ObtaculoH[0]=100;
ObtaculoH[1]=100;
ObtaculoH[2]=100;
ObtaculoH[3]=160;
ObtaculoH[4]=160;

var ColorObtaculos=new Array(3);
ColorObtaculos[0]="red";
ColorObtaculos[1]="green";
ColorObtaculos[2]="yellow";
ColorObtaculos[3]="#6600cc";
ColorObtaculos[4]="#333399";

function Fondo(){
/*Fondo*/ /*Fondo*/ /*Fondo*/ /*Fondo*/
	Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Gray");
/*Fondo*/ /*Fondo*/ /*Fondo*/ /*Fondo*/
	
}

function Players(){
	
	Game.Square(Player.X,Player.Y,Player.W,Player.H,0,"#000066");
	Game.Square(Player.X+10,Player.Y+10,Player.W-20,Player.H-20,0,"Blue");

}

function Obtaculo(){
	//obtaculos

for(var i=0; i<Obtaculolength; i++){
	
Game.Square(Obtaculos.X+ObtaculoX[i],Obtaculos.Y+ObtaculoY[i],Obtaculos.W+ObtaculoW[i],Obtaculos.H+ObtaculoH[i],0,ColorObtaculos[i]);

}

Game.Text("Use the arrow keys to move in blue square ",'40px Calibri',"White",0,Game.Screen.Canvas.height-100);
	
}


var Vx=10;
var Vy=10;


function Move(){
	
	
if(Keyboard[38]==true  && Player.Y>5){


	var Up = LeerObstaculos(Player.X ,Player.Y-Vy ,Player.W ,Player.H);

		if(!Up){
			Player.Y-=Vy; 
		 }
	
}


if(Keyboard[40]==true  && Player.Y+Player.H<Game.Screen.Canvas.height ){


 var Down = LeerObstaculos(Player.X ,Player.Y+Vy ,Player.W ,Player.H);

	if(!Down){
		Player.Y+=Vy;
	  }
	  
}

if(Keyboard[39]==true  && Player.X+Player.W<Game.Screen.Canvas.width ){
	

 var Left = LeerObstaculos(Player.X+Vx ,Player.Y ,Player.W ,Player.H );
	
	if(!Left){
		Player.X+=Vx;
		}
}

if(Keyboard[37]==true  && Player.X!=0 ){


var Right =  LeerObstaculos(Player.X-Vx ,Player.Y ,Player.W ,Player.H );	

	 if(!Right){
		 Player.X-=Vx;
		 }  
	
}

// window.Game().Text("UP"+""+Up,'30px Calibri',"white",0,62);
// window.Game().Text("Down"+" "+Down,'30px Calibri',"white",0,92);
// window.Game().Text("Left"+" "+Left,'30px Calibri',"white",0,125);
// window.Game().Text("Right"+" "+Right,'30px Calibri',"white",0,150);

	

	
	
}//fin moveAbove

function LeerObstaculos(X,Y,W,H){

for(var i=0; i<Obtaculolength; i++){
  
var Colli = Game.BoxCollision.init((Obtaculos.X+ObtaculoX[i]), (Obtaculos.Y+ObtaculoY[i]), (Obtaculos.W+ObtaculoW[i]), (Obtaculos.H+ObtaculoH[i]), X, Y, W, H);
	 if(Colli==true){

		 return true;
		 
		
	 }
 }//ciclo For

}//cierre





Game.Screen.Init();
Game.KeyboardEvents();


(function startGame(){
		
Fondo();
Move();
Players();
Obtaculo();


Game.Game_loop.start(startGame);

 })();
 
 
 
 