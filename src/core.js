// The Core of the Game
// Will interact with phaser to 'get things done'
(function (_window) {
    var w = _window,
		
		// Module constants
		GAME_WIDTH = 450, 
		GAME_HEIGHT = 650,

        init = function () {
            var state,
                states = w.ffd.GameStates;
            if (Phaser) {
				w.game = new w.Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '');
                // add states to the state manager
                if(w.game) {
                    state = w.game.state;
                    state.add(states.BOOT, w.ffd.StateManager.bootState);
                    state.add(states.PRE_LOAD, w.ffd.StateManager.loadState);
                    state.add(states.MAIN_MENU, w.ffd.StateManager.menuState);
                    state.add(states.GAME, w.ffd.StateManager.gameState);
                    state.add(states.GAME_OVER, w.ffd.StateManager.gameOverState);
                    
                    state.start(states.BOOT);                    
                } 
            } else {
                // not loaded
                console.log("Phaser not loadded");
            }
        };

    init();

})(this);