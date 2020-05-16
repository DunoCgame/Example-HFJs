var Game = window.Game();   

var Img ="Image/Map.png";

var A = 65;
var S = 83;
var D = 68;
var W = 87;

var ImgW=1024;
var ImgH=768;

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
	
var Obtaculos={ X:0, Y:0, W:100, H:100}
	
function Background(){
		Game.Images(0,0, ImgW, ImgH  ,Img);
			
		
 }
 
var Player = {
	X:0,
	Y:0,
	W:80,
	H:80,
	R:0,
	Speed:10,
	url:"Image/nave.png",
    color:"orange",
	init:function(){
		
		if(Game.Camera.state!=true){
			// Game.Square(Player.X, Player.Y, Player.W, Player.H, Player.R, Player.color);
			Game.Images(Player.X, Player.Y, Player.W, Player.H, Player.url);

		}else{

			// Game.Square(Player.X, Player.Y, Player.W, Player.H, Player.R, Player.color);
			Game.Images(Player.X, Player.Y, Player.W, Player.H, Player.url);

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

function Text(){
	

	// Game.Debut("Px"+":"+Player.X,10,30);
	// Game.Debut("Py"+":"+Player.Y,10,50);

					
	//Guias
	// Game.Square(Game.Screen.W/2, 0, 2, Game.Screen.H, 0, "white");
	// Game.Square(0, Game.Screen.H/2, Game.Screen.W, 2, 0, "white");
		
	// Game.Square(0, Game.Screen.H, Game.Screen.W, 2, 0, "white");
	// Game.Square(Game.Screen.W, 0, 2, Game.Screen.H, 0, "white");
	
	
	for(var i=0; i<3; i++){
	
	Game.Square(Obtaculos.X+102,Obtaculos.Y+0,Obtaculos.W,Obtaculos.H,0,"rgba(204, 204, 204,0.2)");
	Game.Text(Letras[3],'30px Calibri',"black",Obtaculos.X+102,Obtaculos.Y+30);
	Game.Text(Letras2[3],'30px Calibri',"black",Obtaculos.X+102,Obtaculos.Y+50);

	Game.Square(Obtaculos.X+102*i,Obtaculos.Y+105,Obtaculos.W,Obtaculos.H,0,"rgba(204, 204, 204,0.2)");
	Game.Text(Letras[i],'30px Calibri',"black",Obtaculos.X+102*i,Obtaculos.Y+140);
	Game.Text(Letras2[i],'30px Calibri',"black",Obtaculos.X+102*i,Obtaculos.Y+165);
}


}

 Game.Screen.init();
 Game.KeyboardEvents();	

(function LoopGame(){

ctx = Game.Screen.context; //import use the contex "Canvas"

MovePlayer();

ctx.save();
	Game.Camera.Dynamic(1,0, Player.X, Player.Y, Player.W, Player.H, ImgW, ImgH); //camera
	Background();
	Player.init();	
ctx.restore();		
	

//Interfaz
Text();
	
	
	
	Game.Game_loop.start(LoopGame);
})();

// LoopGame();
 