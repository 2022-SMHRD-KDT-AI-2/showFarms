import styled from "@emotion/styled";

export const FlexRowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  border: 1px solid gray;
`;

export const GridBox = styled(FlexColumnDiv)`
  border: 1px solid gray;
  width: 30rem;
  height: 30rem;
  border-radius: 1.5rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
`;

export const Button = styled.button`
  width: 20rem;
  height: 4.5rem;
  margin: 2rem 0 2rem 0;
  background-color: white;
  border-radius: 0.5rem;
  border: none;
`;
