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
    private _tickCount = 0;
    private _ticksPerFrame = 4;

    constructor(dx: number, dy: number, size: number, frames: number, type: Type) {
        this._dx = dx;
        this._dy = dy;
        this._width = this._height = size;
        this._frames = frames;
        this._type = type;
    }

    update = ():void => {
        this._tickCount += 1;
			
        if (this._tickCount > this._ticksPerFrame) {
        	this._tickCount = 0;
            this._currentFrame++;
            this._currentFrame %= this._frames;
        }
    }

    reset = (): void => {
        this._currentFrame = 0;
    }

    getFramePosition = () => {
        const framePositionX = this._width * (this._dx + this._currentFrame);
        const framePositionY = (this._dy * this._height);

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