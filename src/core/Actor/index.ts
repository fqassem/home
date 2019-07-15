import Sprite from './Sprite';
import Animation, { Type } from './Animation';

class Actor {
    protected _x: number;
    protected _y: number;
    private _sprite: Sprite;
    private _animations: Map<Type, Animation>;
    protected _activeAnimation: Type;

    constructor(sprite: Sprite, x: number = 0, y: number = 0, animations?: Map<Type, Animation>) {
        this._sprite = sprite;
        this._x = x;
        this._y = y;
        this._animations = animations;
        this._activeAnimation = Type.idle;
    }

    update = (timestamp: number):void => {
        this._sprite.update(timestamp, this._x, this._y);
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

}
export default Actor;