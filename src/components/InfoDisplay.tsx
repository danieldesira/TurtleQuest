import React from "react";

type Props = {
  title: string;
  content: React.ReactElement;
};

const InfoDisplay = ({ title, content }: Props) => {
  return (
    <div className="bg-pink-600 opacity-80 hover:opacity-100 transition-opacity text-white p-2 rounded-sm gap-20">
      <h2 className="text-lg">{title}</h2>
      <div className="overflow-auto max-h-[25vh]">{content}</div>
    </div>
  );
};

export default InfoDisplay;
