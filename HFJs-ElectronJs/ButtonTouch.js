var Game = window.Game();   
 
var Buttons="";
 
Game.Screen.init();
 

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
	
Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"#0066ff");	  
	  
	  ButtonsTouch();
	  


Game.Mouse.Position(true,"grey",20,20,20);


Game.Text("Mouse"+"| "+"X: "+Game.Mouse.PosX+" "+"Y:" +Game.Mouse.PosY,'16px Calibri','white',20,30);



Game.Text("["+Buttons+"]",'20px Calibri','white',Game.Screen.W/2,Game.Screen.H/2);
	
	
Game.Game_loop.start(LoopGame);

})();
 