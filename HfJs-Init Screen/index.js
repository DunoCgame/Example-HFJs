var Game = window.Game();

Game.Screen.Init();


(function startGame(){
		

// /*Fondo*/
Game.Square(0,0,Game.Screen.W,Game.Screen.H,0,"Gray");

// //Medidas Pantalla
//Game.Debut("Screen.W"+" "+Game.Screen.W,20,190);
//Game.Debut("Screen.H"+" "+Game.Screen.H,20,160);


Game.Time.Interval(10,20,true);

if(Game.Time.state==true){
	Game.Text('HelloWord','50px Calibri',"white",Game.Screen.W/2-100,Game.Screen.H/2);
}
else{
	Game.Text('HelloWord','50px Calibri',"black",Game.Screen.W/2-100,Game.Screen.H/2);
}

Game.Game_loop.start(startGame);

 })();
 
 
 
 