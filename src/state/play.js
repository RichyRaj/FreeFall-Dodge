(function (_window) {
	var w = _window,
		hero = '',
		enemySpawnSystem = '',
		HERO_STEPS = 4,	
		gameState = {
			create: function () {
                console.log("State: Inside Game State");
				var image = w.game.cache.getImage(w.ffd.Sprites.HERO),
					wt = image.width,
					ht = image.height,
					x = (w.game.world.width / 2) - (wt / 2),
					y = w.game.world.height - (ht + 5);

				hero = new w.ffd.Player({
					x: x,
					y: y,
					key: w.ffd.Sprites.HERO,
					steps: HERO_STEPS
				});
				hero.show();
				hero.enablePhysics();

				enemySpawnSystem = new w.ffd.Systems.EneymSpawnSystem();
				enemySpawnSystem.start();
			},
			update: function () {
                console.log("Screen Update ...");
				var controls = w.ffd.CursorKeys;
				if (hero) {
					if (controls.left.isDown) {
						hero.moveLeft();
					} else if (controls.right.isDown) {
						hero.moveRight();
					}
				}
			}
		};
	
	w.ffd.StateManager.gameState = gameState;
	
})(this);