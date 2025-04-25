import React from "react";
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
          <td>{highScore.players.name}</td>
          <td>{highScore.level}</td>
          <td>{highScore.points}</td>
          <td>{highScore.outcomes.desc}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ScoreTable;
