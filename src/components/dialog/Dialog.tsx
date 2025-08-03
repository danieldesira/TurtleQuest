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
        className="fixed inset-0 flex flex-col items-center justify-center text-white w-4/5 opacity-80 focus:opacity-95 transition-opacity duration-500 bg-gray-900 p-5 rounded-3xl max-w-xl z-50"
        onKeyDown={handleKeyDown}
      >
        <div className="flex justify-center border-b-white border-b-2 pb-2">
          <h1 className="text-xl font-extrabold">{title}</h1>
        </div>
        <div className="w-11/12 m-auto mt-3 mb-3 grid gap-3 max-h-screen-1/2 overflow-y-auto">
          {children}
        </div>
        {type !== "form" ? (
          <div className="w-fit m-auto">
            <button
              type="button"
              role="button"
              className={`rounded-3xl m-1 ${
                type === "default" ? "bg-green-600" : "bg-red-700"
              }`}
              onClick={handleOk}
            >
              <span className="text-xl ml-2 mr-2">OK</span>
            </button>
          </div>
        ) : null}
      </dialog>
    )
  );
};

export default Dialog;
