import { FaFloppyDisk } from "react-icons/fa6";
import DialogButton from "./DialogButton";

type Props = {
  title: string;
  handleOk?: () => void;
  type?: "default" | "error" | "form";
};

const Dialog = ({
  title,
  children,
  type = "default",
  handleOk,
}: React.PropsWithChildren<Props>) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      handleOk();
    }
  };

  return (
    title && (
      <dialog
        className="fixed inset-0 flex flex-col gap-2 items-center justify-center text-white w-4/5 opacity-80 focus:opacity-95 transition-opacity duration-500 bg-gray-900 p-5 rounded-3xl max-w-xl z-50"
        onKeyDown={handleKeyDown}
      >
        <div className="flex justify-center border-b-white border-b-2 pb-2">
          <h1 className="text-xl font-extrabold">{title}</h1>
        </div>
        <div className="flex flex-col w-11/12 gap-3 max-h-screen-1/2 overflow-y-auto">
          {children}
        </div>
        <DialogButton
          variant={type === "form" ? "default" : type}
          buttonType={type === "form" ? "submit" : "button"}
          handleClick={handleOk}
        >
          {type === "form" ? (
            <>
              <FaFloppyDisk />
              Save
            </>
          ) : (
            <>OK</>
          )}
        </DialogButton>
      </dialog>
    )
  );
};

export default Dialog;
