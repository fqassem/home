import Scene from "../../../core/Scene";
import Actor from "../../../core/Actor";
import Sprite from "../../../core/Actor/Sprite";
import BulbasaurSpriteSheet from './resources/bulbasaur.png';

const BulbasaurSprite = new Sprite(BulbasaurSpriteSheet, 64, 400, 400);
const Bulbasaur = new Actor(BulbasaurSprite);
const actors = [Bulbasaur];
const TitleScreen = new Scene(actors);

export default TitleScreen;