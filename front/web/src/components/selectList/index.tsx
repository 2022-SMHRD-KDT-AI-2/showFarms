import React from "react";
import { SelectListContainer } from "../../styles/element";

interface ISelectList {
  data: string[];
  onChangeCategoryState: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectList = ({ data, onChangeCategoryState }: ISelectList) => {
  return (
    <SelectListContainer onChange={onChangeCategoryState}>
      <option>선택해주세요!</option>
      {data.map((item, index) => {
        return <option value={item}>{item}</option>;
      })}
    </SelectListContainer>
  );
};

export default SelectList;
