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
	

	var Color = new Array(6);
		Color[0]="red";
		Color[1]="pink";
		Color[2]="orange";
		Color[3]="grey";
		Color[4]="purple";
		Color[5]="white";
		Color[6]="yellow";
				
	var u = false;
	var d = false;
	var l = false;
	var r = false;
	
	let Fondo;
	let posX_Debug;
	let posY_Debug;


function background(){	
	Fondo = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#0066ff");
	Fondo.Draw();
}

var Player = {
			X:100,
			Y:100,
			W:100,
			H:100,
			R:0,
			Speed:10,
			color:"green",
			p1:"",
			init:function(){
				
				
	
	Player.p1 = new Game.Circle(Player.X, Player.Y, 50, Player.color);
	Player.p2 = new Game.Circle(Player.X, Player.Y, 45, "rgba(255,255,255,0.5)");
				
				},
			paint:function(){
				
				Player.p1.Draw();
				Player.p2.Draw();
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


function Text(){
			posX_Debug =  new  Game.Debug("Player-x"+":"+Player.X,10,30);
			posY_Debug	= new Game.Debug("Player-y"+":"+Player.Y,10,50);

			posX_Debug.Draw();
			posY_Debug.Draw();

}


Game.Screen.Init();
Game.KeyboardEvents();	

(function LoopGame(){
Game.Screen.Clear();//clear screen
background();
	


Text();

let obstaculo = new Game.Circle(Game.Screen.W/2 ,Game.Screen.H/2, 50, "purple");
	obstaculo.Draw();


MovePlayer();	
Player.init();
Player.paint();			
	
			
let obstX_Debug =  new  Game.Debug("Obstaculo-x"+":"+Game.Screen.W/2,10,80);
let obstY_Debug	= new Game.Debug("Obstaculo-y"+":"+Game.Screen.H/2,10,100);

let Angles = Game.Angletwopoints(Player.X, Player.Y, Game.Screen.W/2, Game.Screen.H/2);
let Distans = Game.Distancepoints(Player.X, Player.Y, Game.Screen.W/2, Game.Screen.H/2)

let Angletext = new  Game.Debug("Angle"+Angles,300,30);
let Distanstext = new  Game.Debug("Distance"+Distans,300,60);



Angletext.Draw();
Distanstext.Draw();


Game.Game_loop.Start(LoopGame);
})();
