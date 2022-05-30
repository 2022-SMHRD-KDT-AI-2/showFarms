import React, { useState } from "react";
import { HeaderContainer, HomeContainer } from "../../styles/layout";
import logo from "../../images/icons/logo.png";
import { Button, Input } from "../../styles/element";
import { useNavigate } from "react-router";
import useToggleModal from "../../hooks/useToggleModal";
import Write from "../../pages/write";
import Modal from "../modal";
import Table from "../../pages/table";
import axiosInstance from "../../utils/AxiosInstance";
import useInput from "../../hooks/useInput";
import { IPost } from "../../types";
import CardGrid from "../cardGrid";

const Header = () => {
  const nav = useNavigate();
  const [viewWritePage, , openWritePage, closeWritePage] = useToggleModal();
  const [viewStaticsPage, , openStaticsPage, closeStaticsPage] =
    useToggleModal();
  const [search, onChangeSearch, setSearch] = useInput("");
  const [searched, setSearched] = useState<IPost[]>([]);

  const onSubmitSearch = () => {
    if (search.length >= 2) {
      axiosInstance.get(`/posts/${search}`).then((res) => {
        if (res.data) {
          setSearch("");
          setSearched(res.data);
        }
      });
    } else {
      alert("검색어는 두 글자 이상 입력해주세요!");
      setSearch("");
    }
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
      {setSearched.length > 1 ? (
        <HomeContainer>
          <CardGrid category={"검색결과"} post={searched} />
        </HomeContainer>
      ) : (
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
      )}
    </div>
  );
};

export default Header;
