(function (_window) {
    var w = _window,
        ScoreSystem = function () {
            var t = this,
                score = 0,
                scoreText,
                addScreen = function () {
                    var worldHeight = w.game.world.height,
				        worldWidth = w.game.world.width;	
                    scoreText = game.add.text(worldWidth - 50, 20,  score, { fontSize: '32px', fill: '#FFF' });
                },
                updateScreen = function () {
                    scoreText.text = score;
                },
                getScore = function () {
                    return score;
                },
                update = function (_val) {
                    var val = (typeof _val === 'number') ? _val : 0;
                    score += val;
                    updateScreen();
                },
                shutDown = function () {
                    score = 0;
                };
            addScreen();
            // Public Methods
            t.getScore = function () {
                return getScore();
            };
            t.update = function (_val) {
                update(_val);
            };
			t.shutDown = function () {
				shutDown();
			};            
        };
	w.ffd.Systems.ScoreSystem = ScoreSystem;        
})(this);