import React, { useEffect, useState } from "react";
import { fetchScores, GetScoresResponse } from "../services/api";

const LeaderBoard = () => {
  const [scores, setScores] = useState<GetScoresResponse>();

  useEffect(() => {
    fetchScores().then((res) => setScores(res));
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {scores ? (
        <>
          <h2 className="text-center text-xl">Leaderboard</h2>
          <table className="border-separate border-spacing-4">
            <thead className="text-lg">
              <th>Player</th>
              <th>Level</th>
              <th>Points</th>
              <th>Outcome</th>
            </thead>
            <tbody className="text-sm">
              {scores.highScores.map((highScore, index) => (
                <tr key={index}>
                  <td>{highScore.players.name}</td>
                  <td>{highScore.level}</td>
                  <td>{highScore.points}</td>
                  <td>{highScore.outcomes.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-sm">
            {scores.personalBest ? (
              <>
                Your best score: {scores.personalBest.points} at level{" "}
                {scores.personalBest.level}
              </>
            ) : (
              <>Go make a name for yourself. Start a new game!</>
            )}
          </div>
        </>
      ) : (
        <>Loading scores...</>
      )}
    </div>
  );
};

export default LeaderBoard;
