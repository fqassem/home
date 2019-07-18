import Scene from '../Scene';

class Graphics {
    protected _canvas: HTMLCanvasElement;
    protected _context: CanvasRenderingContext2D;
    
    constructor(width: number = window.innerWidth, height: number = window.innerHeight) {
        this._canvas = <HTMLCanvasElement>document.getElementById('game');
        this._context = this._canvas.getContext("2d");
		this._canvas.width = width;
		this._canvas.height = height;
    }

    render(scene : Scene) {
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
        scene.render(this._context);
    }
}

export default Graphics;