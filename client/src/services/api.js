import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:4000",
  // withCredentials을 true해야 refreshToken cookie를 주고받을 수 있다
  withCredentials: true,
});
