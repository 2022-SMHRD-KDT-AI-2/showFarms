import React, { useCallback } from "react";
import { LoginContainer } from "../../styles/layout";
import { GridBox, LoginButton } from "../../styles/common";
import { loginTargetUrl } from "../../datas";
import { login } from "../../datas/color";

const Login = () => {
  const onClickLoginButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      console.log(e.currentTarget.value);
    },
    []
  );
  return (
    <LoginContainer>
      <GridBox>
        {Object.keys(loginTargetUrl).map((item, index) => {
          return (
            <LoginButton
              key={index}
              value={Object.values(loginTargetUrl)[index]}
              onClick={onClickLoginButton}
              color={Object.values(login)[index]}
            >
              {item}
            </LoginButton>
          );
        })}
      </GridBox>
    </LoginContainer>
  );
};

export default Login;
