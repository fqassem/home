import Sprite from './Sprite';

class Actor {
    private _x: number;
    private _y: number;
    private _sprite: Sprite;

    constructor(sprite: Sprite, x: number = 0, y: number = 0) {
        this._sprite = sprite;
        this._x = x;
        this._y = y;
    }

    update = (timestamp: number):void => {
        this._sprite.update(timestamp, this._x, this._y);
    }

    render = (context: CanvasRenderingContext2D):void => {
        this._sprite.render(context);        
    }
    
}
export default Actor;