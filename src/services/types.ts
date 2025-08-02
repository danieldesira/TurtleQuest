import GameData from "../restoreGame/GameData";

export type Settings = {
  controlPosition: "Left" | "Right";
};

export type GetScoresResponse = {
  highScores: {
    points: number;
    level: number;
    player_won: string;
    players: { name: string };
    outcomes: { desc: string };
  }[];
  personalBest: { points: number; level: number; player_won: string } | null;
};

export type Player = {
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
};

export type LoginResponse = {
  message: string;
  player: Player;
  isNewPlayer: boolean;
  lastGame?: GameData;
};
