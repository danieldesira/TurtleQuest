import React, { ReactElement } from "react";

interface Props {
  title: string;
  content: ReactElement;
  handleOk: React.MouseEventHandler;
}

function Dialog({ title, content, handleOk }: Props) {
  const dialogJsx = (
    <div
      tabIndex={1}
      className="dialog fixed text-white w-4/5 opacity-80 focus:opacity-95 bg-gray-900 pt-5 pb-5 rounded-3xl max-w-xl"
    >
      <h1 className="text-center text-xl">{title}</h1>
      <hr />
      <div className="w-11/12 m-auto mt-3 mb-3 grid gap-3 max-h-screen-1/4 overflow-y-auto">
        {content}
      </div>
      <div className="w-fit m-auto">
        <button
          type="button"
          role="button"
          className="rounded-3xl m-1 bg-green-600"
          onClick={handleOk}
        >
          <span className="text-xl ml-2 mr-2">OK</span>
        </button>
      </div>
    </div>
  );

  return <>{title ? dialogJsx : null}</>;
}

export default Dialog;
