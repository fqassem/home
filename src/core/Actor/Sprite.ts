import Animation, { Type } from './Animation';

class Sprite {
    private _image: HTMLImageElement;
    private _animations: Map<Type, Animation>;
    private _currentAnimation: Type;
    private _x: number;
    private _y: number;

    constructor(imageSrc: string, size: number, x: number, y: number, animations: Map<Type, Animation>) {
        this._image = new Image();
        this._image.src = imageSrc;
        this._animations = animations;
        this._currentAnimation = Type.idle;
    }

    update = (timestamp: number, x: number, y: number):void => {
        this._x = x;
        this._y = y;
        const anim = this._animations.get(this._currentAnimation);
        anim.update();
    }

    render = (context: CanvasRenderingContext2D):void => {
        if(this._animations) {
            const anim = this._animations.get(this._currentAnimation);
            const { width, height } = anim;
            const framePosition = anim.getFramePosition();

            context.drawImage(this._image, framePosition.x, framePosition.y, width, height, this._x, this._y, width, height);
        } else {
          context.drawImage(this._image, this._x, this._y);
        }
    }
}

export default Sprite;