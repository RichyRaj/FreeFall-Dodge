(function (_window) {
	var w = _window,
        base = 'assets/sprite/',
        sprites = w.ffd.Sprites,
		loadState = {
            preload: function () {
                console.log("State: Inside Pre Load");
                // =========== Player - Hero ========== //
                w.game.load.image(sprites.HERO, base + 'hero.png');
                // =========== Player - Enemies ========== //
                w.game.load.image(sprites.ENEMEY_BASIC, base + 'enemy_basic.png');
                w.game.load.image(sprites.ENEMEY_WITH_GUN, base + 'enemy_withGun.png');
                w.game.load.image(sprites.ENEMEY_TWO_IN_ONE, base + 'enemy_twoInOne.png');
            },
			create: function () {
				console.log("State: Assets Loaded");
				w.game.state.start(w.ffd.GameStates.MAIN_MENU);
			}
		};
	
	w.ffd.StateManager.loadState = loadState;
	
})(this);