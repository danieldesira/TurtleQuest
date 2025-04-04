import React, { useEffect, useState } from "react";
import { fetchScores, GetScoresResponse } from "../services/api";

const LeaderBoard = () => {
  const [scores, setScores] = useState<GetScoresResponse>();

  useEffect(() => {
    fetchScores().then((res) => setScores(res));
  }, []);

  return (
    <div className="flex flex-col gap-2 max-w-80 text-pink-600">
      {scores ? (
        <>
          <h2 className="text-center text-xl">Leaderboard</h2>
          <div className="flex flex-col gap-1">
            {scores.highScores.map((highScore) => (
              <div className="text-sm">
                {highScore.player.name} {highScore.points} Level{" "}
                {highScore.level}
              </div>
            ))}
          </div>
          <div className="text-sm">
            Your best score: {scores.personalBest.points} at level{" "}
            {scores.personalBest.level}
          </div>
        </>
      ) : (
        <>Loading scores...</>
      )}
    </div>
  );
};

export default LeaderBoard;
