import { useState, useEffect } from "react";
import { BoardGamesApiURL, IUserProfil } from "../../interfaces/generic.def";

// const useUserProfile = async (): Promise<IUserProfil | null> => {
//   let profile = null;

//   await useEffect(() => {
//     fetch(BoardGamesApiURL.Profile, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: "Bearer  " + sessionStorage.getItem("token"),
//       },
//     })
//       .then((response) => response.json())
//       .then((response) => {
//         console.log(response);
//         profile = response;
//       });
//   }, []);

//   return profile;
// };

// const useUserProfile = () => {
//   const [status, setStatus] = useState();
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setStatus("fetching");
//       const response = await fetch(BoardGamesApiURL.Profile, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer  " + sessionStorage.getItem("token"),
//         },
//       });
//       const data = await response.json();
//       setData(data.hits);
//       setStatus("fetched");
//     };

//     fetchData();
//   }, []);

//   return { status, data };
// };

// import { useEffect, useState } from "react";

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
        // eslint-disable-next-line no-console
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
