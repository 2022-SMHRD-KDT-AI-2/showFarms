import React, { useCallback, useEffect, useState } from "react";
import { Button, Input, Link } from "../../styles/element";
import { HeaderContainer } from "../../styles/layout";
import useInput from "../../hooks/useInput";
import { useNavigate } from "react-router";
import { Cookies } from "react-cookie";

const Header = () => {
  const [searchTarget, onChangeSearchTarget] = useInput<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const onClickSearch = useCallback(() => {}, []);
  const nav = useNavigate();
  const cookie = new Cookies();

  useEffect(() => {
    if (cookie.get("token")) setIsLoggedIn(true);
  }, []);

  return (
    <HeaderContainer>
      <Input
        value={searchTarget}
        onChange={onChangeSearchTarget}
        width={"30rem"}
      />
      <Button onClick={onClickSearch}>Search</Button>
      {isLoggedIn ? (
        <>
          <Link onClick={() => nav("/mypages")}>MY PAGE</Link>
          <Link onClick={() => nav("/write")}>WRITE</Link>
        </>
      ) : (
        <>
          <Link onClick={() => nav("/login")}>LOGIN</Link>
          <Link onClick={() => nav("/map")}>MAP</Link>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
