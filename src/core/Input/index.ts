export enum KeyCode {
    ENTER = 13,
    SPACE = 32,
    W = 87,
    A = 65,
    S = 83,
    D = 68
};

class Input {
    private _keysDown: Map<number, boolean>;

    constructor() {
        this._keysDown = new Map<number, boolean>();
        window.addEventListener('keydown', this.keyDown);
        window.addEventListener('keyup', this.keyUp)
    }

    keyDown = (e: KeyboardEvent) => {
        this._keysDown.set(e.keyCode, true);
    }

    keyUp = (e: KeyboardEvent) => {
        this._keysDown.set(e.keyCode, false);
    }

    public isKeyDown(keyCode: KeyCode) {
        return this._keysDown.get(keyCode) === true;
    }
}
const inputSingleton = new Input();
export default inputSingleton;