var Game = window.Game();   


var A = 65;
var S = 83;
var D = 68;
var W = 87;


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
	
//player
let Img_Background;
let Img ="Image/Map.png";
let ImgW=1024;
let ImgH=768;


let Camera_Data = new Game.Text();

let Canvalimiti;

function Background(){
		Img_Background = new Game.Images(0,0, ImgW, ImgH, Img,  "Upper-Left");
		Img_Background.Draw();
 }
 
let Player = {
	X:10,
	Y:10,
	W:80,
	H:80,
	R:0,
	Speed:10,
	url:"Image/nave.png",
    color:"orange",
	generate:new Game.Images(),
	construct:function(){
			Player.generate.X=Player.X;
			Player.generate.Y=Player.Y;
			Player.generate.W=Player.W;
			Player.generate.H=Player.H;
			Player.generate.Url=Player.url;
			Player.generate.Point="Upper-Left";
			Player.generate.Draw();
		
	},
	init:function(){
		
		if(Game.Camera.state!=true){
	
			Player.construct();
			
			
		}else{
				Player.construct();
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
		 
		 if(Player.X>= ImgW){	Player.X=10;	 }
		 if(Player.X==0){	Player.X = ImgW-Player.W;	 }
		 
		 
		 if(Player.Y==0){	Player.Y = ImgH-Player.H;	 }
		 if(Player.Y>= ImgH){	Player.Y=10;	 }
		 
		
		
}


let Text_Screen = new Game.Text();
let Text_Player = new Game.Text();


 var obj = new Game.Square(0, 0, 100, 100, 0, "Upper-Left","black");


 Game.Screen.Init();
 Game.KeyboardEvents();	


(function LoopGame(){

ctx = Game.Screen.context; //import use the contex "Canvas"
Game.Screen.Clear();//clear screen

MovePlayer();

ctx.save();
	Game.Camera.Dynamic(1,0, Player.X, Player.Y, Player.W, Player.H, ImgW, ImgH); //camera
	Background();
	Player.init();	
ctx.restore();		
	
	
	
	Text_Player.X=100;
	Text_Player.Y=50;
	Text_Player.Text = "PlayerX"+" "+Player.X +"|"+ "PlayerY"+" "+Player.Y;
	Text_Player.Size = '20px';
	Text_Player.Font = 'Calibri';
	Text_Player.Colour = 'white';
	Text_Player.Draw();
	
	
	
	Text_Screen.X=0;
	Text_Screen.Y=80;
	Text_Screen.Text = "ScreenW"+" "+Game.Screen.W+" | "+"ScreenH"+" "+Game.Screen.H+" | "+"mapW"+" "+ImgW+" | "+"mapH"+" "+ImgH;
	Text_Screen.Size = '20px';
	Text_Screen.Font = 'Calibri';
	Text_Screen.Colour = "white";
	Text_Screen.Draw();
	

	
	
	
	
	Game.Game_loop.Start(LoopGame);
})();

// LoopGame();
 