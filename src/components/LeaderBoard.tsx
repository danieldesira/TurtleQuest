import React from "react";

const LeaderBoard = () => {
  return (
    <div className="flex flex-col gap-2 max-w-80 text-pink-600">
      <h2 className="text-center text-xl">Leaderboard</h2>
      <div className="flex flex-col gap-1"></div>
      <div className="text-sm">Your best score: {}</div>
    </div>
  );
};

export default LeaderBoard;
