import styled from "@emotion/styled";
import { FlexColumnDiv, FlexRowDiv } from "../common";
import { agriculture } from "../../datas/color";

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  color: black;
  background-color: white;
  padding: 1vh;
  height: 5vh;
  font-size: 2.5vh;
  line-height: 1.33333333;
  width: ${(props) => props.width};
`;

export const Button = styled.button`
  border-radius: 0.5vh;
  height: 5vh;
  width: 5vw;
  text-align: center;
  margin-left: 0.3vh;
  color: white;
  font-weight: 1;
  font-size: 2.5vh;
  background-color: rgb(164, 203, 115);
  border: 1px solid ${agriculture[1]};

  &:hover {
    background-color: ${agriculture[1]};
    color: white;
    font-weight: bold;
  }
`;

export const ButtonSecond = styled.button`
  border-radius: 0.5rem;
  height: 5vh;
  width: 5vw;
  text-align: center;
  margin-left: 5px;
  color: white;
  font-weight: 1;
  font-size: 3rem;
  background-color: ${agriculture[0]};
  border: 1px solid ${agriculture[1]};

  &:hover {
    border: none;
    background-color: ${agriculture[1]};
    color: white;
    font-weight: bold;
  }
`;

export const CardContainer = styled(FlexColumnDiv)`
  width: 12vw;
  margin: 1vh;

  text {
    margin: 0.3vh;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  height: 30vh;
`;

export const CardHeader = styled.text`
  font-size: 2vh;
  font-weight: 1;
`;

export const CardContents = styled.text`
  font-size: 1.5vh;
  text-overflow: ellipsis;
`;
export const CardGridContainer = styled(FlexColumnDiv)`
  margin: 1vh;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CardGridHeader = styled(FlexRowDiv)`
  font-size: 3vh;
  font-weight: bold;
  padding: 1vh;
`;

export const CardGridContents = styled(FlexRowDiv)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Link = styled.a`
  text-align: center;
  font-size: 2vh;
  font-weight: bold;
  margin: 1vh;
  width: 4vw;
  color: #ff4444;

  &:hover {
    font-size: 2.2vh;
    cursor: pointer;
  }
`;

export const AsideContainer = styled(FlexColumnDiv)`
  width: 20vw;
  height: 100vh;
  align-items: center;
  background-color: #222222;
  position: fixed;
  left: 0;
  top: 0;

  > div {
    margin: 1vw;
    width: 100%;
  }

  .inputs {
    text-align: center;
  }
`;

export const SellerContainer = styled(FlexColumnDiv)`
  flex-grow: 1;
  padding: 1vh;
  font-size: 2vh;
`;

export const CustomerContainer = styled(FlexColumnDiv)``;

export const PostItemImg = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 1rem;
  font-size: 2vh;
`;

export const PostItemInfo = styled(FlexColumnDiv)`
  margin: 1rem;
  width: 100%;
`;

export const PostItemSelect = styled.select`
  width: 10rem;
  height: 3rem;
`;

export const InvisibleInput = styled.input`
  display: none;
`;

export const PostHeader = styled(FlexRowDiv)`
  border-bottom: 1px solid gray;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
`;

export const MapMarker = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 1.2rem;
  border: 3px solid ${agriculture[1]};
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
`;

export const GirdHeader = styled(FlexRowDiv)`
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  width: 10vw;
  height: 10vw;
  margin: 2vh;
`;

export const IconImg = styled.img`
  height: 3vh;
`;

export const SelectListContainer = styled.select`
  width: 40%;
  height: 5vh;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  font-size: 2vh;
  padding-left: 1vh;
  color: rgba(0, 0, 0, 0.55);
`;

export const WriteHeader = styled.div`
  position: fixed;
  right: 5vw;
  top: 5vh;
  width: 13vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
`;

export const NavItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 6vh;
  width: 100%;
  font-size: 3vh;
  color: white;
  font-weight: bold;

  &:hover {
    background-color: ${agriculture[5]};
  }

  > div {
    margin-left: 3vw;
  }

  img {
    height: 3vh;
    margin-right: 1vw;
  }
`;

export const ArrowRight = styled.img`
  position: absolute;
  right: 2vh;
  height: 6vh;
  opacity: 0.5;
  top: 14vh;

  &:hover {
    opacity: 1;
    top: 13.5vh;
    height: 6.5vh;
  }
`;

export const ArrowLeft = styled.img`
  position: absolute;
  left: 2vh;
  height: 6vh;
  opacity: 0.5;
  top: 14vh;
  transform: rotate(180deg);

  &:hover {
    opacity: 1;
    top: 13.5vh;
    height: 6.5vh;
  }
`;

export const MovieItem = styled.div`
  width: 70vw;
  height: 60vw;
  margin-left: 6vw;
  margin-top: 1vh;
`;

export const MovieInfo = styled.div``;

export const MovieList = styled.div``;
