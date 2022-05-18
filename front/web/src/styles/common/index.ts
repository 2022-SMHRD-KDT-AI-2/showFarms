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
  width: 40rem;
  height: 40rem;
  border-radius: 1.5rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const ColorDiv = styled.div`
  height: 5rem;
  background-color: ${(props) => props.color};
`;

export const TitleText = styled.p`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const MiddleText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const BannerItem = styled.img`
  height: 100%;
  width: 90vw;
`;
