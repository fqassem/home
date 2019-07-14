import Scene from '../Scene';

class Game {
    private _canvas: HTMLCanvasElement;
    private _context: CanvasRenderingContext2D;
    private _currentScene: Scene;
    
    constructor(width: number = window.innerWidth, height: number = window.innerHeight) {
        this._canvas = <HTMLCanvasElement>document.getElementById('game');
        this._context = this._canvas.getContext("2d");
		this._canvas.width = width;
		this._canvas.height = height;
    }

    setCurrentScene = (scene: Scene): void => {
        this._currentScene = scene;
    }

    update(timestamp: number): void {
        this._currentScene.update(timestamp);
    }

    render() {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        this._currentScene.render(this._context);
    }
}

export default Game;