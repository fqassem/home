import Actor from '../Actor';

class Scene {
  private _actors: Actor[] = [];

  constructor(actors: Actor[]) {
      this._actors = actors;
  }

  addActor = (actor: Actor):void => {
      this._actors.push(actor);
  }

  update = (timestamp: number): void => {
    this._actors.forEach(actor => actor.update(timestamp));
  }

  render = (context: CanvasRenderingContext2D): void => {
    this._actors.forEach(actor => actor.render(context));
  }
}
export default Scene;