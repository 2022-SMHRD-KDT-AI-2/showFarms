import styled from "@emotion/styled";
import { FlexColumnDiv, FlexRowDiv } from "../common";
import { agriculture, blackAndWhite } from "../../datas/color";

export const AppContainer = styled(FlexColumnDiv)`
  overflow: scroll;
  width: 100%;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeContainer = styled(FlexColumnDiv)`
  width: 1500px;
  background-color: white;
`;

export const PostContainer = styled(FlexColumnDiv)`
  img {
    height: 30rem;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 8rem;
  }

  font-size: 1.7rem;

  .size1 {
    font-size: 2.2rem;
    margin: 0.5rem;
  }
`;

export const WriteContainer = styled(FlexColumnDiv)`
  align-items: center;
  overflow: auto;
  height: 1000px;
  min-width: 1000px;

  > img {
    width: 300px;
    border-radius: 1rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 1rem;
    font-size: 2rem;
  }

  text {
    font-size: 2vh;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  > span {
    width: 80rem;
    display: flex;
    flex-direction: column;
    margin: 1vh;
    justify-content: center;
    align-items: center;

    > * {
      margin: 1vh;
    }

    text {
      width: 7rem;
    }

    > div {
      display: flex;
      flex-direction: row;
      width: 60rem;
    }
  }

  .editor {
    height: 500px;
    padding: 1rem;
    font-size: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  > div > button {
    width: 7rem;
    height: 4rem;
    font-size: 2rem;
    margin: 1rem;
  }
`;

export const MyPagesContainer = styled(FlexRowDiv)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const MovieContainer = styled(FlexRowDiv)``;

export const MapContainer = styled(FlexRowDiv)`
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const KaKaoMap = styled.div`
  width: 75vw;
  height: 99vh;
  margin: 0.5vh;
`;

export const ShopListContainer = styled(FlexColumnDiv)`
  width: 23vw;
  height: 99vh;
  margin: 0.5vh;
`;

export const ShopListItem = styled(FlexRowDiv)`
  margin: 1vh 0 1vh 0;
  border-bottom: 0.1vh solid rgba(0, 0, 0, 0.2);
  padding-bottom: 1vh;
  width: 23vw;

  &:hover {
    background-color: rgba(164, 116, 68, 0.2);
  }
`;

export const ShopItemImg = styled.img`
  margin-right: 1vw;
  height: 100%;
`;

export const ShopItemInfo = styled(FlexColumnDiv)`
  div {
    word-break: break-all;
  }

  text {
    margin: 0.3vh;
  }
`;

export const BannerContainer = styled.div`
  height: 30rem;
  width: 100vw;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  text {
    margin: 0.3vh;
  }
`;

export const CategoryContainer = styled(FlexRowDiv)`
  height: 12rem;

  > img {
    width: 10rem;
    height: 10rem;
    margin: 1rem 2rem 1rem 2rem;

    &:hover {
      width: 11rem;
      height: 11rem;
      margin: 0 1rem 0 1rem;
      cursor: pointer;
    }
  }
`;

export const StartContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  z-index: 0;
  opacity: 0.88;
  position: absolute;
`;

export const LoginBackground = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100%;
  width: 30%;
  border: none;
  z-index: 1;
  position: absolute;
  right: 0;
  opacity: 0.1;
  justify-content: center;
  align-items: center;
`;

export const LoginBackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  border: none;
  z-index: 2;
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled.button`
  width: 20rem;
  height: 5rem;
  margin: 1.5vw 0 1.5vw 0;
  background-color: ${agriculture[3]};
  border-radius: 0.5rem;
  border: none;
  color: white;
  font-size: 2.5rem;
  font-weight: bold;
`;

export const Navigator = styled.span`
  position: fixed;
  left: 0.5vw;
  top: 0.5vw;
  z-index: 100;
`;

export const TableContainer = styled.div`
  text-align: center;

  table {
    border-collapse: collapse;
  }

  th {
    font-size: 2.5rem;
    padding: 1vh;
  }

  tr {
    font-size: 2.2rem;
    border-top: 1px solid rgb(222, 222, 222);
  }

  .width1 {
    width: 15rem;
  }

  .width2 {
    width: 30rem;
  }

  .width3 {
    width: 3rem;
  }

  .width4 {
    width: 8rem;
  }
`;

export const ModalBackground = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
  margin: 0;
`;

export const ModalContainer = styled.div`
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  padding: 3rem;
  background-color: white;
  border: none;
  border-radius: 3rem;
  z-index: 6;
  overflow: auto;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: sticky;
  width: 100%;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 1rem;
  justify-content: center;

  h1 {
    font-size: 2.3rem;
    margin: 0 1.5rem 0 1.5rem;
  }

  span {
    font-size: 1.3rem;
    margin: 0 1.5rem 0 1.5rem;
    width: 7rem;
    text-align: center;

    &:hover {
      color: ${agriculture[3]};
      height: 100%;
      cursor: pointer;
    }
  }

  img {
    height: 3rem;
    margin-left: 3rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 1500px;
  }
`;

export const StartGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;

  * {
    margin: 0.5rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  button {
    width: 8rem;
  }

  p {
    color: rgba(255, 0, 0, 0.8);
  }
`;
