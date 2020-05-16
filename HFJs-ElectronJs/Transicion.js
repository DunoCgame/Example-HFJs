var Game = window.Game(); 	
var Up = 38;
var Down = 40;

	var A = 65;
	var S = 83;
	
var Select=0;

var Trans=[];

for(var i=0; i<6; i++){
	Trans[i]=false;
		
}

var Press="";

document.getElementById("body").addEventListener( "keydown", function(e){

Select = event.key;
  
  Game.Transition.resert();

	});
	
var letras=[];
letras[0]="A";
letras[1]="B";
letras[2]="C";
letras[3]="D";
letras[4]="E";
letras[5]="F";
function Text(){
	

	
	for(var i=0; i<6; i++){
		Game.Debut("Transition | "+letras[i],0, 30+30*i);	
  
	}
  
	 
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
 
 
 function background(){
	 Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"grey");

	 
 }
Game.Screen.init();
Game.KeyboardEvents();	
(function LoopGame () {
	
	background();
	Transitions();	
	Text();
		 
Game.Game_loop.start(LoopGame);
})();
 