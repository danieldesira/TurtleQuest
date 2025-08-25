import { getLevelText } from "../../levels/levels";
import { HighScore } from "../../services/interfaces";

type Props = { highScores: HighScore[] };

const ScoreTable = ({ highScores }: Props) => (
  <table className="border-separate border-spacing-1">
    <thead className="text-sm">
      <tr>
        <th>Avatar</th>
        <th>Player</th>
        <th>Level</th>
        <th>Points</th>
        <th>Outcome</th>
      </tr>
    </thead>
    <tbody className="text-xs">
      {highScores.map(
        (
          { playerName, playerProfilePicUrl, level, points, outcome },
          index
        ) => (
          <tr key={index}>
            <td className="flex justify-center">
              <img
                src={playerProfilePicUrl}
                alt={playerName}
                className="w-8 h-8 rounded-full"
              />
            </td>
            <td className="text-center">{playerName}</td>
            <td className="text-right">{getLevelText(level)}</td>
            <td className="text-right">{points}</td>
            <td className="text-center">{outcome}</td>
          </tr>
        )
      )}
    </tbody>
  </table>
);

export default ScoreTable;
