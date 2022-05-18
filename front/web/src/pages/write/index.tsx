import React, { useCallback, useRef, useState } from "react";
import { WriteContainer } from "../../styles/layout";
import "draft-js/dist/Draft.css";
import useInput from "../../hooks/useInput";
import useImage from "../../hooks/useImage";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import {
  Button,
  Input,
  InvisibleInput,
  PostItemImg,
  WriteHeader,
} from "../../styles/element";
import SelectList from "../../components/selectList";
import { category } from "../../datas";
import Aside from "../../components/aside";

const Write = () => {
  const [title, onChangeTitle] = useInput("");
  const [price, onChangePrice] = useInput("");
  const [unit, onChangeUnit] = useInput("");
  const [categoryState, setCategoryState] = useState<string>("");
  const [base64, image, onChangeImage] = useImage();

  const onChangeCategoryState = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategoryState(e.target.value);
  };

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const imgRef = useRef<HTMLInputElement>(null);
  /*
   *  editor state change handler
   * */
  const onChangeEditorState = useCallback((state: EditorState) => {
    setEditorState(state);
  }, []);

  /*
   * 이미지 클릭 시 input(type=file) 실행
   * */
  const onClickImg = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  }, []);

  return (
    <>
      <Aside />
      <WriteContainer>
        <InvisibleInput
          type="file"
          style={{ display: "none" }}
          onChange={onChangeImage}
          ref={imgRef}
        />
        <PostItemImg
          src={base64}
          onClick={onClickImg}
          alt="여기를 눌러 선택해주세요!"
        />
        <WriteHeader>
          <Button>취소</Button>
          <Button>등록</Button>
        </WriteHeader>
        <span>
          <text>상품명</text>
          <Input width={"100%"} placeholder={"상품명을 입력하세요."} />
          <text>가격</text>
          <Input width={"100%"} placeholder={"가격을 입력해주세요."} />
          <text>단위</text>
          <Input width={"100%"} placeholder={"KG or Box"} />
          <text>분류</text>
          <SelectList
            data={category}
            onChangeCategoryState={onChangeCategoryState}
          />
          <text>배송비</text>
          <Input width={"100%"} placeholder={"가격을 입력해주세요."} />
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
      </WriteContainer>
    </>
  );
};

export default Write;

/*<TextEditor
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
        />*/
