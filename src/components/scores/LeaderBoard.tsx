import React, { useEffect, useState } from "react";
import { fetchScores } from "../../services/api";
import { GetScoresResponse } from "../../services/types";
import Dialog from "../dialog/Dialog";
import ScoreTable from "./ScoreTable";

const LeaderBoard = () => {
  const [scores, setScores] = useState<GetScoresResponse>();
  const [showScoresDialog, setShowScoresDialog] = useState<boolean>(false);

  const handleViewScores = () => setShowScoresDialog(true);

  const closeHighScores = () => setShowScoresDialog(false);

  useEffect(() => {
    fetchScores().then((res) => setScores(res));
  }, []);

  return (
    <div className="flex flex-col gap-1">
      {scores ? (
        <>
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
          <button type="button" onClick={handleViewScores}>
            View High Scores
          </button>
          {showScoresDialog && (
            <Dialog title="High Scores" handleOk={closeHighScores}>
              <ScoreTable scores={scores} />
            </Dialog>
          )}
        </>
      ) : (
        <>Loading scores...</>
      )}
    </div>
  );
};

export default LeaderBoard;
