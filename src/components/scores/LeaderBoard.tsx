import React, { useEffect, useState } from "react";
import { fetchScores } from "../../services/api";
import { GetScoresResponse } from "../../services/types";
import ScoreTable from "./ScoreTable";

const LeaderBoard = () => {
  const [scores, setScores] = useState<GetScoresResponse>();

  useEffect(() => {
    fetchScores().then((res) => setScores(res));
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {scores ? (
        <>
          <ScoreTable scores={scores} />
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
