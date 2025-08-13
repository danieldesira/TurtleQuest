import Dialog from "./Dialog";

type Props = {
  setShowInstructions: React.Dispatch<React.SetStateAction<boolean>>;
};

const InstructionsDialog = ({ setShowInstructions }: Props) => {
  const handleClose = () => setShowInstructions(false);

  return (
    <Dialog title="Instructions" handleOk={handleClose}>
      <p>
        Help Peppa the loggerhead turtle to her nesting grounds. Use the
        provided on-screen arrows to move the turtle. W,A,S,D or arrow keys may
        also be used to control the turtle.
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
    </Dialog>
  );
};

export default InstructionsDialog;
