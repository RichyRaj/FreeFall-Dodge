(function (_window) {
	var w = _window,

		bootState = {
			create: function () {
				console.log("State: inside boot");
				// Will set up the physics engine for other states to use
				w.game.physics.startSystem(Phaser.Physics.ARCADE);
				w.game.state.start(w.ffd.GameStates.PRE_LOAD);
			}
		};
	
	w.ffd.StateManager.bootState = bootState;
	
})(this);