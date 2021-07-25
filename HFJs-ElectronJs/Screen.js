let Game = window.Game(); 
  
 
  
Game.Screen.Init();

let Hola="HorizonFrontierJs";
let Texto_Screen1 = new Game.Text(Hola,'70px','Calibri','grey',Game.Screen.W/2-250,Game.Screen.H/2);
let Texto_Screen2 = new Game.Text(Hola,'70px','Calibri','white',Game.Screen.W/2-250,Game.Screen.H/2);
 
let Fondo = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#0066ff");

 
(function LoopGame(){
Game.Screen.Clear();//clear screen
Game.Screen.MouseShow(false);
	Fondo.Draw();


	Game.Time.Interval(5,10,true);
		
		if(Game.Time.State==true){
				Texto_Screen1.Draw();
		  
		}else	
			if(Game.Time.State==false){
				Texto_Screen2.Draw();
			  
			}
		  
	  
Game.Game_loop.Start(LoopGame);

})();
 
 
 document.getElementsByClassName
