import { useState, useEffect } from "react";
import { BoardGamesApiURL, IUserProfil } from "../../interfaces/generic.def";

interface IUseDataApi<T> {
  data: T;
  isLoading: boolean;
  isError: boolean;
}

const useUserProfile = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    let componentUnmounted = false;

    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await fetch(BoardGamesApiURL.Profile, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer  " + sessionStorage.getItem("token"),
          },
        });
        const data = await response.json();

        if (!componentUnmounted) setData(data);
      } catch (error) {
        setIsError(true);

        console.error(
          `Error appeared during ${BoardGamesApiURL.Profile} data fetching`,
          error
        );
      }

      setIsLoading(false);
    };

    fetchData();

    return () => {
      componentUnmounted = true;
    };
  }, []);

  return { data, isLoading, isError };
};

export default useUserProfile;
