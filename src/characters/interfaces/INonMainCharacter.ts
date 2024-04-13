import ICharacter from "./ICharacter";

interface INonMainCharacter extends ICharacter {
  swim(): void;
  handleTurtleCollision(): void;
  setInitialPosition(): void;
  get stomachImpact(): number;
  get points(): number;
  isCollidingWithTurtle(): boolean;
}

export default INonMainCharacter;
