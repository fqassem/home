class Sprite {
    private _image: HTMLImageElement;
    private _size: number;
    private _speed: number;
    private _x: number;
    private _y: number;
    private _currentFrame = 0;
    private _currentAnimation = 0;

    constructor(imageSrc: string, size: number, x: number, y: number) {
      this._size = size;
      this._x = x;
      this._y = y;
      this.load(imageSrc);
    }

    load = (url: string): void => {
        this._image = new Image();
        this._image.src = url;
    }

    update = (timestamp: number):void => {
        this._currentFrame++;
        this._currentFrame = this._currentFrame % 4;
    }

    render = (context: CanvasRenderingContext2D):void => {
        const framePositionX = this._size * this._currentFrame;
        const framePositionY = this._size * this._currentAnimation;
        const width = this._size;
        const height = this._size;

        context.drawImage(this._image, framePositionX, framePositionY, width, height, this._x, this._y, width, height);
    }
}

export default Sprite;