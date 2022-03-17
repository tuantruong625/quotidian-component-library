import React from "react";
import styled from "styled-components";
import './Button.css'

export type ButtonProps = {
  label: string,
  disabled: boolean,
  onClick?: () => void
}

const QuotidianButton = styled.button`
  background-color: #2E3440;
  padding: 0.625rem 0.5rem;
  border-radius: 5px;
  color: #ECEFF4;
  border: 0;
  cursor: pointer;
  transition: 0.25s;
  
  &:hover,
  :focus {
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    transform: translateY(-0.25em);
  }

  &:disabled {
    
  }
`

const Button = ({ label, disabled, ...props }: ButtonProps): JSX.Element => {
  return (
    <QuotidianButton
      type="button"
      disabled={disabled}
      {...props}
    >
      {label}
    </QuotidianButton>
  )
};

export default Button;