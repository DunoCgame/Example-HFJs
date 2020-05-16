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
	
	Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"#0066ff");
}

function Text(){
					Game.Debut("Px"+":"+Player.X,10,30);
					Game.Debut("Py"+":"+Player.Y,10,50);

}

var Player = {
			X:0,
			Y:0,
			W:100,
			H:100,
			R:0,
			Speed:10,
			color:"green",
			init:function(){
				Game.Square(Player.X,Player.Y,Player.W,Player.H,Player.R,Player.color);
				
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

	for(y=0; y<5; y++){
			
	if(state[y]==true){
			Game.Square(Obstaculo.X+CapaX[y], Obstaculo.Y+CapaY[y], Obstaculo.W+CapaW[y], Obstaculo.H+CapaH[y], 0, Color[y]);
					
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
					Game.Debut("Collision-U",400,30);
					
					 }
				

			}
			
	if(Keyboard[S] == true){
	
	Down=Collision(Player.X,Player.Y+Player.Speed,Player.W,Player.H);

			
		if(!Down){

				Player.Y+=Player.Speed;
		}
		else{
			Game.Debut("Collision-D",400,30);
					
			}
	}
		
	if(Keyboard[D] == true){
	
		Left=Collision(Player.X+Player.Speed,Player.Y,Player.W,Player.H);
				
		if(!Left){

				Player.X+=Player.Speed;
		}
		else{
			Game.Debut("Collision-L",400,30);
					
					 }

		}
		
	if(Keyboard[A] == true){
	
		Right=Collision(Player.X-Player.Speed,Player.Y,Player.W,Player.H);
				
		if(!Right){
					
				Player.X-=Player.Speed;
		}
		else{
			Game.Debut("Collision-R",400,30);
					
					 }
					
		 }
		
		
}



//Ejemplo-1	Funciona 

var state_Collision=false;

function Collision(X,Y,W,H){

for(var i=0; i<5; i++){
	
	// Game.Debut("X"+":"+X+"-"+" "+(Obstaculo.X+CapaX[i]),480,100*i+40);

	var CollisionA = Game.BoxCollision.init(
			   
				(Obstaculo.X+CapaX[i]), 
				(Obstaculo.Y+CapaY[i]), 
				(Obstaculo.W+CapaW[i]), 
				(Obstaculo.H+CapaH[i]),
				

				X, 
				Y, 
				W, 
				H

			);

			
	if(!CollisionA){
					 // return false;		
			
			}
			 else{
				
    // Game.Square(180, 10, 250, 60, 0, "white");
	// Game.Debut("Collision"+":"+(i+1)+"|"+CollisionA,200,50);		 
				
				 
				 
				 return true;
				
			 }	

	 
		
		}//FOR

	
	}	// funcion cierre



Game.Screen.init();
Game.KeyboardEvents();	

(function LoopGame(){

background();
MovePlayer();
Player.init();


Obst();
ObstData();


	
Text();



Game.Game_loop.start(LoopGame);
})();
