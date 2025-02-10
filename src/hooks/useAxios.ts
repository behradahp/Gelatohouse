import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axios";
import { AxiosRequestConfig } from "axios";

export const useAxios = <TAxiosConfig, TResponse>({
  ...props
}: AxiosRequestConfig<TAxiosConfig>) => {
  const [data, setData] = useState<TResponse>();
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axiosInstance
      .request({ ...props })
      .then((res) => res)
      .then((data) => setData(data.data as TResponse))
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isError, isLoading };
};
