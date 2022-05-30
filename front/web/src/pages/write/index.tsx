import React, { useCallback, useRef, useState } from "react";
import { WriteContainer } from "../../styles/layout";
import { convertToRaw, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import useInput from "../../hooks/useInput";
import useImage from "../../hooks/useImage";
import { Editor } from "react-draft-wysiwyg";
import { Button, Input, InvisibleInput } from "../../styles/element";
import SelectList from "../../components/selectList";
import { category } from "../../datas";
import { FlexRowDiv } from "../../styles/common";
import axiosInstance from "../../utils/AxiosInstance";
import { IWrite } from "../../types";
import { useNavigate } from "react-router";

const Write = ({ onCloseModal }: IWrite) => {
  const [title, onChangeTitle] = useInput("");
  const [price, onChangePrice] = useInput("");
  const [unit, onChangeUnit] = useInput("");
  const [shipping, onChangeShipping] = useInput("");
  const [categoryState, setCategoryState] = useState<string>("");
  const [base64, image, onChangeImage] = useImage();
  const nav = useNavigate();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChangeCategoryState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryState(e.target.value);
  };

  const imgRef = useRef<HTMLInputElement>(null);
  const onChangeEditorState = useCallback((state: EditorState) => {
    setEditorState(state);
  }, []);

  const onClickImg = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  }, []);

  const onSubmit = () => {
    const contents = convertToRaw(editorState.getCurrentContent()).blocks[0]
      .text;

    axiosInstance
      .post("/posts/new", {
        base64: base64,
        mb_id: window.localStorage.getItem("id"),
        post_title: title.toString(),
        post_price: parseInt(price),
        post_unit: unit.toString(),
        post_shipping: shipping.toString(),
        post_content: contents,
        post_category: categoryState.toString(),
      })
      .then((res) => {
        if (res.data) {
          onCloseModal();
          nav("/main/1");
        }
      });
  };
  return (
    <WriteContainer onClick={(e) => e.stopPropagation()}>
      <InvisibleInput
        type="file"
        style={{ display: "none" }}
        onChange={onChangeImage}
        ref={imgRef}
      />
      <img
        src={image ? base64 : ""}
        onClick={onClickImg}
        alt="여기를 눌러 대표이미지를 선택해주세요!"
      />
      <span>
        <div>
          <span>상품명</span>
          <Input
            width={"100%"}
            placeholder={"상품명을 입력하세요."}
            value={title}
            onChange={onChangeTitle}
          />
        </div>
        <div>
          <span>가격</span>
          <Input
            width={"100%"}
            placeholder={"가격을 입력해주세요."}
            value={price}
            onChange={onChangePrice}
          />
        </div>
        <div>
          <span>단위</span>
          <Input
            width={"100%"}
            placeholder={"KG or Box"}
            value={unit}
            onChange={onChangeUnit}
          />
        </div>
        <div>
          <span>분류</span>
          <SelectList
            data={category}
            onChangeCategoryState={onChangeCategoryState}
          />
        </div>
        <div>
          <span>배송비</span>
          <Input
            width={"100%"}
            placeholder={"가격을 입력해주세요."}
            value={shipping}
            onChange={onChangeShipping}
          />
        </div>
      </span>
      <Editor
        wrapperClassName="wrapper-class"
        editorClassName="editor"
        toolbarClassName="toolbar-class"
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }}
        placeholder="내용을 작성해주세요."
        localization={{
          locale: "ko",
        }}
        editorState={editorState}
        onEditorStateChange={onChangeEditorState}
      />
      <FlexRowDiv>
        <Button onClick={onCloseModal}>취소</Button>
        <Button onClick={onSubmit}>등록</Button>
      </FlexRowDiv>
    </WriteContainer>
  );
};

export default Write;
