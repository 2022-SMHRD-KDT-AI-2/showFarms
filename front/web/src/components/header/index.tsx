import React, { useEffect, useState } from "react";
import { HeaderContainer } from "../../styles/layout";
import logo from "../../images/icons/logo.png";
import { Button, Input } from "../../styles/element";
import { useNavigate } from "react-router";
import useToggleModal from "../../hooks/useToggleModal";
import Write from "../../pages/write";
import Pages from "../../pages/Pages";
import Modal from "../modal";
import Table from "../../pages/Pages/table";
import axiosInstance from "../../utils/AxiosInstance";
import useInput from "../../hooks/useInput";

interface ITable {
  no: number;
  date: Date;
  title: string;
  seller: string;
  buyer: string;
  amount: number;
  price: number;
}

const Header = () => {
  const nav = useNavigate();
  const [viewWritePage, , openWritePage, closeWritePage] = useToggleModal();
  const [viewStaticsPage, , openStaticsPage, closeStaticsPage] =
    useToggleModal();
  const [tableData, setTableData] = useState<ITable[]>([]);
  const [search, onChangeSearch] = useInput("");
  const getTableData = () => {
    axiosInstance.get("/trade/test").then((res) => {
      setTableData(res.data);
    });
  };
  const onSubmitSearch = () => {
    axiosInstance.get(`/posts/${search}`).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <HeaderContainer>
        <div>
          <div>
            <img src={logo} onClick={() => nav("/main")} alt="" />
            <h1 onClick={() => nav("/main")}>Show Farms</h1>
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
                getTableData();
              }}
            >
              {"내역"}
            </span>
          </div>
        </div>
      </HeaderContainer>
      {viewWritePage && (
        <Modal
          component={<Write onCloseModal={closeWritePage} />}
          onCloseModal={closeWritePage}
        />
      )}
      {viewStaticsPage && (
        <Modal
          component={<Table data={tableData} />}
          onCloseModal={closeStaticsPage}
        />
      )}
    </div>
  );
};

export default Header;
