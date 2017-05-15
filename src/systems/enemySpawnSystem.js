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
		MAX_PER_WAVE = 8,
		WAVE_TIMEOUT = 2400, // Every 2.5 seconds - new wave
		// Enemy speed
		MIN_SPEED = 3,
		MAX_SPEED = 6,
		EneymSpawnSystem = function () {
			var t = this,
				// Note: enemies will have ten items at any given time
				// Each wave will include the first five
				// Each wave will also push five more
				enemies = [],
				enemyWave1 = [],
				enemyWave2 = [],
				worldHeight = w.game.world.height,
				worldWidth = w.game.world.width,				
				stopSpawning = false,
				spawner = 0,
				config = {
				   type: eTypes,
				   x: 0,
				   y: 0,
				   steps: 4,
				},
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
						console.log("Spawning from e1");
						wave = enemyWave1;
					} else {
						console.log("Spawning from e2");
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
					spawner = setInterval(function (){
						if (!stopSpawning) {
							wave();
						}
					}, WAVE_TIMEOUT);
				},
				update = function () {
					var i,
						enemy,
						updateEnemy = function (_parent) {
							var parent = _parent,
								index;
							if (enemy) {
								console.log("Enemy Y" + enemy.getY() + " --  " + worldHeight);
								if (enemy.getY() < (worldHeight - 30)) {
									enemy.fall();
								} else {
									console.log("Destoy ");
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
				};
				
			// Public Interface
			t.start = function () {
				start();
			};
			t.update = function () {
				update();
			};
		};
	w.ffd.Systems.EneymSpawnSystem = EneymSpawnSystem;
})(this);