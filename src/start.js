(function (_window) {

    var w = _window;

    // All gloabl namespaces are defined here
    // ROOT
    if (!w.ffd) {
        w.ffd = {};
        // Game Sprite Keys
        w.ffd.Sprites ={
            HERO: 'hero',
            ENEMEY_BASIC: 'enemy_basic',
            ENEMEY_WITH_GUN: 'enemy_withGun',
            ENEMEY_TWO_IN_ONE: 'enemy_twoInOne'
        };
        // Game State relatad
        w.ffd.StateManager = {};
        w.ffd.GameStates = {
            BOOT: 'boot',
            PRE_LOAD: 'pre_load',
            MAIN_MENU: 'main_menu',
            GAME: 'game',
            GAME_OVER: 'game_over' 
        };
    }

})(this);