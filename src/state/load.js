(function (_window) {
	var w = _window,
        base = 'assets/sprite/',
		loadState = {
            preload: function () {
                console.log("State: Inside Pre Load");
                // =========== Player - Hero ========== //
                w.game.load.image('hero', base + 'hero.png');
                // =========== Player - Enemies ========== //
                w.game.load.image('enemy_basic', base + 'enemy_basic.png');
                w.game.load.image('enemy_withGun', base + 'enemy_withGun.png');
                w.game.load.image('enemy_twoInOne', base + 'enemy_twoInOne.png');
            },
			create: function () {
				console.log("State: Assets Loaded");
				// w.game.state.start(w.ffd.GameStates.MAIN_MENU);
			}
		};
	
	w.ffd.StateManager.loadState = loadState;
	
})(this);