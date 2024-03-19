import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DataContext = React.createContext();

function DataContextProvider(props) {
  const navigate = useNavigate();
  const [random, setRandom] = useState({
    beaches: [
      {
        idBeach: "",
        strBeach: "",
      },
    ],
  });

  function getRandom() {
    axios
      .get(`'http://localhost:9000/api/userBeaches`)
      .then((response) => {
        setRandom(response.data);
        console.log(response.data.beaches);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getRandom();
  }, []);

  const [params, setParams] = useState({ category: "default", keyword: "" });
  const [searchResults, setSearchResults] = useState([]);
 
 
  const [navPath, setNavPath] = useState("");
  const [navKey, setNavKey] = useState("");
  useEffect(() => {
    switch (params.category) {
      case "name":
        setNavPath("search");
        setNavKey("s");
        break;
      case "beaches":
        setNavPath("filter");
        setNavKey("i");
        break;
      case "alge":
        setParams((prevParams) => {
          return {
            ...prevParams,
            keyword: "Alge",
          };
        });
        setNavPath("filter");
        setNavKey("a");
        break;
      default:
        setNavPath("");
        setNavKey("");
        break;
    }
  }, [params.category]);

  function search(userInput) {
    axios
      .get(
        `'http://localhost:9000/api/userBeaches/v1/1/${navPath}.php?${navKey}=${userInput.keyword}`
      )
      .then((response) => {
        setSearchResults(response.data.beaches);
        console.log(response.data.beaches);
      })
      .catch((error) => console.log(error));
  }

  const [beachList, setBeachList] = useState([]);

  function lookup(selected) {
    axios
      .get(
        `'http://localhost:9000/api/userBeaches/v1/1/lookup.php?i=${selected}`
      )
      .then((response) =>
        setBeachList((prevList) =>
          prevList
            ? [...prevList, response.data.beaches[0]]
            : [response.data.beaches[0]]
        )
      )
      .catch((error) => console.log(error));
  }

  function updateBeachList(id) {
    beachList &&
      beachList.some((beach) => beach.idBeach === id) &&
      setBeachList((prevList) =>
        prevList.filter((beach) => beach.idBeach !== id)
      );
  }

  const [beach, setBeach] = useState({});

  const details = useCallback((selected) => {
    axios
      .get(
        `'http://localhost:9000/api/userBeaches/v1/1/lookup.php?i=${selected}`
      )
      .then((response) => setBeach(response.data.beaches[0]));
  }, []);

  function saveBeach(id) {
    console.log(id);
    lookup(id);
  }

  function removeBeach(id) {
    setBeachList(beachList.filter((beach) => beach.idBeach !== id));
  }

  useEffect(() => {
    localStorage && setBeachList(JSON.parse(localStorage.getItem("beachList")));
  }, []);

  useEffect(() => {
    localStorage.setItem("beachList", JSON.stringify(beachList));
    console.log(beachList);
  }, [beachList]);

  const [verification, setVerification] = useState(false);

  useEffect(() => {
    sessionStorage &&
      setVerification(JSON.parse(sessionStorage.getItem("verification")));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionStorage]);

  useEffect(() => {
    sessionStorage.setItem("verification", JSON.stringify(verification));
  }, [verification]);

  function redirect() {
    verification !== true && navigate("/");
  }

  return (
    <DataContext.Provider
      value={{
        random,
        setRandom,
        getRandom,
        params,
        setParams,
        searchResults,
        setSearchResults,
        search,
        lookup,
        beach,
        details,
        saveBeach,
        beachList,
        removeBeach,
        verification,
        setVerification,
        redirect,
        updateBeachList,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContext, DataContextProvider };
