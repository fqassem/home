import Actor from "../../../core/Actor";
import Sprite from "../../../core/Actor/Sprite";

import TreeSpriteSheet from './resources/tree.png';

class Tree extends Actor {
    constructor(x: number = 0, y: number = 0) {
        const tree1 = new Sprite(TreeSpriteSheet, 0, 0, 0, 0, 44, 64);
        const tree2 = new Sprite(TreeSpriteSheet, 0, 0, 46, 0, 54, 64);
        const tree3 = new Sprite(TreeSpriteSheet, 0, 0, 96, 0, 54, 64);
        const trees = [tree1, tree2, tree3];
        const rando = Math.floor(Math.random() * trees.length);
        super(trees[rando], x, y);
    }
}

export default Tree;