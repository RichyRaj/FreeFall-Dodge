// The Enemy Base Class
// Derived from the player class
(function (_window) {
	var w = _window,
		types = w.ffd.EnemyTypes,
		sprites = w.ffd.Sprites,
		getSpriteKey = function (_type) {
			var type = (typeof _type === 'string' && _type) ? _type : types.BASIC,
				key = '';
			switch (type) {
				case types.WITH_GUN:
					key = sprites.ENEMEY_WITH_GUN;
					break;
				case types.TWO_IN_ONE:
					key = sprites.ENEMEY_TWO_IN_ONE;
					break;
				default:
					key = sprites.ENEMEY_BASIC;
					break;
			}
			return key;
		},
		Enemy = function (_config) {
			var t = this,
				config = (typeof _config !== 'undefined' && _config) ? _config : {},
				type = config.type || types.BASIC;
			config.steps = 0;
			config.key = getSpriteKey(type);          
			// Call the constructor of the super class
			w.ffd.Player.call(this, config);
			// Enemy related properties
			t.type = type;
		};

	Enemy.prototype = Object.create(w.ffd.Player.prototype);
	Enemy.prototype.constructor = Enemy;

	Enemy.prototype.fall = function () {
		var t = this;
	};

	w.ffd.Enemy = Enemy;
})(this);