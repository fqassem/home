import Actor from '../Actor';

class Physics {
    collide = (actor1: Actor, actor2: Actor) => {
        if (actor1.x < actor2.x + actor2.width &&
            actor1.x + actor1.width > actor2.x &&
            actor1.y < actor2.y + actor2.height &&
            actor1.y + actor1.height > actor2.y) {
            return true;
        } else {
            return false;
        }
    }
}

const PhysicsSingleton = new Physics();
export default PhysicsSingleton;