import stringifyGameData from "../restoreGame/stringifyGameData";
import store from "../store";

export const login = async (credential: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
    method: "POST",
    headers: {
      Authorization: credential,
      "Content-Type": "application/json",
    },
  });
  return res.ok;
};

export const saveGame = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/game`, {
    method: "PUT",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: stringifyGameData(),
  });
  return res.ok;
};

export const saveScore = async () => {
  const state = store.getState();
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/points`, {
    method: "POST",
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      points: state.turtleMonitor.turtle.xp.value,
      level: state.levels.level.value,
      hasWon: state.game.hasWon.value,
    }),
  });
  return res.ok;
};
