var Game = window.Game(); 	
var Up = 38;
var Down = 40;

var A = 65;
var S = 83;
	
var Select=0;

var Trans=[];


var Press="";
	
var letras=[];
	letras[0]="A";
	letras[1]="B";
	letras[2]="C";
	letras[3]="D";
	letras[4]="E";
	letras[5]="F";



let Background;
	
let Debug;


	
for(var i=0; i<6; i++){
	Trans[i]=false;
		
}

Game.Screen.Init();
Game.KeyboardEvents();


document.getElementById("body").addEventListener( "keydown", function(e){

Select = event.key;
  
	Game.Transition.Reset();

	});

	

function Backgrounds(){
	Background = new Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Upper-Left","#0066ff");
	Background.Draw();

}

function Text(){
		
	for(var i=0; i<6; i++){
		Debug = new Game.Debug("Transition | "+letras[i],0, 30+30*i);
		Debug.Draw();
	}
	
	var Debug2 = new Game.Debug("Transition"+" "+Game.Transition.State,0, 220);
		Debug2.Draw();
  
	 
 }
 
function Transitions(){
	switch(Select) {
		case "a": 
		
			Game.Transition.A("red");
		break;
		
		case "b": 
		
			Game.Transition.B("blue");
		break;
		
		case "c":  
	
			Game.Transition.C("green");
		break;
		
		case "d":  
		
		
			Game.Transition.D("yellow");
		break;
		
		case "e":  
		
			Game.Transition.E("pink");
		break;
		
		case "f":  
		
			Game.Transition.F("blak");
		break;
		
	
	}
} 
 


	
(function LoopGame(){
	Game.Screen.Clear();//clear screen
	Backgrounds();
	Transitions();	
	Text();
		 
	Game.Game_loop.Start(LoopGame);
})();
 