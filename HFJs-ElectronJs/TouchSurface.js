var Game = window.Game();   
 
var Buttons="";
 
Game.Screen.init();

Game.SurfaceTouch.init("canvas");


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

	Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"#0066ff");	  


	ButtonsTouch();


	Game.Text("MouseT"+"| "+"X: "+Game.SurfaceTouch.X+" "+"Y:" +Game.SurfaceTouch.Y,'20px Calibri','white',20,30);
	Game.Text("Press"+":"+"["+Buttons+"]",'20px Calibri','white',Game.Screen.W/2,Game.Screen.H/2+100);	
	Game.Text("Touch",'60px Calibri','white',Game.Screen.W/2,Game.Screen.H/2);
			



	Game.Game_loop.start(LoopGame);

})();
 