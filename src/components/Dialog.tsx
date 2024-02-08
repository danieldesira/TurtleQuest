import React, { useState } from "react";

interface Props {
  title: string;
  text: string[];
}

function Dialog({ title, text }: Props) {
  const [show, setShow] = useState<boolean>(true);

  const handleOk = () => setShow(false);

  const dialogJsx = (
    <div
      tabIndex={1}
      className="dialog fixed text-white w-4/5 opacity-80 focus:opacity-95 bg-amber-500 dark:bg-gray-900 pt-5 pb-5 rounded-3xl max-w-xl"
    >
      <h1 className="text-center text-xl">{title}</h1>
      <hr />
      <div className="w-11/12 m-auto mt-3 mb-3 grid gap-3 max-h-screen-1/4 overflow-y-auto">
        {text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="w-fit m-auto">
        <button
          type="button"
          className="rounded-3xl m-1 cursor-pointer bg-theme-color dark:bg-dark-theme-color"
          onClick={handleOk}
        >
          <span className="text-xl ml-2 mr-2">OK</span>
        </button>
      </div>
    </div>
  );

  return <>{show ? dialogJsx : null}</>;
}

export default Dialog;
