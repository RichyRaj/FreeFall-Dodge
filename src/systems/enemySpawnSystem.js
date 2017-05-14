// Will create the wave of enemies
// There will be three types : 
// Basic enemy - will be shown from start of gameplay
// Enemy with gun - will be shown after a delay 
// Two enemies merged as one - will be shown after a delay
(function (_window) {
    var w = _window,
        EneymSpawnSystem = function () {
            var t = this;
            
            // Public Interface
            t.start = function () {
                
            };
        };
    w.ffd.Systems.EneymSpawnSystem = EneymSpawnSystem;
})(this);