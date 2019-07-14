import Animation, { Type } from './Animation';

class Sprite {
    private _image: HTMLImageElement;
    private _x: number;
    private _y: number;

    constructor(imageSrc: string, size: number, x: number, y: number) {
        this._image = new Image();
        this._image.src = imageSrc;
        this._x = x;
        this._y = y;
    }

    update = (timestamp: number, x: number, y: number):void => {
        this._x = x;
        this._y = y;
    }

    render = (context: CanvasRenderingContext2D, animation?: Animation):void => {
        if(animation) {
            const { width, height } = animation;
            const framePosition = animation.getFramePosition();

            context.drawImage(this._image, framePosition.x, framePosition.y, width, height, this._x, this._y, width, height);
        } else {
          context.drawImage(this._image, this._x, this._y);
        }
    }
}

export default Sprite;