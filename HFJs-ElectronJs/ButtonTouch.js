var Game = window.Game();   
 
var Buttons="";
 
Game.Screen.Init();
 
let Fondo = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#0066ff");
let MouseData = new Game.Text();
let Touch = new Game.Text();

function ButtonsTouch(){
	
	var Button1 = new Game.ButtonTouch(100,100,100,100,50,"red");
	var Button2 = new Game.ButtonTouch(250,100,100,100,50,"green");
	var Button3 = new Game.ButtonTouch(400,100,100,100,50,"yellow");
	var Button4 = new Game.ButtonTouch(550,100,100,100,50,"purple");
	
	if(Button1.Action()==true){
		
		Buttons="BUTTON 1";
		
	}if(Button2.Action()==true){
		
		Buttons="BUTTON 2";
		
	}if(Button3.Action()==true){
		
		Buttons="BUTTON 3";
		
	}if(Button4.Action()==true){
		
		Buttons="BUTTON 4";
		
	}

	
}


 
(function LoopGame(){
	Game.Screen.Clear();//clear screen
Fondo.Draw();	  
	  
ButtonsTouch();
	  


Game.Mouse.Position(true,"grey",20,20,20);



MouseData.Text="Mouse"+"| "+"X: "+Game.Mouse.PosX+" "+"Y:" +Game.Mouse.PosY;
MouseData.Size= '16px';
MouseData.Font= 'Calibri';
MouseData.Color = 'white';
MouseData.X = 20;
MouseData.Y = 30;
MouseData.Draw();



Touch.Text="["+Buttons+"]";
Touch.Tamano= '20px';
Touch.Font= 'Calibri';
Touch.Color = 'white';
Touch.X = Game.Screen.W/2-100;
Touch.Y = Game.Screen.H/2;
Touch.Draw();
	
	
Game.Game_loop.Start(LoopGame);

})();
 