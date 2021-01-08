let Game = window.Game(); 
  
Game.Screen.Init();
Game.KeyboardEvents();

let Play_press="Press Enter for play sound";
let Stop_press="Press Space for stop sound";
let Texto_Screen1 = new Game.Text(Play_press,'50px',' Calibri','yellow',Game.Screen.W/2-250,Game.Screen.H/2);
let Texto_Screen2 = new Game.Text(Stop_press,'50px',' Calibri','white',Game.Screen.W/2-250,Game.Screen.H/2);


let StateSound=false;

let SoundState;


let Fondo = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#0066ff");

let Enter=13;
let Space=32;
let urlsound="Sound/Intro.wav";
let Sounds = new Game.Sound(urlsound, false, true, 1); 

 
function Sound(){
	
SoundState = new Game.Text("",'50px',' Calibri','white',Game.Screen.W/2-250,Game.Screen.H/2-100);

	
	if(Keyboard[Enter]==true){	
					
					Sounds.Play();
					StateSound=true;
	}
	if(Keyboard[Space]==true ){
					Sounds.Stop(); 

					StateSound=false;					
	}
	
				if(StateSound==true){
					SoundState.Text="Play";
				}
				else{
					SoundState.Text="Stop";
					
				}
	
	SoundState.Draw();

}	
 
 
(function LoopGame(){
Game.Screen.Clear();//clear screen

	Fondo.Draw();
Sound();

	Game.Time.Interval(20,40,true);
		
		if(Game.Time.State==true){
				Texto_Screen2.Draw();  
		}else	
			if(Game.Time.State==false){
				Texto_Screen1.Draw();
			  
			}
		  
	  
Game.Game_loop.Start(LoopGame);

})();
 