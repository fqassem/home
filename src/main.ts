import './main.css';
import Game from './core/Game/';
import TitleScene from './game/scenes/TitleScreen';

let _game: Game = null;
let _stopRequestAnimationFrame: number = null;

const init = (): void => {
    _game = new Game();
    _stopRequestAnimationFrame = requestAnimationFrame(gameLoop); 
    _game.setCurrentScene(TitleScene);
}

const cleanUp = (): void => {
    if(_stopRequestAnimationFrame) {
        cancelAnimationFrame(_stopRequestAnimationFrame);
    }
}

const gameLoop = (timestamp: number): void => {
    _game.update(timestamp);
    _game.render();
    requestAnimationFrame(gameLoop); 
}

window.onload = (): void => {
	init();
}

window.onclose = (): void => {
    cleanUp();   
}
