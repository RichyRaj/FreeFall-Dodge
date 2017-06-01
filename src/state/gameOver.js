(function (_window) {
	var w = _window,
		style = { font: "bold 32px Arial", fill: "#fff"},
		gameOverState = {
			create: function () {
				console.log("Inside Game Over");
				game.add.text(130, 300, "Game Over", style);
			}
		};
	
	w.ffd.StateManager.gameOverState = gameOverState;
	
})(this);