import React from "react";
import {
  BackgroundImage,
  LoginBackground,
  LoginBackgroundWrapper,
  LoginButton,
  StartContainer,
} from "../../styles/layout";
import background from "../../images/background.jpeg";
import { login } from "../../datas/color";
import { loginTargetUrl } from "../../datas";
import logo from "../../images/icons/logo.png";
import { Logo } from "../../styles/element";
import Aside from "../../components/aside";

const Start = () => {
  return (
    <StartContainer>
      <BackgroundImage src={background} />
      <LoginBackground />
      <LoginBackgroundWrapper>
        <Logo src={logo} />
        {Object.keys(loginTargetUrl).map((item, index) => {
          return (
            <LoginButton
              key={index}
              value={Object.values(loginTargetUrl)[index]}
              color={Object.values(login)[index]}
            >
              {item}
            </LoginButton>
          );
        })}
      </LoginBackgroundWrapper>
    </StartContainer>
  );
};

export default Start;
