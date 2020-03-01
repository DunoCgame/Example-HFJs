const Game = require('horizonfrontierjs');
const remote = require('electron').remote; 
 
window.Exit = function(){
	var window = remote.getCurrentWindow(); 
    window.close(); 
	 
}



window.Game = function(){
    
	 return Game;
	 
}



