import styled from "@emotion/styled";
import { FlexColumnDiv, FlexRowDiv } from "../common";
import { agriculture } from "../../datas/color";

export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  color: black;
  background-color: white;
  padding: 0.5rem;
  height: 2.8rem;
  font-size: 2rem;
  line-height: 1.33333333;
  width: ${(props) => props.width};
`;

export const Button = styled.button`
  border-radius: 0.3rem;
  height: 2.8rem;
  width: fit-content;
  text-align: center;
  margin-left: 0.3vh;
  color: white;
  font-weight: 1;
  font-size: 1.5rem;
  background-color: rgb(164, 203, 115);
  border: 1px solid ${agriculture[1]};
  padding: 2px;

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
  width: 100%;
  margin: 1rem;

  span {
    margin: 0.3vh;
  }

  &:hover {
    cursor: pointer;
  }

  > div {
    display: flex;
    flex-direction: column;
  }

  > img {
    width: 100%;
    height: 400px;
    border-radius: 0.5rem;
  }

  .highlight {
    position: absolute;
    width: fit-content;
    background-color: ${agriculture[0]};
    border: none;
    border-radius: 1rem;
    font-size: 2.4rem;
    padding: 0.3rem 1rem 0.3rem 1rem;
    color: white;
    font-weight: bold;
    margin: 1rem;
  }
`;

export const CardHeader = styled.span`
  font-size: 1.7rem;
  font-weight: bold;
`;

export const CardContents = styled.span`
  font-size: 1.2rem;
  text-overflow: ellipsis;
`;
export const CardGridContainer = styled(FlexColumnDiv)`
  width: 100%;
  margin: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const CardGridHeader = styled(FlexRowDiv)`
  font-size: 3rem;
  font-weight: bold;
  padding: 0.7rem;
  margin-left: 1.2rem;
`;

export const CardGridContents = styled(FlexRowDiv)`
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  height: fit-content;
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
  width: 20rem;
  height: 2.8rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  font-size: 2rem;
  padding-left: 1vh;
  color: rgba(0, 0, 0, 0.55);
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
  > * {
    margin: 1rem;
  }

  > img {
    width: 1600px;
    height: 900px;
  }

  > video {
    width: 1600px;
    height: 900px;
  }

  .size1 {
    font-size: 2.5rem;
    font-weight: bold;
  }

  .size2 {
    font-size: 2.2rem;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      margin: 1rem;
    }
  }

  .space1 {
    justify-content: space-between;

    > button {
      width: 10rem;
      height: 4rem;
    }
  }
`;

export const MovieList = styled.div``;
