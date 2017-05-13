(function (_window) {
	var w = _window,
		gameState = {
			create: function () {
                console.log("State: Inside Game State");
			},
			update: function () {
                console.log("Screen Update ...");
			}
		};
	
	w.ffd.StateManager.gameState = gameState;
	
})(this);