import { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosGet(url) {
  const [request, setrequest] = useState({
    loading: false,
    data: null,
    error: false,
  });

  useEffect(() => {
    setrequest({
      loading: true,
      data: null,
      error: false,
    });
    axios
      .get(url)
      .then((response) => {
        setrequest({
          loading: false,
          data: response.data,
          error: false,
        });
      })
      .catch(() => {
        setrequest({
          loading: false,
          data: null,
          error: true,
        });
      });
  }, [url]);

  return request;
}
