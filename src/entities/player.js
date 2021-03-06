(function (_window) {
    var w = _window,
        DEFAULT_STEPS = 3,

    // Player Class 
    // Use this to create hero and the enemies
    Player = function  (_config) {
        var t = this,
            config = (typeof _config !== 'undefined' && _config) ? _config : {},
            x = config.x || 0,
            y = config.y || 0,
            key = config.key || 0,
            collideBounds = config.collideBounds || false,
            steps = (typeof config.steps === 'number') ? config.steps : DEFAULT_STEPS;
             
        t.sprite = '';
        t.x = x;
        t.y = y;
        t.key = key;
        t.steps = steps;
        t.collideBounds = collideBounds;
    };

    // prototype methods go here
    Player.prototype.show = function () {
        var t = this;
        t.sprite = w.game.add.sprite(t.x, t.y, t.key);
    };
    Player.prototype.enablePhysics = function () {
        var t = this;
        if (t.sprite) {
            w.game.physics.arcade.enable(t.sprite);
            if (t.collideBounds) {
                t.sprite.body.collideWorldBounds = true;
            }
        }
    };
    Player.prototype.moveLeft = function () {
        var t = this;
        if (t.sprite) {
            t.sprite.x -= t.steps;
        }
    };
    Player.prototype.moveRight = function () {
        var t = this;
        if (t.sprite) {
            t.sprite.x += t.steps;
        }
    };
    Player.prototype.getX = function () {
        var t = this;
        if (t.sprite) {
            return t.sprite.x;
        }
    };
    Player.prototype.getY = function () {
        var t = this;
        if (t.sprite) {
            return t.sprite.y;
        }
    };
    Player.prototype.destroy = function () {
        var t = this;
        if (t.sprite) {
            console.log("Kill Confirm");
            t.sprite.kill();
            t.sprite.destroy();
            t.sprite = '';
        }
    };

    w.ffd.Player = Player;

})(this);