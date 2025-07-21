import store from "../store";
import { GetScoresResponse, LoginResponse, Player, Settings } from "./types";
import { get } from "./utils";

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

export const saveGame = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/game`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: localStorage.getItem("lastGame")!,
    });
    return res.ok;
  } else {
    return false;
  }
};

export const saveScore = async () => {
  const token = localStorage.getItem("token");
  if (token) {
    const state = store.getState();
    const hasWon = state.levels.level.value > 2;
    const res = await fetch(`${import.meta.env.VITE_API_URL}/api/points`, {
      method: "POST",
      headers: {
        Authorization: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        points: state.turtleMonitor.turtle.xp.value,
        level: state.levels.level.value,
        hasWon,
      }),
    });
    return res.ok;
  } else {
    return false;
  }
};

export const fetchScores = async () =>
  await get<GetScoresResponse>(`api/points`);

export const deleteLastGame = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/game`, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  });
  return res.ok;
};

export const updateSettings = async (settings: Settings) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/settings`, {
    method: "PUT",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(settings),
  });
  return await res.json();
};

export const updateProfile = async (profile: Player) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/player`, {
    method: "PUT",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify(profile),
  });
  return await res.json();
};
