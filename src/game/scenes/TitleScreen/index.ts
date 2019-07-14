import Scene from "../../../core/Scene";
import Bulbasaur from '../../actors/Bulbasaur';

const bulbasaur = new Bulbasaur();
const actors = [bulbasaur];
const TitleScreen = new Scene(actors);

export default TitleScreen;