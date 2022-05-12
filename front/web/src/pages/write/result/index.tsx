import React from "react";
import { FlexColumnDiv, FlexRowDiv, TitleText } from "../../../styles/common";
import {
  PostHeader,
  PostItemImg,
  PostItemSelect,
  ResultContainer,
  TextEditorHTML,
} from "../../../styles/element";

interface IResultProps {
  htmlState: string;
  title: string;
  price: string;
  unit: string;
  optionList: string[];
  image: string;
}

const Result = ({
  htmlState,
  title,
  price,
  unit,
  optionList,
  image,
}: IResultProps) => {
  return (
    <ResultContainer>
      <PostHeader>
        <PostItemImg src={image} />
        <FlexColumnDiv>
          <TitleText>{title}</TitleText>
          <TitleText>{`${price} / ${unit}`}</TitleText>
          <PostItemSelect>
            <option value={""}>선택해주세요!</option>
            {optionList.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              );
            })}
          </PostItemSelect>
        </FlexColumnDiv>
      </PostHeader>
      <TextEditorHTML
        dangerouslySetInnerHTML={{
          __html: htmlState,
        }}
      />
    </ResultContainer>
  );
};

export default Result;
