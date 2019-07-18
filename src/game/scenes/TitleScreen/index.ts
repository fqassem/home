import Scene from "../../../core/Scene";
import Trigger from '../../../core/Actor/Trigger';
import Bulbasaur from '../../actors/Bulbasaur';
import Tree from '../../actors/Tree';

const createTrees = () => {
    let trees = [];
    let x, y;
    for(x = 0; x < window.innerWidth; x += 64) {
        for(y = 0; y < window.innerHeight; y += 64) {
            if(Math.random() < .5)
               trees.push(new Tree(x, y));
        }
    }
    return trees;
  }

const trees = createTrees();
const bulbasaur = new Bulbasaur();
const EndTrigger = new Trigger(500, 10, 50, 50, bulbasaur, () => console.log('Triggered'), 1);

// Add background actors using painter's algorithm
const backgroundActors = [...trees];
const triggers = [EndTrigger];

const TitleScreen = new Scene(bulbasaur, backgroundActors, triggers);

export default TitleScreen;