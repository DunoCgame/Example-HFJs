var Game = window.Game();   

 
 var Text="HorizonFrontierJs";
 
 
 

 Game.Screen.init();

 
 
(function LoopGame(){
	
Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"#0066ff");

	
Game.Time.Interval(5,10,true);
	
	if(Game.Time.state==true){
		Game.Text(Text,'70px Calibri','white',Game.Screen.W/2-250,Game.Screen.H/2);
      
	}else	
		if(Game.Time.state==false){
			Game.Text(Text,'70px Calibri','grey',Game.Screen.W/2-250,Game.Screen.H/2);
		  
		}
	  
	  
Game.Game_loop.start(LoopGame);

})();
 