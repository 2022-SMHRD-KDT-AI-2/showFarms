import React, { useCallback } from "react";
import { Button, Input } from "../../styles/element";
import { HeaderContainer } from "../../styles/layout";
import useInput from "../../hooks/useInput";

const Header = () => {
  const [searchTarget, onChangeSearchTarget] = useInput("");
  const onClickSearch = useCallback(() => {}, []);
  return (
    <HeaderContainer>
      <Input value={searchTarget} onChange={onChangeSearchTarget} />
      <Button onClick={onClickSearch}>Search</Button>
    </HeaderContainer>
  );
};

export default Header;
