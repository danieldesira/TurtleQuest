import GameData from "../restoreGame/GameData";
import store from "../store";
import { GetScoresResponse, LoginResponse, Player, Settings } from "./types";
import { del, get, post, put } from "./utils";

export const login = async (credential: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
    method: "POST",
    headers: {
      Authorization: credential,
      "Content-Type": "application/json",
    },
  });
  const data = (await res.json()) as LoginResponse;
  return data;
};

export const saveGame = async (data: {
  lastGame: GameData;
  timestamp: number;
}) => await put("api/game", data);

export const saveScore = async () =>
  await post("api/points", {
    points: store.getState().turtleMonitor.turtle.xp.value,
    level: store.getState().levels.level.value,
    hasWon: store.getState().levels.level.value > 2,
  });

export const fetchHighScores = async () =>
  await get<GetScoresResponse>("api/points");

export const deleteLastGame = async () => await del("api/game");

export const updateSettings = async (settings: Settings) =>
  await put("api/settings", settings);

export const updateProfile = async (profile: Player) =>
  await put("api/player", profile);
