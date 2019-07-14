import Actor from "../../../core/Actor";
import Sprite from "../../../core/Actor/Sprite";
import Animation, { Type } from '../../../core/Actor/Animation';

import BulbasaurSpriteSheet from './resources/bulbasaur.png';

class Bulbasaur extends Actor {
    constructor(x: number = 0, y: number = 0) {
        let bulbasaurAnimations = new Map();
        bulbasaurAnimations.set(Type.idle, new Animation(0, 0, 64, 1, Type.idle));
        bulbasaurAnimations.set(Type.down, new Animation(0, 0, 64, 4, Type.down));
        const bulbasaurSprite = new Sprite(BulbasaurSpriteSheet, 64, 400, 400);
        
        super(bulbasaurSprite, x, y, bulbasaurAnimations);
    }
}

export default Bulbasaur;   