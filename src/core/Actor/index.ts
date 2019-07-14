import Sprite from './Sprite';
import Animation, { Type } from './Animation';

class Actor {
    protected _x: number;
    protected _y: number;
    private _sprite: Sprite;
    private _animations: Map<Type, Animation>;
    protected _currentAnimation: Type;

    constructor(sprite: Sprite, x: number = 0, y: number = 0, animations: Map<Type, Animation>) {
        this._sprite = sprite;
        this._x = x;
        this._y = y;
        this._animations = animations;
        this._currentAnimation = Type.idle;
    }

    update = (timestamp: number):void => {
        this._sprite.update(timestamp, this._x, this._y);
        if(this._animations){
            const anim = this._animations.get(this._currentAnimation);
            anim.update();
        }
    }

    render = (context: CanvasRenderingContext2D):void => {
        let anim = null;
        if(this._animations) {
            anim = this._animations.get(this._currentAnimation);
        }
        this._sprite.render(context, anim);        
    }
}
export default Actor;