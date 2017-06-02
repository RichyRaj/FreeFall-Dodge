(function (_window) {
	var w = _window,
		score = 0,
		style = { font: "bold 32px Arial", fill: "#fff"},
		gameOverState = {
			init: function (_score) {
				score = (typeof _score === 'number') ? _score : 0;			
			},
			create: function () {
				console.log("Inside Game Over");
				game.add.text(115, 300, ("You Scored: " + score), style);
			}
		};
	
	w.ffd.StateManager.gameOverState = gameOverState;
	
})(this);