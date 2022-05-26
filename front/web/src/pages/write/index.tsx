import React, {useCallback, useRef, useState} from "react";
import {WriteContainer} from "../../styles/layout";
import {convertToRaw} from "draft-js";
import "draft-js/dist/Draft.css";
import useInput from "../../hooks/useInput";
import useImage from "../../hooks/useImage";
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import {
    Button,
    Input,
    InvisibleInput,
} from "../../styles/element";
import SelectList from "../../components/selectList";
import {category} from "../../datas";
import {FlexRowDiv} from "../../styles/common";
import axiosInstance from "../../utils/AxiosInstance";

interface IWrite {
    onCloseModal: () => void
}

const Write = ({onCloseModal}: IWrite) => {
    const [title, onChangeTitle] = useInput("");
    const [price, onChangePrice] = useInput("");
    const [unit, onChangeUnit] = useInput("");
    const [shipping, onChangeShipping] = useInput("")
    const [categoryState, setCategoryState] = useState<string>("");
    const [base64, image, onChangeImage] = useImage();

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    const onChangeCategoryState = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCategoryState(e.target.value);
    };

    const imgRef = useRef<HTMLInputElement>(null);
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

    const onSubmit = () => {
        const contents = convertToRaw(editorState.getCurrentContent()).blocks[0].text
        console.log(contents.toString())
        axiosInstance.post("/posts/new", {
            "base64": base64,
            "mb_id": "test",
            "post_title": title.toString(),
            "post_price": parseInt(price),
            "post_unit": unit.toString(),
            "post_shipping": shipping.toString(),
            "post_content": contents,
            "post_category": categoryState.toString(),
        }).then((res) => console.log(res.data))
    }
    return (
        <>
            <WriteContainer onClick={(e) => e.stopPropagation()}>
                <InvisibleInput
                    type="file"
                    style={{display: "none"}}
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
                        <text>상품명</text>
                        <Input width={"100%"} placeholder={"상품명을 입력하세요."} value={title} onChange={onChangeTitle}/>
                    </div>
                    <div>
                        <text>가격</text>
                        <Input width={"100%"} placeholder={"가격을 입력해주세요."} value={price} onChange={onChangePrice}/>
                    </div>
                    <div>
                        <text>단위</text>
                        <Input width={"100%"} placeholder={"KG or Box"} value={unit} onChange={onChangeUnit}/>
                    </div>
                    <div>
                        <text>분류</text>
                        <SelectList
                            data={category}
                            onChangeCategoryState={onChangeCategoryState}
                        />
                    </div>
                    <div>
                        <text>배송비</text>
                        <Input width={"100%"} placeholder={"가격을 입력해주세요."} value={shipping} onChange={onChangeShipping}/>
                    </div>
                </span>

                <Editor
                    wrapperClassName="wrapper-class"
                    editorClassName="editor"
                    toolbarClassName="toolbar-class"
                    toolbar={{
                        list: {inDropdown: true},
                        textAlign: {inDropdown: true},
                        link: {inDropdown: true},
                        history: {inDropdown: false},
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
        </>
    );
};

export default Write;
