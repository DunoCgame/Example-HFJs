var Game = window.Game();   
 
var Buttons="";
 
Game.Screen.Init();

Game.SurfaceTouch.Init();

let Fondo = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#0066ff");
let TextTouch = new Game.Text();


function ButtonsTouch(){
	
	var Button1 = new Game.MovilTouchButton(100,100,100,100,50,"red");
	var Button2 = new Game.MovilTouchButton(300,100,100,100,50,"green");
	var Button3 = new Game.MovilTouchButton(500,100,100,100,50,"purple");
	
		if(Button1.Action()==true){		
					Buttons="BUTTON 1";	
		}
		else
			if(Button2.Action()==true){		
						Buttons="BUTTON 2";	
			}
		else
			if(Button3.Action()==true){		
						Buttons="BUTTON 3";	
			}
		
		else{
			Buttons=" ";
		}
}



(function LoopGame(){
Game.Screen.Clear();//clear screen
	Fondo.Draw();
	ButtonsTouch();
	

	TextTouch.Text="["+Buttons+"]";
	TextTouch.Size= '20px';
	TextTouch.Font= 'Calibri';
	TextTouch.Colour = 'white';
	TextTouch.X = Game.Screen.W/2;
	TextTouch.Y = Game.Screen.H/2;
	TextTouch.Draw();


	Game.Game_loop.Start(LoopGame);

})();
 