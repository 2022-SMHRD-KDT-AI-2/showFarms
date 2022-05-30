import React from "react";
import { SelectListContainer } from "../../styles/element";
import { ISelectList } from "../../types";

const SelectList = ({ data, onChangeCategoryState }: ISelectList) => {
  return (
    <SelectListContainer onChange={onChangeCategoryState}>
      <option>선택해주세요!</option>
      {data.map((item, index) => {
        return (
          <option value={item} key={index}>
            {item}
          </option>
        );
      })}
    </SelectListContainer>
  );
};

export default SelectList;
