import Animation, { Type } from './Animation';

class Sprite {
    private _image: HTMLImageElement;
    private _x: number;
    private _y: number;
    private _dx: number;
    private _dy: number;
    private _width: number;
    private _height: number;

    constructor(imageSrc: string, x: number = 0, y: number = 0, dx?: number, dy?: number, width?:number, height?: number) {
        this._image = new Image();
        this._image.src = imageSrc;
        this._x = x;
        this._y = y;
        this._dx = dx;
        this._dy = dy;
        this._width = width;
        this._height = height;
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
        } else if(this._dx !=null && this._dy !=null &&  this._width !=null && this._height !=null) {
            context.drawImage(this._image, this._dx, this._dy, this._width, this._height, this._x, this._y, this._width, this._height);
        } else  {
            context.drawImage(this._image, this._x, this._y);
        }
    }
}

export default Sprite;