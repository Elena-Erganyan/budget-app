import React, { useRef, useState } from 'react';
import {Eye, EyeClosed} from 'phosphor-react';
import { StyledLabel, StyledInput } from './styled';

const Input = ({
  text,
  value,
  onChange,
  type,
  id,
  name,
  checked,
  color,
  pattern,
  options,
  required,
  error,
  min,
  step,
}) => {

  const [isVisible, setIsVisible] = useState(false);
  const inputRef = useRef(null);

  const togglePasswordVisibility = () => {
    inputRef.current.type = isVisible ? 'password' : 'text';
    setIsVisible(!isVisible);
  };

  return (
    type === 'radio' 
      ? (
        <>
          <StyledInput
            checked={checked}
            color={color}
            id={id}
            name={name}
            onChange={onChange}
            type={type}
            value={value}
          />
          <StyledLabel 
            color={color}
            htmlFor={id}
            isSwitch
          >
            {text}
          </StyledLabel>
        </>
      ) : type === 'select' 
      ? (
        <StyledLabel>
          {text}
          <StyledInput
            as="select"
            value={value}
            onChange={onChange}
          >
            {options.map((option, i) => (
              <option key={i} value={option.value}>{option.text}</option>)
            )}
          </StyledInput>
        </StyledLabel>
    ) : (
      <StyledLabel>
        {text}
        {type === 'password' && (
          isVisible
            ? <Eye 
                onClick={togglePasswordVisibility}
                size={28}
              />
            : <EyeClosed
                onClick={togglePasswordVisibility}
                size={28}
              />
        )}
        <StyledInput
          error={error}
          min={min}
          onChange={onChange}
          pattern={pattern}
          ref={inputRef}
          required={required}
          step={step}
          type={type}
          value={value}
        />
      </StyledLabel>
  ));
};

export default Input;
