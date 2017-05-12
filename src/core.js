// The Core of the Game
// Will interact with phaser to 'get things done'
(function (_window) {
    var w = _window,
		
		// Module constants
		GAME_WIDTH = 450, 
		GAME_HEIGHT = 650,

		game = '',
        init = function () {
            if (Phaser) {
				game = new w.Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '', {
				});
            } else {
                // not loaded
                console.log("Phaser not loadded");
            }
        };

    init();

})(this);