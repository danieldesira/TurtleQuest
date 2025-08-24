import GameData from "../restoreGame/GameData";
import {
  HighScore,
  LoginResponse,
  SaveScorePayload,
  Settings,
  UpdatePlayerPayload,
  UpdateProfilePictureResponse,
} from "./interfaces";
import Request from "./Request";

export const login = async (credential: string) =>
  (await Request.post("api/login", {
    token: credential,
    service: "google",
  })) as LoginResponse;

export const saveGame = async (data: {
  lastGame: GameData;
  timestamp: number;
}) => await Request.put("api/game", data);

export const saveScore = async ({ points, level, hasWon }: SaveScorePayload) =>
  await Request.post("api/points", {
    points,
    level,
    hasWon,
  });

export const fetchHighScores = async () =>
  await Request.get<HighScore[]>("api/high-scores");

export const deleteLastGame = async () => await Request.delete("api/game");

export const updateSettings = async (settings: Settings) =>
  await Request.put("api/settings", settings);

export const updateProfile = async (profile: UpdatePlayerPayload) =>
  await Request.put("api/player", profile);

export const requestLogout = async () => await Request.post("api/logout");

export const uploadProfilePicture = async (file: File) =>
  await Request.uploadFile<UpdateProfilePictureResponse>(
    "api/profile-pic",
    file
  );
