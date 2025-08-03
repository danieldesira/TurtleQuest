import { GetScoresResponse } from "../../services/types";

type Props = { scores: GetScoresResponse };

const ScoreTable = ({ scores }: Props) => (
  <table className="border-separate border-spacing-1">
    <thead className="text-sm">
      <tr>
        <th>Player</th>
        <th>Level</th>
        <th>Points</th>
        <th>Outcome</th>
      </tr>
    </thead>
    <tbody className="text-xs">
      {scores.highScores.map((highScore, index) => (
        <tr key={index}>
          <td className="text-center">{highScore.players.name}</td>
          <td className="text-right">{highScore.level}</td>
          <td className="text-right">{highScore.points}</td>
          <td className="text-center">{highScore.outcomes.desc}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ScoreTable;
