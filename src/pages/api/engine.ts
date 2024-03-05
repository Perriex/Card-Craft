import { useState } from "react";

import axios from "axios";

type ApiMethodType = "GET" | "POST" | "PUT" | "DELETE";

export const engine = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 2500,
  headers: { "Content-Type": "application/json" },
});

const useFetchAPI = (
  url: string,
  method: ApiMethodType = "GET",
  payload?: unknown
) => {
  const [loading, setLoading] = useState(false);

  async function callback() {
    try {
      setLoading(true);
      const result = await engine({
        method,
        url,
        data: payload,
      }).finally(() => setLoading(false));
      return result.data;
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  return { loading, callback };
};

export default useFetchAPI;
