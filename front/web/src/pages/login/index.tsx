import React, { useCallback } from "react";
import { LoginContainer } from "../../styles/layout";
import { Button, GridBox } from "../../styles/common";
import { loginTargetUrl } from "../../datas";

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
            <Button
              key={index}
              value={Object.values(loginTargetUrl)[index]}
              onClick={onClickLoginButton}
            >
              {item}
            </Button>
          );
        })}
      </GridBox>
    </LoginContainer>
  );
};

export default Login;
