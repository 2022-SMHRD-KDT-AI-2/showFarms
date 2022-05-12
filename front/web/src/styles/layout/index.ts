import styled from "@emotion/styled";
import { FlexColumnDiv, FlexRowDiv } from "../common";
import { agriculture, blackAndWhite } from "../../datas/color";

export const HeaderContainer = styled(FlexRowDiv)`
  border-bottom: 1px solid gray;
  background-color: rgba(255, 255, 255, 0.9);
  height: 4rem;
  align-items: center;
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export const AppContainer = styled(FlexColumnDiv)`
  overflow: scroll;
  width: 100%;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeContainer = styled(FlexColumnDiv)`
  margin-top: 6.5rem;
  width: 150rem;
`;

export const LoginContainer = styled(FlexColumnDiv)`
  height: calc(100vh - 5.5rem);
  align-items: center;
  margin-top: 5.5rem;
`;

export const PostContainer = styled(FlexColumnDiv)`
  margin-top: 7rem;
`;

export const WriteContainer = styled(FlexRowDiv)`
  margin-top: 6.5rem;
  width: 100vw;
  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MyPagesContainer = styled(FlexRowDiv)`
  margin-top: 7rem;
`;

export const MovieContainer = styled(FlexColumnDiv)`
  margin-top: 7rem;
`;

export const MapContainer = styled(FlexRowDiv)`
  margin-top: 7rem;
  width: 100vw;
  height: 92vh;
  justify-content: center;
  align-items: center;
`;

export const KaKaoMap = styled.div`
  flex-grow: 3;
  height: 90vh;
  margin: 1rem;
`;

export const ShopListContainer = styled(FlexColumnDiv)`
  flex-grow: 1;
  height: 90vh;
  margin: 1rem;
`;

export const ShopListItem = styled(FlexRowDiv)`
  width: 90%;
  margin: 0 1rem 1rem 1rem;
  height: 10rem;
  border: 1px solid ${blackAndWhite[10]};
  border-radius: 1rem;
  padding: 1rem;
`;

export const BannerContainer = styled.div`
  height: 35rem;
  background-color: gray;
  font-size: 10rem;
`;

export const CategoryContainer = styled(FlexRowDiv)`
  height: 9rem;
  margin-top: 1rem;

  > img {
    width: 7rem;
    height: 7rem;
    margin: 1rem 2rem 1rem 2rem;

    &:hover {
      width: 9rem;
      height: 9rem;
      margin: 0rem 1rem 0rem 1rem;
      cursor: pointer;
    }
  }
`;
