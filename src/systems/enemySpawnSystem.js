// Will create the wave of enemies
// There will be three types : 
// Basic enemy - will be shown from start of gameplay
// Enemy with gun - will be shown after a delay 
// Two enemies merged as one - will be shown after a delay
(function (_window) {
	var w = _window,
		eTypes = w.ffd.EnemyTypes,

		// Constants
		MAX_ENEMIES = 16,
		MAX_PER_WAVE = MAX_ENEMIES / 2,
		WAVE_TIMEOUT = 1750, // Every 1.75 seconds - new wave
		// Min speed = 6 
		// 60 x 6 = 360 (per sec)
		// 60 x 4 = 240 (600)
		// lesser approximate = 1.75 
		// Enemy speed
		MIN_SPEED = 6,
		MAX_SPEED = 8,
		EneymSpawnSystem = function () {
			var t = this,
				// Note: enemies will have ten items at any given time
				// Each wave will include the first five
				// Each wave will also push five more
				hero,
				onCollision = '',
				enemies = [],
				enemyWave1 = [],
				enemyWave2 = [],
				worldHeight = w.game.world.height,
				worldWidth = w.game.world.width,				
				spawner = 0,
				config = {
				   type: eTypes,
				   x: 0,
				   y: 0,
				   steps: 4,
				},
				gameOver = false,
				getRandomSpeed = function () {
					return w.game.rnd.integerInRange(MIN_SPEED, MAX_SPEED);
				},
				setWave = function () {
					var i,
						enemy;
					for (i = 0; i < MAX_PER_WAVE; i++) {
						config.x = (i * 60) + 10;
						config.steps = getRandomSpeed();
						enemy = new w.ffd.Enemy(config);
						if (enemies.length <= MAX_ENEMIES) {
							enemies.push(enemy);
						}
					}
				},
				getWave = function () {
					var wave;
					if (enemies.length === MAX_ENEMIES) {
						wave = enemies.splice(0, MAX_ENEMIES / 2);
					}					
					return wave;
				},
				wave = function () {
					// Will pop 5 from the list and add 5 to the list
					var i,
						enemy,
						tempWave,
						wave;
					
					if (!enemyWave1.length) {					
						wave = enemyWave1;
					} else {
						wave = enemyWave2;
					}

					tempWave = getWave();
					tempWave.map(function (i){
						wave.push(i);
					});
					setWave();
					
					for (i = 0; i < wave.length; i++) {
						enemy = wave[i];
						enemy.show();
						enemy.enablePhysics();
					}
				},
				start = function () {
					setWave();
					setWave();
					wave();
					spawner = w.setInterval(function (){
						if (!gameOver) {
							wave();
						}
					}, WAVE_TIMEOUT);
				},
				onClsn = function () {
					gameOver = true;
					// Collision detected
					if (onCollision) {
						onCollision();
					}
				},
				detectCollision = function (_hero, _onCollision) {
					hero = (typeof _hero !== 'undefined') ? _hero : '';
					onCollision = (typeof _onCollision === 'function') ? _onCollision : '';
				},
				update = function () {
					var i,
						enemy,
						updateEnemy = function (_parent) {
							var parent = _parent,
								index;
							if (enemy) {
								if (enemy.getY() < (worldHeight - 30)) {
									enemy.fall();
									w.game.physics.arcade.overlap(hero.sprite, enemy.sprite, onClsn, null, null);
								} else {
									enemy.destroy();
									if (parent) {
										index = parent.indexOf(enemy); 
										if (index > -1) {
											parent.splice(index, 1);
										}
										enemy = '';
									}
								}
							}
						};
					for (i = 0; i < enemyWave1.length; i++) {
						enemy = enemyWave1[i];
						updateEnemy(enemyWave1);
					}
					for (i = 0; i < enemyWave2.length; i++) {
						enemy = enemyWave2[i];
						updateEnemy(enemyWave2);

					}
					
				},
				shutDown = function () {
					var i,
						enemy;
					gameOver = true;
					// stop spawning
					w.clearInterval(spawner);
					spawner = 0;
					hero = '';
					
					for (i = 0; i < enemyWave1.length; i++) {
						enemy = enemyWave1[i];
						enemy.destroy();
					}
					for (i = 0; i < enemyWave2.length; i++) {
						enemy = enemyWave2[i];
						enemy.destroy();
					}
					for (i = 0; i < enemies.length; i++) {
						enemy = enemies[i];
						enemy.destroy();
					}
					enemy = enemies = enemyWave1 = enemyWave2 = '';
					console.log("Spawner Destroyed");				
				};
				
			// Public Interface
			t.start = function () {
				start();
			};
			t.detectCollision = function (_hero, _onCollision) {
				detectCollision(_hero, _onCollision);
			};
			t.update = function () {
				if (!gameOver) {
					update();
				}
			};
			t.shutDown = function () {
				shutDown();
			};
		};
	w.ffd.Systems.EneymSpawnSystem = EneymSpawnSystem;
})(this);