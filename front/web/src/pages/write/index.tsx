import React, { useCallback, useState } from "react";
import { WriteContainer } from "../../styles/layout";
import "draft-js/dist/Draft.css";
import TextEditor from "./textEditor";
import Result from "./result";
import useInput from "../../hooks/useInput";
import useImage from "../../hooks/useImage";

const Write = () => {
  const [htmlState, setHtmlState] = useState<string>("");
  const [title, onChangeTitle] = useInput("");
  const [price, onChangePrice] = useInput("");
  const [unit, onChangeUnit] = useInput("");
  const [option, onChangeOption, setOption] = useInput("");
  const [optionList, setOptionList] = useState<string[]>([]);
  const [base64, image, onChangeImage] = useImage();

  /*
   * 글쓰기 페이지 상단에서 옵션 추가하기 버튼 클릭 시
   * 결과에서 select list 옵션 추가
   * */
  const onClickAddOption = useCallback(() => {
    if (option.length > 0) {
      setOptionList([...optionList, option]);
      setOption("");
    }
  }, [option, optionList]);

  return (
    <WriteContainer>
      <TextEditor
        setHtmlState={setHtmlState}
        title={{
          value: title,
          handler: onChangeTitle,
        }}
        price={{
          value: price,
          handler: onChangePrice,
        }}
        unit={{
          value: unit,
          handler: onChangeUnit,
        }}
        option={{
          value: option,
          handler: onChangeOption,
        }}
        addOption={onClickAddOption}
        image={{
          base64: base64,
          image: image,
          handler: onChangeImage,
        }}
      />
      <Result
        htmlState={htmlState}
        title={title}
        price={price}
        unit={unit}
        optionList={optionList}
        image={base64}
      />
    </WriteContainer>
  );
};

export default Write;
