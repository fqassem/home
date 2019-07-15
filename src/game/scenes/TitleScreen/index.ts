import Scene from "../../../core/Scene";
import Bulbasaur from '../../actors/Bulbasaur';
import Tree from '../../actors/Tree';

const drawTrees = () => {
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

let trees = drawTrees();

// Hero
const bulbasaur = new Bulbasaur();

//
const actors = [...trees, bulbasaur];
const TitleScreen = new Scene(actors);

export default TitleScreen;