import { logout } from "../features/authentication/authenticationReducer";
import store from "../store";

type ContentType = "application/json" | "multipart/form-data";

const processPayload = (payload: unknown, contentType: ContentType) => {
  if (!payload) {
    return null;
  }

  if (contentType === "multipart/form-data" && payload instanceof File) {
    return payload;
  }

  return JSON.stringify(payload);
};

const request = async <T>(
  url: string,
  method: string,
  payload: unknown = null,
  contentType: ContentType = "application/json"
) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/${url}`, {
    method,
    headers: {
      "Content-Type": contentType,
    },
    body: processPayload(payload, contentType),
    credentials: "include",
  });
  if (res.ok) {
    return res.status === 204 ? null : ((await res.json()) as T);
  } else {
    if (res.status === 401) {
      store.dispatch(logout());
    }
    throw new Error(
      `Request error: ${url}: ${res.status}: ${JSON.stringify(
        await res.text()
      )}`
    );
  }
};

const Request = {
  async get<T>(url: string) {
    return await request<T>(url, "get");
  },
  async post<T>(url: string, body: unknown = null) {
    return await request<T>(url, "post", body);
  },
  async put<T>(url: string, body: unknown) {
    return await request<T>(url, "put", body);
  },
  async delete<T>(url: string) {
    return await request<T>(url, "delete");
  },
  async uploadFile<T>(url: string, file: File) {
    return await request<T>(url, "put", file, "multipart/form-data");
  },
};

export default Request;
