import styled from "@emotion/styled";
import { FlexColumnDiv, FlexRowDiv } from "../common";

export const HeaderContainer = styled(FlexRowDiv)`
  //box-shadow: rgba(0, 0, 0, 0.3) 0px 3px 10px;
  border-bottom: 1px solid gray;
  background-color: white;
  height: 3.5rem;
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

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeContainer = styled(FlexColumnDiv)`
  margin-top: 6.5rem;
`;

export const LoginContainer = styled(FlexColumnDiv)`
  height: calc(100vh - 5.5rem);
  //justify-content: center;
  align-items: center;
  margin-top: 5.5rem;
`;

export const PostContainer = styled(FlexColumnDiv)`
  margin-top: 7rem;
`;

export const WriteContainer = styled(FlexColumnDiv)`
  margin-top: 6.5rem;
  height: calc(100vh - 6.5rem);
  width: 100vw;
`;

export const MyPagesContainer = styled(FlexColumnDiv)`
  margin-top: 7rem;
`;

export const MovieContainer = styled(FlexColumnDiv)`
  margin-top: 7rem;
`;

export const MapContainer = styled.div`
  margin-top: 7rem;
  width: 70vw;
  height: 85vh;
`;
