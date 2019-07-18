import Scene from '../Scene';
import Graphics from '../Graphics';

class Game {
    protected _graphics: Graphics;
    protected _currentScene: Scene;
    
    constructor(width: number = window.innerWidth, height: number = window.innerHeight) {
		this._graphics = new Graphics(width, height);
    }

    setCurrentScene = (scene: Scene): void => {
        this._currentScene = scene;
    }

    update(timestamp: number): void {
        this._currentScene.update(timestamp);
    }

    render() {
        this._graphics.render(this._currentScene);
    }
}

export default Game;