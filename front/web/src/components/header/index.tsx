import React, {useEffect, useState} from "react";
import {HeaderContainer} from "../../styles/layout";
import logo from "../../images/icons/logo.png"
import {Button, Input} from "../../styles/element";
import {useNavigate} from "react-router";
import useToggleModal from "../../hooks/useToggleModal";
import Write from "../../pages/write";
import Pages from "../../pages/Pages";
import Modal from "../modal";

const Header = () => {
    const nav = useNavigate()
    const [viewWritePage, , openWritePage, closeWritePage] = useToggleModal()
    const [viewStaticsPage, , openStaticsPage, closeStaticsPage] = useToggleModal()

    return (
        <div style={{
            width: "100%"
        }}>
            <HeaderContainer>
                <div>
                    <div>
                        <img src={logo} onClick={() => nav('/main')} alt=""/>
                        <h1 onClick={() => nav('/main')}>Show Farms</h1>
                    </div>
                    <div>
                        <Input width={"30rem"}/>
                        <Button>{"검색"}</Button>
                    </div>
                    <div>
                        <span onClick={() => nav('/map')}>{"주변상점"}</span>
                        <span onClick={openWritePage}>{"판매글 작성"}</span>
                        <span onClick={openStaticsPage}>{"내역"}</span>
                    </div>

                </div>
            </HeaderContainer>
            {
                viewWritePage &&
                <Modal component={<Write onCloseModal={closeWritePage}/>} onCloseModal={closeWritePage}/>
            }
            {
                viewStaticsPage && <Modal component={<Pages/>} onCloseModal={closeStaticsPage}/>
            }
        </div>

    )
}

export default Header