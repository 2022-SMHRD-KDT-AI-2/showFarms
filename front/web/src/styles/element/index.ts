import styled from "@emotion/styled";
import { FlexColumnDiv, FlexRowDiv } from "../common";
import { agriculture } from "../../datas/color";

export const Input = styled.input`
  border-radius: 4px;
  --saf-0: ${agriculture[1]};
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  color: black;
  background-color: white;
  padding: 0.8rem;
  height: 4rem;
  font-size: 1.2rem;
  line-height: 1.33333333;
  width: ${(props) => props.width};

  &:focus {
    --saf-0: var(--saf-0);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px var(--saf-0);
  }
`;

export const Button = styled.button`
  border-radius: 0.5rem;
  height: 4rem;
  width: 6.5rem;
  text-align: center;
  margin-left: 5px;
  color: black;
  font-weight: 1;
  font-size: 20px;
  background-color: white;
  border: 1px solid ${agriculture[1]};

  &:hover {
    border: none;
    background-color: ${agriculture[1]};
    color: white;
    font-weight: bold;
  }
`;

export const CardContainer = styled(FlexColumnDiv)`
  width: 30rem;
  border: 1px solid gray;
  height: 40rem;
  margin: 1rem;
  display: inline-block;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 30rem;
`;

export const CardHeader = styled.text`
  margin: 1rem;
  font-size: 1.3rem;
  font-weight: 1;
`;

export const CardContents = styled.text`
  font-size: 1.1rem;
  margin-left: 1rem;
`;
export const CardGridContainer = styled(FlexColumnDiv)`
  flex-wrap: wrap;
  margin: 1rem 0 1rem 0;
`;

export const CardGridHeader = styled(FlexRowDiv)`
  border-bottom: 1px solid gray;
  font-size: 3rem;
  font-weight: bold;
  padding: 1rem;
`;

export const CardGridContents = styled(FlexRowDiv)`
  width: 100%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TextEditorContainer = styled(FlexColumnDiv)`
  display: flex;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  .editor {
    height: 80vh;
    border: 1px solid #f1f1f1;
    padding: 5px;
    border-radius: 2px;
  }
`;

export const TextEditorHTML = styled.div``;

export const Link = styled.a`
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem;
  width: 7rem;

  &:hover {
    border-bottom: 4px solid ${agriculture[1]};
    font-size: 1.8rem;
  }
`;

export const AsideContainer = styled(FlexColumnDiv)`
  width: 30rem;
  height: calc(100vh - 10rem);
  border-right: 1px solid ${agriculture[1]};
  align-items: center;
`;

export const Category = styled.button`
  border: none;
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  background-color: white;
  margin: 1rem;
  width: 5rem;

  &:hover {
    border-bottom: 0.3rem solid ${agriculture[1]};
    margin: 0.85rem;
    font-size: 3rem;
  }
`;

export const SellerContainer = styled(FlexColumnDiv)`
  flex-grow: 1;
  padding: 1rem;
  font-size: 2rem;
`;

export const CustomerContainer = styled(FlexColumnDiv)``;

export const PostItemImg = styled.img`
  width: 40rem;
  height: 40rem;
  border-radius: 1rem;
  border: none;
  margin: 1rem;
`;

export const PostItemInfo = styled(FlexColumnDiv)`
  margin: 1rem;
  width: 100%;
`;

export const ResultContainer = styled(FlexColumnDiv)`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 1rem 0;
  border-left: 1px solid gray;
  padding: 1rem;
  flex-grow: 1;
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
