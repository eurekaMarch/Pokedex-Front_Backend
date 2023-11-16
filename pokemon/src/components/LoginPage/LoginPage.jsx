import { useState } from "react";
import { pokemonUser } from "../../utils/Axios";
import FormLogin from "./FormLogin";
import FormRegister from "./FormRegister";
import { Alert } from "antd";

const DEFAULT_ALERT = {
  text: "",
  type: "info",
};

function LoginPage(prop) {
  const { saveToken, saveUser } = prop;

  const [state, setState] = useState("login");
  const [alertData, setAlertData] = useState(DEFAULT_ALERT);

  const onSetStagePage = (page) => {
    onClearError();
    setState(page);
  };

  const onRegister = async (data) => {
    console.log(data);
    const response = await pokemonUser.post(`register`, data);
    console.log("data", response);
    if (response.data.success) {
      setAlertData({
        text: "REGISTER SUCCESSFUL",
        type: "success",
      });
    } else {
      setAlertData({
        text: response.data.data,
        type: "error",
      });
    }
  };

  const onLogin = async (data) => {
    console.log(data);
    const response = await pokemonUser.post(`login`, data);
    console.log("response", response);
    if (response.data.success) {
      onClearError();
      saveToken(response.data.token);
      saveUser(response.data.data[0]);
    } else {
      setAlertData({
        text: response.data.data,
        type: "error",
      });
    }
  };

  const onClearError = () => {
    setAlertData(DEFAULT_ALERT);
  };

  return (
    <div>
      {alertData.text && (
        <div>
          <Alert message={alertData.text} type={alertData.type} />
        </div>
      )}
      {state === "login" && (
        <FormLogin
          onSetStagePage={onSetStagePage}
          onLogin={onLogin}
          onClearError={onClearError}
        />
      )}

      {state === "register" && (
        <FormRegister
          onSetStagePage={onSetStagePage}
          onRegister={onRegister}
          onClearError={onClearError}
        />
      )}
    </div>
  );
}

export default LoginPage;
