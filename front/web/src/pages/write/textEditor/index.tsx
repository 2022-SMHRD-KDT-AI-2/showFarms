import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, {
  useCallback,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import { Editor } from "react-draft-wysiwyg";
import { FlexColumnDiv, FlexRowDiv } from "../../../styles/common";
import {
  Button,
  Input,
  InvisibleInput,
  PostItemImg,
  PostItemInfo,
  TextEditorContainer,
} from "../../../styles/element";

type IInput<T> = {
  value: T;
  handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

interface IHtmlState {
  setHtmlState: Dispatch<SetStateAction<string>>;
  title: IInput<string>;
  price: IInput<string>;
  unit: IInput<string>;
  option: IInput<string>;
  addOption: () => void;
  image: {
    base64: string | ArrayBuffer;
    image: File | undefined;
    handler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

const TextEditor = ({
  setHtmlState,
  title,
  price,
  unit,
  option,
  addOption,
  image,
}: IHtmlState) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const imgRef = useRef<HTMLInputElement>(null);

  const onChangeEditorState = useCallback((state: EditorState) => {
    setEditorState(state);
  }, []);

  const onClickImg = useCallback(() => {
    if (imgRef.current) {
      imgRef.current.click();
    }
  }, []);

  // draft to html string
  useEffect(() => {
    const content = editorState.getCurrentContent();
    const raw = convertToRaw(content);
    const html = draftToHtml(raw);
    setHtmlState(html);
  }, [editorState, setHtmlState]);

  return (
    <TextEditorContainer>
      <PostItemInfo>
        <FlexRowDiv>
          <InvisibleInput type={"file"} ref={imgRef} onChange={image.handler} />
          <PostItemImg onClick={onClickImg} src={image.base64.toString()} />
          <FlexColumnDiv>
            <Input
              value={title.value}
              onChange={title.handler}
              placeholder={"Title"}
              width={"30rem"}
            />
            <div>
              <Input
                value={price.value}
                onChange={price.handler}
                placeholder={"price"}
                width={"15rem"}
              />
              <Input
                value={unit.value}
                onChange={unit.handler}
                placeholder={"unit"}
                width={"5rem"}
              />
            </div>
            <div>
              <Input
                value={option.value}
                onChange={option.handler}
                placeholder={"option"}
                width={"15rem"}
              />
              <Button onClick={addOption}>추가하기</Button>
            </div>
          </FlexColumnDiv>
        </FlexRowDiv>
      </PostItemInfo>
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
    </TextEditorContainer>
  );
};

export default TextEditor;
/*


*
      />*/
