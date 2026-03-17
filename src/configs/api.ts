import axios from "axios";

// TODO: get token from cookies or localStorage when authentication is implemented
const getTokenPlaceholder = () => null;

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
});

api.interceptors.request.use((config) => {
  const token = getTokenPlaceholder();

  if (token) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
