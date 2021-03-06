import React from "react";
import { HeaderContainer } from "../../styles/layout";
import logo from "../../images/icons/logo.png";
import { Button, Input } from "../../styles/element";
import { useNavigate } from "react-router";
import useToggleModal from "../../hooks/useToggleModal";
import Write from "../../pages/write";
import Modal from "../modal";
import Table from "../../pages/table";
import useInput from "../../hooks/useInput";

const Header = () => {
  const nav = useNavigate();
  const [viewWritePage, , openWritePage, closeWritePage] = useToggleModal();
  const [viewStaticsPage, , openStaticsPage, closeStaticsPage] =
    useToggleModal();
  const [search, onChangeSearch, setSearch] = useInput("");
  const onSubmitSearch = () => {
    nav(`/search/${search}`);
  };

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      {viewWritePage && (
        <Modal
          component={<Write onCloseModal={closeWritePage} />}
          onCloseModal={closeWritePage}
        />
      )}
      {viewStaticsPage && (
        <Modal component={<Table />} onCloseModal={closeStaticsPage} />
      )}

      <HeaderContainer>
        <div>
          <img src={logo} onClick={() => nav("/main/1")} alt="" />
          <h1 onClick={() => nav("/main/1")}>Show Farms</h1>
        </div>
        <div>
          <Input value={search} onChange={onChangeSearch} width={"30rem"} />
          <Button onClick={onSubmitSearch}>{"검색"}</Button>
        </div>
        <div>
          <span onClick={() => nav("/map")}>{"주변상점"}</span>
          <span onClick={openWritePage}>{"판매글 작성"}</span>
          <span
            onClick={() => {
              openStaticsPage();
            }}
          >
            {"내역"}
          </span>
        </div>
      </HeaderContainer>
    </div>
  );
};

export default Header;
