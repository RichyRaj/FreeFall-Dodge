(function (_window) {
	var w = _window,
		style = { font: "bold 32px Arial", fill: "#fff"},
		menuState = {
			create: function () {
				console.log("Inside Menu");
				game.add.text(130, 300, "Click to start", style);
				game.input.activePointer.capture = true;	 
			},
			update: function () {
				if (game.input.activePointer.isDown) {
					game.input.activePointer.capture = true;
					w.game.state.start(w.ffd.GameStates.GAME);
				}
			}
		};
	
	w.ffd.StateManager.menuState = menuState;
	
})(this);