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
	
	let Fondo;
	let posX_debut;
	let posY_debut;
function background(){
	
	Fondo = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#0066ff");
	Fondo.Draw();
}

function Text(){
			posX_debug  =  new  Game.Debug("Px"+":"+Player.X,10,30);
			posY_debug	=  new  Game.Debug("Py"+":"+Player.Y,10,50);
			
			posX_debug.Draw();
			posY_debug.Draw();
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
				 
	 for(var y=0; y<4; y++){ 	
				 CapaX[y]=180*y;
				 CapaY[y]=200;
				 CapaW[y]=100;
				 CapaH[y]=100;
				 state[y] = true; 
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
				
	if(Keyboard[W] == true){

				
				Player.Y-=Player.Speed;

			}
			
	if(Keyboard[S] == true){	

				Player.Y+=Player.Speed;
		
		}
		
	if(Keyboard[D] == true){

				Player.X+=Player.Speed;

		}
		
	if(Keyboard[A] == true){

					
				Player.X-=Player.Speed;

					
		 }
		
		
}


//Ejemplo-1	Funciona 

// var CollisionA;

function Collision(){

	for(var i=0; i<4; i++){

		var CollisionA =  Game.BoxCollision(
									
					Player.X+10, 
					Player.Y+10, 
					Player.W, 
					Player.H,
								
					Obstaculo.X+CapaX[i], 
					Obstaculo.Y+CapaY[i], 
					Obstaculo.W+CapaW[i], 
					Obstaculo.H+CapaH[i]
		
				);

	if(!CollisionA){    
					 
									

					}
			 else{
				 
				 let debug = new  Game.Debug("Collision"+":"+(i+1),400,30);				
					debug.Draw();
				state[i] = false;	
				
				 
				
			 }	
			 
		}



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


	Collision();
		
	Text();



Game.Game_loop.Start(LoopGame);
})();
