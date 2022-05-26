import React, { useCallback, useEffect, useState } from "react";
import {
  AddInfoContainer,
  BackgroundImage,
  LoginBackground,
  LoginBackgroundWrapper,
  LoginButton,
  StartContainer,
  StartGrid,
} from "../../styles/layout";
import background from "../../images/background.jpeg";
import logo from "../../images/icons/logo.png";
import { Button, Input, Logo } from "../../styles/element";
import useToggleModal from "../../hooks/useToggleModal";
import useInput from "../../hooks/useInput";
import axiosInstance from "../../utils/AxiosInstance";
import { useNavigate } from "react-router";

const Start = () => {
  const [viewButtons, , openButtons, closeButtons] = useToggleModal(true);
  const [viewLogin, , openLogin, closeLogin] = useToggleModal();
  const [viewSignup, , openSignup, closeSignup] = useToggleModal();
  const nav = useNavigate();

  const toggleLogin = () => {
    closeButtons();
    closeSignup();
    openLogin();
  };

  const toggleSignup = () => {
    closeButtons();
    openSignup();
    closeLogin();
  };

  const Buttons = () => {
    return (
      <StartGrid>
        <Logo src={logo} />
        <LoginButton onClick={toggleLogin}>LOGIN</LoginButton>
        <LoginButton onClick={toggleSignup}>SIGNUP</LoginButton>
      </StartGrid>
    );
  };

  const Signup = () => {
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    const [passwordCheck, onChangePasswordCheck] = useInput("");
    const [name, onChangeName] = useInput("");
    const [lat, , setLat] = useInput(0);
    const [long, , setLong] = useInput(0);

    const onSubmitSignup = () => {
      axiosInstance
        .post("/users/new", {
          mb_id: id,
          mb_name: name,
          mb_pw: password,
          mb_lati: lat,
          mb_longi: long,
        })
        .then((res) => {
          console.log(res.data);
          //if (res.data) toggleLogin();
        });
    };

    useEffect(() => {
      if (lat != 0) {
        alert("위치 저장이 완료되었습니다!");
      }
    }, [lat]);

    const setCoord = async () => {
      if (navigator.geolocation) {
        // 위치 권한을 허용하면
        await navigator.geolocation.getCurrentPosition(
          function (position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
          },
          function (error) {
            console.error(error);
          },
          {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: Infinity,
          }
        );
      } else {
        alert("위치 설정을 허용해주세요!");
        return;
      }
    };

    return (
      <AddInfoContainer>
        <text>ID</text>
        <Input value={id} onChange={onChangeId} />
        <text>Password</text>
        <Input value={password} onChange={onChangePassword} />
        <text>Password Check</text>
        <Input value={passwordCheck} onChange={onChangePasswordCheck} />
        <text>Name</text>
        <Input value={name} onChange={onChangeName} />
        <div>
          <Button onClick={setCoord}>위치등록</Button>
          {lat == 0 ? (
            <p>위치등록을 해주세요!</p>
          ) : (
            "위치등록이 완료되었습니다!"
          )}
        </div>
        <div>
          <Button onClick={toggleLogin}>To LOGIN</Button>
          <Button onClick={onSubmitSignup}>등록</Button>
        </div>
      </AddInfoContainer>
    );
  };

  const Login = () => {
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    const onSubmit = () => {
      axiosInstance
        .post("/users/login", {
          mb_id: id,
          mb_pw: password,
        })
        .then((res) => {
          console.log(res);
          //if (res.data) nav("/main");
        });
    };
    return (
      <AddInfoContainer>
        <text>ID</text>
        <Input value={id} onChange={onChangeId} />
        <text>Password</text>
        <Input value={password} onChange={onChangePassword} />
        <div>
          <Button onClick={toggleSignup}>To SIGNUP</Button>
          <Button onClick={onSubmit}>LOGIN</Button>
        </div>
      </AddInfoContainer>
    );
  };

  return (
    <StartContainer>
      <BackgroundImage src={background} />
      <LoginBackground />
      <LoginBackgroundWrapper>
        {viewButtons && <Buttons />}
        {viewLogin && <Login />}
        {viewSignup && <Signup />}
      </LoginBackgroundWrapper>
    </StartContainer>
  );
};

export default Start;
