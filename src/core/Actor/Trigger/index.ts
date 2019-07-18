import Actor from '../';

class Trigger extends Actor {
    private _target: Actor;
    private _cb: Function;
    private _count: number;

    constructor(x: number, y: number, width: number, height: number, target: Actor, cb: Function, count?: number) {
        super(x, y, width, height);
        this._target = target;
        this._cb = cb;
        this._count = count;
    }

    decCount = () => {
        if(this._count) {
            this._count -= 1;
        }
    }

    get target() {
        return this._target;
    }

    get cb() {
        return this._cb;
    }

    get count() {
        return this._count;
    }
}

export default Trigger;