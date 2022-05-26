import React from "react";
import CardGrid from "../../components/cardGrid";
import {HomeContainer} from "../../styles/layout";
import {Banner} from "../../components/banner";
import Header from "../../components/header";
import axiosInstance from "../../utils/AxiosInstance";

const Home = () => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Header/>
            <Banner/>
            <HomeContainer>
                <CardGrid category={"Live"}/>
                <CardGrid category={"판매상품"}/>
            </HomeContainer>
        </div>
    );
};

export default Home;
