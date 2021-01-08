var Game = window.Game();
Game.Screen.Init();
Game.KeyboardEvents();



var Player={x:0,y:0,X:0,Y:330,W:200,H:200, url:"Image/Sprite.png"};
var Obtaculos={ X:0, Y:0, W:100, H:100}
var Vx=10;
var Vy=10;
var Animacion=0;

var Intro  =   new Game.Sound('Sound/Intro.wav',false, false, 1);
var Pasos  =   new Game.Sound('Sound/Cordero.wav',false, false, 1);
var Saltos =   new Game.Sound('Sound/Salto.wav',false, false, 1);
var Enter  =   new Game.Sound('Sound/Enter.wav',false, false, 1);



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

let background = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#2ba0e4");
let Circle1 = new Game.Circle(100, 100, 60, "#ffe680");
let Circle2 = new Game.Circle(100, 100, 60, "#ffff80");



	let ImgObstacle1 = new Game.Images();
	let ImgObstacle2 = new Game.Images();
	let ImgObstacle3 = new Game.Images();
	


function Background_Game(){

background.Draw();
Circle1.Draw();
Circle2.Draw();
	

		ImgObstacle1.X=0;
		ImgObstacle1.Y=-59;
		ImgObstacle1.W=960;
		ImgObstacle1.H=540;
		ImgObstacle1.Url=ImageObstacles[6];
		ImgObstacle1.Draw();
	
		
	for(var i=0; i<5; i++){

		ImgObstacle1.X=0+240*i;
		ImgObstacle1.Y=0;
		ImgObstacle1.W=200;
		ImgObstacle1.H=200;
		ImgObstacle1.Url=ImageObstacles[4];
		ImgObstacle1.Draw();
		///////////////////////////
		ImgObstacle1.X=0+120*i;
		ImgObstacle1.Y=20;
		ImgObstacle1.W=220;
		ImgObstacle1.H=200;
		ImgObstacle1.Url=ImageObstacles[5];
		ImgObstacle1.Draw();
		
	}
}

/*Fondo*/ /*Fondo*/ /*Fondo*/ /*Fondo*/ 
	
	/******************Player******************/
function Players(){
	
var P = new Game.Sprite(Player.x, Player.y, Player.X, Player.Y, Player.W, Player.H, Player.url);

P.Draw();
}

/******************Player******************/
/*************Fondo**************/
function ground(){

	for(var i=0; i<12; i++){
		
	let Img = new Game.Images(
			Obstacles.X+Obstacles.W*i,
			Obstacles.Y+Game.Screen.H-100,
			Obstacles.W,
			Obstacles.H,
			ImageObstacles[0]
			,0);
	Img.Draw();

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
				Player.Y+=Game.Gravity(true,30);
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
				Player.Y+=Game.Gravity(true,30);
				Player.x=AminacionPlayerRight_up[1];
				
			}
			if(Player.Y>=330){
				Player.y=400;
				Player.x=AminacionPlayerRight[0];
			}
		}
	
if(Keyboard[87]==true && Player.Y>200  ){

		Salto=true;			
		
		Saltos.Play();
		Animacion_UP();
Saltos.Stop();
}
else{ 
	
}

if(Keyboard[83]==true  && Player.Y+Player.H<window.Game.Screen.Canvas.height ){


		Player.Y+=Vy;
	  
	  
}


if(Keyboard[68]==true  && Player.X+Player.W<Game.Screen.Canvas.width ){
	
  
		Player.X+=Vx;
		Pasos.Play();
		Player.x=AminacionPlayerLeft[Animacion];
		
		Animacion_Left();
		Pos=1;
		

}
else{ 
		Pasos.Stop();
}

if(Keyboard[65]==true  && Player.X!=0 ){
		 Player.X-=Vx;
		 Pasos.Play();
		 Player.x=AminacionPlayerRight[Animacion];
		 
		 Animacion_Right();
		 
Pos=2;
		

}else{ 
Pasos.Stop();
}



	
	
}
//fin moveAbove


function IntroGame(){

for(var i=0; i<3; i++){
	
	let A = new Game.Square(Obtaculos.X+102,Obtaculos.Y+0,Obtaculos.W,Obtaculos.H,0, "Upper-Left", "rgba(204, 204, 204,0.5)");
	A.Draw();
	let B = new Game.Text(Letras[3],'30px',' Calibri',"black",Obtaculos.X+102,Obtaculos.Y+30);
	B.Draw();
	let C = new Game.Text(Letras2[3],'30px',' Calibri',"black",Obtaculos.X+102,Obtaculos.Y+50);
	C.Draw();
	
	let D = new Game.Square(Obtaculos.X+102*i,Obtaculos.Y+105,Obtaculos.W,Obtaculos.H, 0, "Upper-Left", "rgba(204, 204, 204,0.5)");
	D.Draw();
	let E = new Game.Text(Letras[i],'30px',' Calibri',"black",Obtaculos.X+102*i,Obtaculos.Y+140);
		E.Draw();
	let F = new Game.Text(Letras2[i],'30px',' Calibri',"black",Obtaculos.X+102*i,Obtaculos.Y+165);
		F.Draw();
}

Game.Time.Interval(5,10,true);
	if(Game.Time.state==true){
		
	let G= new Game.Text("Press Enter",'40px',' Calibri',"grey",Game.Screen.Canvas.width/2-100,Game.Screen.Canvas.height/2+50);
		G.Draw();
	let H = new Game.Text("Press ESC",'40px',' Calibri',"grey",Game.Screen.Canvas.width/2-100,Game.Screen.Canvas.height/2+85);
		H.Draw();
	}
	else{
			
	let I = new Game.Text("Press Enter",'40px',' Calibri',"White",Game.Screen.Canvas.width/2-100,Game.Screen.Canvas.height/2+50);
		I.Draw();
	let J = new Game.Text("Press ESC",'40px',' Calibri',"White",Game.Screen.Canvas.width/2-100,Game.Screen.Canvas.height/2+85);
		J.Draw();
	}
	
	if(Keyboard[13]==true){	
		
						Scene=2;
						Enter.Play();
	}
	if(Keyboard[27]==true){
		
					window.Exit(); 
	}
	
	
}

	
	
function Pass(){

	Game.Transition.F("black");
	if(Game.Transition.State==true){
		Game.Time.Delay(20,Game.Transition.State==true);
	}
	if(Game.Time.State==true){	
				Scene=3;
	}
}



(function startGame(){
Game.Screen.Clear();//clear screen
		

switch(Scene){
	case 1:
	Intro.Play();
		
	Background_Game();
	ground();
	IntroGame();

	break;
	case 2:
		Intro.Stop();
		Enter.Stop();
	Pass();
	break;
	case 3:
	Background_Game();
	Move();
	ground();
	Players();
	break;
	
	
	
	
}



Game.Game_loop.Start(startGame);

 })();
 
 
 
 