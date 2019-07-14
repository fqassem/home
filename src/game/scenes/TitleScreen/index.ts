import Scene from "../../../core/Scene";
import Actor from "../../../core/Actor";
import Sprite from "../../../core/Actor/Sprite";
import Animation, { Type } from '../../../core/Actor/Animation';
import BulbasaurSpriteSheet from './resources/bulbasaur.png';

let bulbasaurAnimations = new Map();
bulbasaurAnimations.set(Type.idle, new Animation(0, 0, 64, 1, Type.idle));
bulbasaurAnimations.set(Type.down, new Animation(0, 0, 64, 4, Type.down));

const BulbasaurSprite = new Sprite(BulbasaurSpriteSheet, 64, 400, 400, bulbasaurAnimations);
const Bulbasaur = new Actor(BulbasaurSprite);
const actors = [Bulbasaur];
const TitleScreen = new Scene(actors);

export default TitleScreen;