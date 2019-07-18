import Physics from '../Physics';
import Actor from '../Actor';
import Trigger from '../Actor/Trigger';

class Scene {
  private _hero: Actor;
  private _backgroundActors: Actor[] = [];
  private _triggers: Trigger[];

  constructor(hero: Actor, backgroundActors: Actor[], triggers: Trigger[]) {
    this._hero = hero;
    this._backgroundActors = backgroundActors;
    this._triggers = triggers;
  }

  update = (timestamp: number): void => {
    this._backgroundActors.forEach(_backgroundActor => _backgroundActor.update(timestamp));
    this._hero.update(timestamp);
    this._triggers.forEach((_trigger, idx) => {
      const { count, cb } = _trigger;
      const collided = Physics.collide(_trigger.target, _trigger);
      if (collided) {
        cb();

        console.log(count);
        if (count != null) {
          if (count === 1) {
            this._triggers.splice(idx, 1);
          } else {
            console.log('decrementing ' + count);
            _trigger.decCount();
            console.log('decrementing ' + _trigger.count);
          }
        }
      }
    });
  }

  render = (context: CanvasRenderingContext2D): void => {
    this._backgroundActors.forEach(_backgroundActor => _backgroundActor.render(context));
    this._hero.render(context);
  }
}
export default Scene;