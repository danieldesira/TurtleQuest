import { useState } from "react";
import { fetchHighScores } from "../../services/api";
import { GetScoresResponse } from "../../services/interfaces";
import Dialog from "../dialog/Dialog";
import ScoreTable from "./ScoreTable";
import { useDispatch, useSelector } from "react-redux";
import { updateDialogContent } from "../../features/dialogs/dialogReducer";
import RootState from "../../features/RootState";
import { getLevelText } from "../../levels/levels";

const LeaderBoard = () => {
  const dispatch = useDispatch();

  const [scores, setScores] = useState<GetScoresResponse>();
  const [showScoresDialog, setShowScoresDialog] = useState<boolean>(false);
  const personalBest = useSelector(
    (state: RootState) => state.game.personalBest.value
  );

  const fetchScores = async () => {
    try {
      setScores(await fetchHighScores());
    } catch {
      dispatch(
        updateDialogContent({
          dialog: {
            title: "High Scores",
            text: ["Error fetching high scores :( Please try again later"],
            type: "error",
          },
        })
      );
    }
  };

  const handleViewScores = async () => {
    await fetchScores();
    setShowScoresDialog(true);
  };

  const closeHighScores = () => setShowScoresDialog(false);

  return (
    <div className="flex flex-col gap-1">
      <div className="text-sm">
        {personalBest?.points ? (
          <>
            Your best score: {personalBest.points} at level{" "}
            {getLevelText(personalBest.level)}
          </>
        ) : (
          <>Go make a name for yourself. Start a new game!</>
        )}
      </div>
      <button
        type="button"
        role="button"
        className="bg-slate-950 hover:bg-slate-800 transition-colors duration-500 rounded-sm p-1 text-white font-semibold"
        onClick={handleViewScores}
      >
        View High Scores
      </button>
      {showScoresDialog && (
        <Dialog title="High Scores" handleOk={closeHighScores}>
          <ScoreTable scores={scores} />
        </Dialog>
      )}
    </div>
  );
};

export default LeaderBoard;
