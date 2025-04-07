import React from "react";

type Props = {
  content: React.ReactElement;
};

const InfoDisplay = ({ content }: Props) => {
  return (
    <div className="bg-pink-600 opacity-80 hover:opacity-100 transition-opacity text-white p-5 rounded-sm">
      {content}
    </div>
  );
};

export default InfoDisplay;
