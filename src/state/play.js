(function (_window) {
	var w = _window,
		hero = '',
		enemySpawnSystem = '',
		HERO_STEPS = 4,
		gameOver = false,

		onCollision = function () {
			console.log('BANG BANG BANG');
			gameOver = true;
			// Clean up 
			if (enemySpawnSystem) {
				enemySpawnSystem.shutDown();
			}
			enemySpawnSystem = '';
			if (hero) {
				hero.destroy();
			}
			hero = '';
			console.log("PLay State Destroyed");
			w.game.state.start(w.ffd.GameStates.GAME_OVER);
		},

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
					steps: HERO_STEPS,
					collideBounds: true
				});
				hero.show();
				hero.enablePhysics();

				enemySpawnSystem = new w.ffd.Systems.EneymSpawnSystem();
				enemySpawnSystem.start();
				enemySpawnSystem.detectCollision(hero, onCollision);
			},
			update: function () {
				if (!gameOver) {
					console.log("Screen Update ...");
					var controls = w.ffd.CursorKeys;

					// update enemies
					enemySpawnSystem.update();
					
					if (hero) {
						if (controls.left.isDown) {
							hero.moveLeft();
						} else if (controls.right.isDown) {
							hero.moveRight();
						}
					}
				}
			}
		};
	
	w.ffd.StateManager.gameState = gameState;
	
})(this);