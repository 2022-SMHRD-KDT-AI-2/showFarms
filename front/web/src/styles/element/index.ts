import styled from "@emotion/styled";
import { FlexColumnDiv, FlexRowDiv } from "../common";

export const EditorBlock = styled.div`
  display: none;
`;

export const Input = styled.input`
  border-radius: 4px;
  --saf-0: rgba(var(--sk_foreground_high_solid, 134, 134, 134), 1);
  border: 1px solid var(--saf-0);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  box-sizing: border-box;
  //margin: 0 0 20px;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  padding: 0.8rem;
  height: 3rem;
  font-size: 1.2rem;
  line-height: 1.33333333;

  &:focus {
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px rgba(29, 155, 209, 0.3);
  }
`;

export const Button = styled.button`
  border-radius: 0.5rem;
  height: 3rem;
  width: 6.5rem;
  text-align: center;
  margin-left: 5px;
  color: white;
  font-weight: bold;
  font-size: 20px;
`;

export const CardContainer = styled(FlexColumnDiv)`
  flex-grow: 1;
  border: 1px solid gray;
  height: 27rem;
  margin: 1rem;
  display: inline-block;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 20rem;
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
`;

export const CardGridContents = styled(FlexRowDiv)`
  width: 100%;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TextEditorContainer = styled.div`
  display: flex;
  margin: 1rem;

  .editor {
    height: 80vh;
    border: 1px solid #f1f1f1;
    padding: 5px;
    border-radius: 2px;
  }
`;

export const TextEditorHTML = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 1rem 0;
  border: 1px solid #f1f1f1;
  padding: 1rem;
  flex-grow: 1;
`;
