/** TextEditor.tsx  */

import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import React, { useCallback, useEffect, useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { FlexRowDiv } from "../../../styles/common";
import { TextEditorContainer, TextEditorHTML } from "../../../styles/element";

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlState, setHtmlState] = useState<string>("");
  const onChangeEditorState = useCallback((state: EditorState) => {
    setEditorState(state);
  }, []);
  useEffect(() => {
    const content = editorState.getCurrentContent();
    const raw = convertToRaw(content);
    const html = draftToHtml(raw);
    setHtmlState(html);
  }, [editorState]);
  return (
    <FlexRowDiv>
      <TextEditorContainer>
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
      <TextEditorHTML
        dangerouslySetInnerHTML={{
          __html: htmlState,
        }}
      />
    </FlexRowDiv>
  );
};

export default TextEditor;
