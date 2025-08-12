import GameData from "../restoreGame/GameData";

export interface Settings {
  controlPosition: "Left" | "Right";
}

export interface GetScoresResponse {
  highScores: {
    points: number;
    level: number;
    player_won: string;
    players: { name: string };
    outcomes: { desc: string };
  }[];
}

export interface Player {
  id?: number;
  external_id?: string;
  platform?: string;
  name: string;
  email: string;
  created_at?: string;
  profile_pic?: string;
  date_of_birth?: string;
  last_login_at?: string;
  settings?: Settings;
  last_game_saved_on?: number;
}

export interface LoginResponse {
  message: string;
  player: Player;
  isNewPlayer: boolean;
  lastGame?: GameData;
  personalBest?: { points: number; level: number; player_won: string } | null;
}

export interface SaveScoreRequest {
  points: number;
  level: number;
  hasWon: boolean;
}
