var Game = window.Game();   
	// var Enter = 13;
	// var Left = 37;
	// var Up = 38;
	// var Right = 39;
	// var Down = 40;

	var Left = false;
	var Up = false;
	var Right = false;
	var Down = false;
	
	var A = 65;
	var S = 83;
	var D = 68;
	var W = 87;
	
	var Obstaculo = {draw:false, X:70, Y:0, W:0, H:0, R:0};

	var CapaX=[];
	var CapaY=[];
	var CapaW=[];
	var CapaH=[];
	var state=[];
	

	var Color = new Array(4);
		Color[0]="red";
		Color[1]="pink";
		Color[2]="orange";
		Color[3]="grey";
				
	var u = false;
	var d = false;
	var l = false;
	var r = false;
	
function background(){
	Fondo = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#0066ff");
	Fondo.Draw();
}

function Text(){
			posX_Debug =  new  Game.Debug("Px"+":"+Player.X,10,30);
			posY_Debug	= new Game.Debug("Py"+":"+Player.Y,10,50);			
			posX_Debug.Draw();
			posY_Debug.Draw();
}

var Player = {
			X:0,
			Y:0,
			W:100,
			H:100,
			R:0,
			Speed:10,
			color:"green",
			p1:"",
			init:function(){
				Player.p1 = new Game.Square(Player.X, Player.Y, Player.W, Player.H, Player.R, "Upper-Left", Player.color);			
				},
			paint:function(){			
				Player.p1.Draw();
			}
}

function ObstData(){
				 
	 for(var y=0; y<5; y++){ 	
				 CapaX[y]=150*y;
				
				 CapaW[y]=100;
				 CapaH[y]=100;
				 state[y] = true; 
				 
				 if(y%2==0){
					  CapaY[y]=250;
					 CapaH[y]=300;
					 
				 }
				 else{
					 CapaY[y]=0;
					 CapaH[y]=150;
				 }
	 }
	
}

function Obst(){

	for(y=0; y<4; y++){
			
	if(state[y]==true){
		let B = new Game.Square(Obstaculo.X+CapaX[y], Obstaculo.Y+CapaY[y], Obstaculo.W+CapaW[y], Obstaculo.H+CapaH[y], 0,"Upper-Left", Color[y]);
			B.Draw();		 
					}
		}
	
	
}


function MovePlayer(){		
	

if(Player.X<0){ Player.X=Game.Screen.W-100;}
else
if(Player.X+Player.W>Game.Screen.W){ Player.X=0;}

if(Player.Y<0){ Player.Y=Game.Screen.H-100;}
else
if(Player.Y+Player.H>Game.Screen.H){ Player.Y=0;}

	
	if(Keyboard[W] == true){
      
	Up=Collision(Player.X,Player.Y-Player.Speed,Player.W,Player.H);
				
		if(!Up){
				Player.Y-=Player.Speed;
				
				}else{
					 let debug1 = new Game.Debug("Collision-U",400,50);
							debug1.Draw();
					 }
				

			}
			
	if(Keyboard[S] == true){
	
	Down=Collision(Player.X,Player.Y+Player.Speed,Player.W,Player.H);

			
		if(!Down){

				Player.Y+=Player.Speed;
		}
		else{
			let debug2 = new Game.Debug("Collision-D",400,50);
				debug2.Draw();	
			}
	}
		
	if(Keyboard[D] == true){
	
		Left=Collision(Player.X+Player.Speed,Player.Y,Player.W,Player.H);
				
		if(!Left){

				Player.X+=Player.Speed;
		}
		else{
			let debug3 = new Game.Debug("Collision-D",400,50);
				debug3.Draw();	
					
					 }

		}
		
	if(Keyboard[A] == true){
	
		Right=Collision(Player.X-Player.Speed,Player.Y,Player.W,Player.H);
				
		if(!Right){
					
				Player.X-=Player.Speed;
		}
		else{
			let debug4 = new Game.Debug("Collision-D",400,50);
				debug4.Draw();
					
					 }
					
		 }
		
		
}



//Ejemplo-1	Funciona 

var state_Collision=false;

function Collision(X,Y,W,H){

for(var i=0; i<5; i++){
	
	var CollisionA = Game.BoxCollision(
			   
				(Obstaculo.X+CapaX[i]), 
				(Obstaculo.Y+CapaY[i]), 
				(Obstaculo.W+CapaW[i]), 
				(Obstaculo.H+CapaH[i]),
				

				X, 
				Y, 
				W, 
				H

			);
	 			if(!CollisionA){	}
			 else{
					 
					 let debug = new  Game.Debug("Collision"+":"+(i+1),400,30);				
						debug.Draw();
					return true;	
					
					 
					
				 }

	 
		
		}//FOR

	
	}	// funcion cierre



Game.Screen.Init();
Game.KeyboardEvents();	

(function LoopGame(){
	Game.Screen.Clear();//clear screen
	background();
	MovePlayer();
	Player.init();
	Player.paint();


		Obst();
		ObstData();


	
Text();



Game.Game_loop.Start(LoopGame);
})();
