import GameData from "../restoreGame/GameData";
import {
  GetScoresResponse,
  LoginResponse,
  SaveScoreRequest,
  Settings,
  UpdatePlayerPayload,
} from "./interfaces";
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

export const saveScore = async ({ points, level, hasWon }: SaveScoreRequest) =>
  await post("api/points", {
    points,
    level,
    hasWon,
  });

export const fetchHighScores = async () =>
  await get<GetScoresResponse>("api/points");

export const deleteLastGame = async () => await del("api/game");

export const updateSettings = async (settings: Settings) =>
  await put("api/settings", settings);

export const updateProfile = async (profile: UpdatePlayerPayload) =>
  await put("api/player", profile);

export const requestLogout = async () => await post("api/logout");
