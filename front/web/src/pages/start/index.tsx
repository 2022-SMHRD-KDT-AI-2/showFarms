import React, { useEffect } from "react";
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
  const [viewButtons, , , closeButtons] = useToggleModal(true);
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
      const check =
        id !== "" &&
        passwordCheck !== "" &&
        password !== "" &&
        name !== "" &&
        lat !== 0;
      if (check) {
        axiosInstance
          .post("/users/new", {
            mb_id: id,
            mb_name: name,
            mb_pw: password,
            mb_lati: lat,
            mb_longi: long,
          })
          .then((res) => {
            if (res.data) {
              toggleLogin();
            }
          });
      } else {
        alert("?????? ????????? ??????????????????!");
      }
    };

    useEffect(() => {
      if (lat != 0) {
        alert("?????? ????????? ?????????????????????!");
      }
    }, [lat]);

    const setCoord = async () => {
      if (navigator.geolocation) {
        // ?????? ????????? ????????????
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
        alert("?????? ????????? ??????????????????!");
        return;
      }
    };

    return (
      <AddInfoContainer>
        <span>ID</span>
        <Input value={id} onChange={onChangeId} />
        <span>Password</span>
        <Input value={password} onChange={onChangePassword} type="password" />
        <span>Password Check</span>
        <Input
          value={passwordCheck}
          onChange={onChangePasswordCheck}
          type="password"
        />
        <span>Name</span>
        <Input value={name} onChange={onChangeName} />
        <div>
          <Button onClick={setCoord}>????????????</Button>
          {lat == 0 ? (
            <p>??????????????? ????????????!</p>
          ) : (
            "??????????????? ?????????????????????!"
          )}
        </div>
        <div>
          <Button onClick={toggleLogin}>To LOGIN</Button>
          <Button onClick={onSubmitSignup}>??????</Button>
        </div>
      </AddInfoContainer>
    );
  };

  const Login = () => {
    const [id, onChangeId] = useInput("");
    const [password, onChangePassword] = useInput("");
    const onSubmit = () => {
      if (id !== "" && password !== "") {
        axiosInstance
          .post("/users/login", {
            mb_id: id,
            mb_pw: password,
          })
          .then((res) => {
            if (res.data) {
              window.localStorage.setItem("lat", res.data.mb_lati);
              window.localStorage.setItem("long", res.data.mb_longi);
              window.localStorage.setItem("id", res.data.mb_id);
              nav("/main/1");
            }
          });
      } else {
        alert("?????? ????????? ??????????????????!");
      }
    };
    return (
      <AddInfoContainer>
        <span>ID</span>
        <Input value={id} onChange={onChangeId} />
        <span>Password</span>
        <Input value={password} onChange={onChangePassword} type="password" />
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
