import Actor from "../../../core/Actor";
import Sprite from "../../../core/Actor/Sprite";
import Animation, { Type } from '../../../core/Actor/Animation';

import BulbasaurSpriteSheet from './resources/bulbasaur.png';

let bulbasaurAnimations = new Map();
bulbasaurAnimations.set(Type.idle, new Animation(0, 0, 64, 1, Type.idle));
bulbasaurAnimations.set(Type.down, new Animation(0, 0, 64, 4, Type.down));
bulbasaurAnimations.set(Type.right, new Animation(0, 2, 64, 4, Type.right));
const bulbasaurSprite = new Sprite(BulbasaurSpriteSheet, 64, 400, 400);

class Bulbasaur extends Actor {
    constructor(x: number = 0, y: number = 0) {
        super(bulbasaurSprite, x, y, bulbasaurAnimations);
        this.init();
    }

    init = ():void => {
        window.addEventListener('keydown', (e: KeyboardEvent) => {
            if(e.keyCode === 68) {
              this._currentAnimation = Type.right;
              this._x++;
            }
            if(e.keyCode === 83) {
                this._currentAnimation = Type.down;
                this._y++;
            }
        });
    }
}

export default Bulbasaur;   