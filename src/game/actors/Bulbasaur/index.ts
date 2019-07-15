import Actor from "../../../core/Actor";
import Sprite from "../../../core/Actor/Sprite";
import Animation, { Type } from '../../../core/Actor/Animation';

import BulbasaurSpriteSheet from './resources/bulbasaur.png';

let bulbasaurAnimations = new Map();
bulbasaurAnimations.set(Type.idle, new Animation(0, 0, 64, 1, Type.idle));
bulbasaurAnimations.set(Type.right, new Animation(0, 2, 64, 4, Type.right));
bulbasaurAnimations.set(Type.idleRight, new Animation(2, 2, 64, 1, Type.idleRight));
bulbasaurAnimations.set(Type.left, new Animation(0, 1, 64, 4, Type.left));
bulbasaurAnimations.set(Type.idleLeft, new Animation(2, 1, 64, 1, Type.idleLeft));
const bulbasaurSprite = new Sprite(BulbasaurSpriteSheet, 64);

class Bulbasaur extends Actor {
    private _velX: number = 0;
    private _maxSpeed = 5;
    private _friction = .85;
    private _lastDirection: Type = null;
    private superUpdate = this.update;

    constructor(x: number = 0, y: number = 0) {
        super(bulbasaurSprite, x, y, bulbasaurAnimations);
        this.init();
    }

    init = (): void => {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.keyCode === 68) {
                this._activeAnimation = this._lastDirection = Type.right;
            } else if (e.keyCode === 65) {
                this._activeAnimation = this._lastDirection = Type.left;
            }
        });

        window.addEventListener('keyup', (e: KeyboardEvent) => {
            switch(this._lastDirection) {
                case Type.left: 
                    this._activeAnimation = Type.idleLeft;
                    break;
                case Type.right:
                    this._activeAnimation = Type.idleRight;
                    break;
                default:
                    this._activeAnimation = Type.idle;
            }
        });
    }

    update = (timestamp: number): void => {
        if (this._activeAnimation == Type.right) {
            if (this._velX < this._maxSpeed) {
                this._velX++;
            }
        } else if (this._activeAnimation == Type.left) {
            if (Math.abs(this._velX) < this._maxSpeed) {
                this._velX--;
            }
        }
        this._velX *= this._friction;
        this._x += this._velX;

        this.superUpdate(timestamp);
    }
}

export default Bulbasaur;   