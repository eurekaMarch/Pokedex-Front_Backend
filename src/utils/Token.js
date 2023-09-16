import { useState } from "react";

function useToken() {
  const saveToken = (tokenData) => {
    window.localStorage.setItem("token", JSON.stringify(tokenData));
    setToken(tokenData);
  };

  const saveUser = (saveData) => {
    window.localStorage.setItem("user", JSON.stringify(saveData));
    setUser(saveData);
  };

  const getToken = () => {
    let takeString = window.localStorage.getItem("token");
    let userString = window.localStorage.getItem("user");

    let userToken = JSON.parse(takeString);
    let userData = JSON.parse(userString);

    if (userToken) {
      return { userToken, userData };
    } else {
      return { userToken: "", userData: "" };
    }
  };

  const clearToken = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    setToken("");
    setUser("");
  };

  const [token, setToken] = useState(getToken().userToken);
  const [user, setUser] = useState(getToken().userData);

  return { token, saveToken, clearToken, user, saveUser };
}

export default useToken;
