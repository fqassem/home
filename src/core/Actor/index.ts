import Sprite from './Sprite';
import Animation, { Type } from './Animation';

class Actor {
    protected _x: number;
    protected _y: number;
    protected _width: number;
    protected _height: number;
    private _sprite: Sprite;
    private _animations: Map<Type, Animation>;
    protected _activeAnimation: Type;

    constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0, sprite?: Sprite, animations?: Map<Type, Animation>) {
        this._sprite = sprite;
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
        this._animations = animations;
        this._activeAnimation = Type.idle;
    }

    update = (timestamp: number):void => {
        if(this._sprite) {
            this._sprite.update(timestamp, this._x, this._y);
        }

        const anim = this.getCurrentAnimation();
        if(anim){
            anim.update();
        }
    }

    render = (context: CanvasRenderingContext2D):void => {
        let anim = this.getCurrentAnimation();
        this._sprite.render(context, anim);        
    }

    getCurrentAnimation = ():Animation  => {
        let anim = null;
        if(this._animations) {
            anim = this._animations.get(this._activeAnimation);
        }
        return anim;
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }
}
export default Actor;