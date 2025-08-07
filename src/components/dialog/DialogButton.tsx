type Props = {
  buttonType?: "submit" | "button";
  variant?: "error" | "default";
  handleClick: () => void;
};

const DialogButton = ({
  buttonType = "button",
  variant = "default",
  children,
  handleClick,
}: React.PropsWithChildren<Props>) => (
  <button
    type={buttonType}
    className={`${
      variant === "default" ? "bg-pink-600" : "bg-red-700"
    } rounded-md text-xl text-white pl-2 pr-2 w-fit`}
    onClick={handleClick}
  >
    {children}
  </button>
);

export default DialogButton;
