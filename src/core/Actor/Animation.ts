export enum Type {
    up,
    down,
    left,
    right,
    idle
}

class Animation {
    private _currentFrame: number = 0;
    private _dx: number;
    private _dy: number;
    private _width: number;
    private _height: number;
    private _frames: number;
    private _type: Type;

    constructor(dx: number, dy: number, size: number, frames: number, type: Type) {
        this._dx = dx;
        this._dy = dy;
        this._width = this._height = size;
        this._frames = frames;
        this._type = type;
    }

    update = ():void => {
        this._currentFrame++;
        this._currentFrame %= this._frames;
    }

    reset = (): void => {
        this._currentFrame = 0;
    }

    getFramePosition = () => {
        const framePositionX = this._dx + (this._width * this._currentFrame);
        const framePositionY = this._dy * this._currentFrame;

        return { x: framePositionX, y: framePositionY };
    }

    get width():number {
        return this._width;
    }

    get height():number {
        return this._height;
    }
}

export default Animation;