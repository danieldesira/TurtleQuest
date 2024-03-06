import ICharacter from "./ICharacter";

interface INonMainCharacter extends ICharacter {
  swim(): void;
  handleTurtleCollision(): void;
  setInitialPosition(): void;
  get foodValue(): number;
  get stomachImpact(): number;
  get damage(): number;
  get points(): number;
}

export default INonMainCharacter;
