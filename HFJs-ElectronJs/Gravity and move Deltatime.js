var Game = window.Game();   
 
Game.Screen.Init(); 
Game.KeyboardEvents();

let Fondo = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#0066ff");
let Suelo = new Game.Square(0,Game.Screen.H/2+100,Game.Screen.W,Game.Screen.H,0,"Upper-Left","green");
// let Texto = new Game.Text("",'70px',' Calibri','white',Game.Screen.W/2-250,Game.Screen.H/2);

let A = 65;//left
let W = 87;//up
let S = 83;//down
let D = 68;//right
let Enter = 13; // enter
let Space = 32; //space

let left =37;  //left
let up   =38;  //up
let down =40;  //down
let right =39; //right


let btnleft = false;
let btnright = false;

let SpeedX = 0;
let SpeedY = 20;
let acceleration = 0;

let Jump = false;
let gravity = -2;

let Player ={
	posX:20,
	posY:Game.Screen.H/2+120,
	width:50,
	height:50,
	color:"orange",
	draw:function(){
		
		let pain = new Game.Square(Player.posX,Player.posY,Player.width,Player.height,0,"Upper-Left",Player.color);
		pain.Draw();
	},
	Move:function(){
		
		if(Keyboard[D]){		
			btnright=true;
		}else{		
			btnright=false;		
		}
		
		if(Keyboard[A]){
			btnleft=true;
		}else{
			btnleft=false;
		}
		
		if(Keyboard[W]){
					Jump=true;

		}
		
		//Movimientos
		if(btnright==true){
				acceleration++;
		}else{
			
			if(acceleration>0){
						acceleration--;
			}
		}
		
		if(btnleft==true){
				acceleration--;
		}else{
			
			if(acceleration<0){
						acceleration++;
			}
			
		}
					
			SpeedX=acceleration*Game.Game_loop.DeltaTime;
			
			Player.posX=Player.posX+SpeedX*Game.Game_loop.DeltaTime+(1/2)*acceleration*(Game.Game_loop.DeltaTime*Game.Game_loop.DeltaTime);	

		if(Jump){
			
			// 
			
				Player.posY-=SpeedY*Game.Game_loop.DeltaTime;
			
				// // efecto gravedad 
				SpeedY=SpeedY+gravity; 
		  	
				if(Player.posY>=Game.Screen.H/2+120){
					Jump=false;
					SpeedY=20;
			
				}
			
		}
	
		
	//reset
		if(Player.posX+Player.width>=Game.Screen.W){

			Player.posX=20;

		}
			
		if(Player.posX+Player.width<Game.Screen.W-Game.Screen.W){
			
			Player.posX=Game.Screen.W-Player.width;
			
		}
	}
	
};




(function LoopGame(time){
	
	Game.Screen.Clear();//clear screen
	Fondo.Draw();
	Suelo.Draw();
	
	// Texto.Draw();
	// Texto.Text=acceleration;
	// Texto.Text=Jump;
	// Texto.Text=acceleration+" "+Player.posY+" "+Player.posX+" "+Game.Screen.W;
	// Texto.Text=SpeedX*Game.Game_loop.DeltaTime;
	
	Player.Move();
	Player.draw();
	

		  
	  
Game.Game_loop.Start(LoopGame,true,time);

})();
 