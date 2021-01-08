var Game = window.Game();   

 Game.Screen.Init();
 

var Hello="HorizonFrontierJs";
 
let Texts = new Game.Text(Hello,'70px', 'Calibri','white',Game.Screen.W/2-250,Game.Screen.H/2); 
 
let Textmouse = new Game.Text();

let Fondo = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#0066ff");



 
 
(function LoopGame(){
	Game.Screen.Clear();//clear screen
	Fondo.Draw();

		
	Game.Mouse.Position(false,"grey",20,20,20);

	Texts.Draw();

	Textmouse.Text ="Mouse"+"| "+"X: "+Game.Mouse.PosX+" "+"Y:" +Game.Mouse.PosY;
	Textmouse.Size = '16px';
	Textmouse.Font = 'Calibri';
	Textmouse.Colour = 'white';
	Textmouse.X = 20;
	Textmouse.Y = 30;
	Textmouse.Draw();

		
	Game.Game_loop.Start(LoopGame);

})();
 