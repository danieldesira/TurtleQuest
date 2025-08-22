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
        ({ players: player, outcomes: outcome, points, level }, index) => (
          <tr key={index}>
            <td className="text-center">
              <img
                src={player.profile_pic_url}
                alt={player.name}
                className="w-8 h-8 rounded-full"
              />
            </td>
            <td className="text-center">{player.name}</td>
            <td className="text-right">{getLevelText(level)}</td>
            <td className="text-right">{points}</td>
            <td className="text-center">{outcome.desc}</td>
          </tr>
        )
      )}
    </tbody>
  </table>
);

export default ScoreTable;
