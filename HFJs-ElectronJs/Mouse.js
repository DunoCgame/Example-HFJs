var Game = window.Game();   

 
 var Text="HorizonFrontierJs";
 
 
 

 Game.Screen.init();
 


 
 
(function LoopGame(){
	
Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"#0066ff");

  
	  
	  
Game.Mouse.Position(true,"grey",20,20,20);


Game.Text("Mouse"+"| "+"X: "+Game.Mouse.PosX+" "+"Y:" +Game.Mouse.PosY,'16px Calibri','white',20,30);
	
Game.Game_loop.start(LoopGame);

})();
 