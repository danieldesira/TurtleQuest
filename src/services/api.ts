import { hasPlayerWon } from "../levels/levels";
import GameData from "../restoreGame/GameData";
import store from "../store";
import { GetScoresResponse, LoginResponse, Player, Settings } from "./types";
import { del, get, post, put } from "./utils";

export const login = async (credential: string) =>
  (await post("api/login", {
    token: credential,
    service: "google",
  })) as LoginResponse;

export const saveGame = async (data: {
  lastGame: GameData;
  timestamp: number;
}) => await put("api/game", data);

export const saveScore = async () =>
  await post("api/points", {
    points: store.getState().turtleMonitor.turtle.xp.value,
    level: store.getState().levels.level.value,
    hasWon: hasPlayerWon(store.getState().levels.level.value),
  });

export const fetchHighScores = async () =>
  await get<GetScoresResponse>("api/points");

export const deleteLastGame = async () => await del("api/game");

export const updateSettings = async (settings: Settings) =>
  await put("api/settings", settings);

export const updateProfile = async (profile: Player) =>
  await put("api/player", profile);

export const revokeJwt = async () => await post("api/logout");
