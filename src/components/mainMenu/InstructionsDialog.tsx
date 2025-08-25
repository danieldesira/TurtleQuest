import Dialog from "../dialog/Dialog";

type Props = {
  setShowInstructions: React.Dispatch<React.SetStateAction<boolean>>;
};

const InstructionsDialog = ({ setShowInstructions }: Props) => {
  const handleClose = () => setShowInstructions(false);

  return (
    <Dialog title="Instructions" handleOk={handleClose}>
      <div className="flex flex-col gap-1">
        <p>
          Help Peppa the loggerhead turtle to her nesting grounds. Use the
          provided on-screen arrows to move the turtle. W,A,S,D or arrow keys
          may also be used to control the turtle.
        </p>
        <p>
          Move Peppa to the right end of the screen in order to pass each level.
          Eat prey and avoid obstacles.
        </p>
        <p>Good luck!</p>
        <p>
          Yours turtley,
          <br />
          Daniel - Game Developer
        </p>
      </div>
      <figure className="flex flex-col justify-center items-center gap-1">
        <img
          src="/images/babyTurtle.jpg"
          alt="Baby turtle"
          className="w-full"
        />
        <figcaption className="font-light italic text-sm">
          Photo by Steff Cutajar from Għadira nest excavation (2025)
        </figcaption>
      </figure>
    </Dialog>
  );
};

export default InstructionsDialog;
