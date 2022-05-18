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
  width: 70vw;
  background-color: white;
`;

export const PostContainer = styled(FlexColumnDiv)``;

export const WriteContainer = styled(FlexColumnDiv)`
  width: 100vw;
  overflow: scroll;
  align-items: center;

  text {
    font-size: 2vh;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  > span {
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: 1vh;

    > * {
      margin: 1vh;
    }
  }

  .editor {
    height: 80vh;
    padding: 0.5vh;
    font-size: 1.5vh;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

export const MyPagesContainer = styled(FlexRowDiv)``;

export const MovieContainer = styled(FlexColumnDiv)``;

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
    background-color: rgba(164, 116, 68, 0.4);
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
  height: 40vh;
  width: 100vw;
  text-align: center;

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
  min-width: 1600px;
  min-height: 900px;
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
  border-radius: 5%;
  height: 70%;
  width: 30%;
  border: none;
  z-index: 1;
  position: absolute;
  right: 10%;
  opacity: 0.3;
  justify-content: center;
  align-items: center;
`;

export const LoginBackgroundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5%;
  height: 70%;
  width: 30%;
  border: none;
  z-index: 2;
  position: absolute;
  right: 10%;
  justify-content: center;
  align-items: center;
`;

export const LoginButton = styled.button`
  width: 60%;
  height: 10%;
  margin: 1.5vw 0 1.5vw 0;
  background-color: ${(props) => props.color};
  border-radius: 0.5rem;
  border: none;
  color: white;
  font-size: 1.7vw;
  font-weight: bold;
`;

export const Navigator = styled.span`
  position: fixed;
  left: 1vw;
  top: 1vw;
  z-index: 100;
`;
