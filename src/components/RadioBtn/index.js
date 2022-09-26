import React from "react";
import { StyledRadioBtn } from './styled';

const RadioBtn = ({checked, name, onChange, title, value}) => {
  return (
    <StyledRadioBtn>
      <input id={value} checked={checked} name={name} onChange={onChange} type="radio" value={value} />
      <label htmlFor={value}>{title}</label>
    </StyledRadioBtn>
  );
};

export default RadioBtn;
