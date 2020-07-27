import React, { useEffect, useRef } from "react";
import { fetchStatus } from "./utils";

function useGetCountries(dispatch) {
  let countriesArray = useRef(null);
  useEffect(() => {
    async function getCountries() {
      try {
        dispatch({ type: "FETCH_STARTED" });
        /* const res = await fetch("https://restcountries-v1.p.rapidapi.com/all", {
          headers: {
            "x-rapidapi-host": "restcountries-v1.p.rapidapi.com",
            "x-rapidapi-key":
              "f72561f52bmsh3b3732be6bd8c0bp171318jsn7831e4e26be9",
            useQueryString: true
          }
        }); */
        if (countriesArray.current === null) {
          const res = await fetch("https://restcountries.eu/rest/v2/all");
          countriesArray.current = await res.json();
        }
        dispatch({
          type: "FETCH_SUCCEDED",
          countriesArray: countriesArray.current
        });
      } catch (error) {
        dispatch({ type: "FETCH_FAILED" });
      }
    }
    getCountries();
  }, []);
}
export { fetchStatus, useGetCountries };
