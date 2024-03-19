import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserContext = React.createContext();
const userAxios = axios.create();

userAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

function UserContextProvider(props) {
  const navigate = useNavigate();
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    errMsg: "",
  };

  const [userState, setUserState] = useState(initState);

  const [publicBeach, setPublicBeach] = useState([]);

  function signup(credentials) {
    axios
      .post("/auth/signup", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("verification", true);
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  function login(credentials) {
    axios
      .post("/auth/login", credentials)
      .then((res) => {
        const { user, token } = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        sessionStorage.setItem("verification", true);
        setUserState((prevUserState) => ({
          ...prevUserState,
          user,
          token,
        }));
      })
      .catch((err) => handleAuthErr(err.response.data.errMsg));
  }

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.setItem("verification", false);
    setUserState({
      user: {},
      token: "",
      errMsg: "",
    });
    navigate("/beach-card");
  }

  function handleAuthErr(errMsg) {
    setUserState((prevState) => ({
      ...prevState,
      errMsg,
    }));
  }

  function resetAuthErr() {
    setUserState((prevState) => ({
      ...prevState,
      errMsg: "",
    }));
  }

  function editAccount(id, update) {
    userAxios
      .put(`/auth/${id}`, update)
      .then((res) => {
        login(res.data);
      })
      .catch((err) => console.log(err));
  }

  function getPublicBeach() {
    userAxios
      .get("/api/userBeaches")
      .then((res) => setPublicBeach(res.data))
      .catch((err) => console.log(err));
  }

  function removeUserBeach(id) {
    userAxios
      .delete(`/api/userBeaches/${id}`)
      .then((res) => getPublicBeach())
      .catch((err) => console.log(err));
  }

  function addUserBeach(newBeach) {
    userAxios
      .post("/api/userBeaches", newBeach)
      .then((res) => {
        setPublicBeach((prev) => [...prev, res.data]);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getPublicBeach();
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        resetAuthErr,
        editAccount,
        addUserBeach,
        publicBeach,
        getPublicBeach,
        removeUserBeach,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
