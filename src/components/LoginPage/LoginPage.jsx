import { useState } from "react";
import FormLogin from "./Formlogin";
import FormRegister from "./FormRegister";

function LoginPage() {
  const [state, setState] = useState("login");

  const onSetStagePage = (page) => {
    setState(page);
  };

  const onRegister = (data) => {
    console.log(data);
  };

  return (
    <div>
      {state === "login" && <FormLogin onSetStagePage={onSetStagePage} />}

      {state === "register" && (
        <FormRegister onSetStagePage={onSetStagePage} onRegister={onRegister} />
      )}
    </div>
  );
}

export default LoginPage;
