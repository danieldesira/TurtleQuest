import stringifyGameData from "../restoreGame/stringifyGameData";

export const login = async (credential: string) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
    method: "POST",
    headers: {
      Authorization: credential,
    },
  });
  return res.ok;
};

export const saveGame = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/game`, {
    method: "PUT",
    headers: { Authorization: localStorage.getItem("token") },
    body: stringifyGameData(),
  });
  return res.ok;
};

//export const saveScore = async () => {
//  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/points`, {
//    method: "POST",
//    headers: { Authorization: localStorage.getItem("token") },
//    body: JSON.stringify()
//  });
//  return res.ok;
//};
