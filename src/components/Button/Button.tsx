import React from "react";
import styled from "styled-components";
import './Button.css'

export type ButtonProps = {
  label: string,
  disabled?: boolean,
  shape?: "sm" | "md" | "lg" | "full" | undefined,
  onClick?: () => void
}

type StyleProps = {
  shape?: "sm" | "md" | "lg" | "full"
}

const handleBorderRadius = (size?: string) => {
  switch (size) {
    case "sm":
      return "5px"
    case "md":
      return "10px"
    case "lg":
      return "16px"
    case "full":
      return "999px"
    default:
      return "0px"
  }
}

const QuotidianButton = styled.button<StyleProps>`
  background-color: #2E3440;
  padding: 0.625rem 0.5rem;
  color: #ECEFF4;
  border: 0;
  cursor: pointer;
  transition: 0.25s;
  border-radius: ${({ shape }) => handleBorderRadius(shape)};
  transform: translateY(0);
  user-select: none;
  
  &:hover {
    box-shadow: 0 1px 2px rgba(0,0,0,0.07), 
                0 2px 4px rgba(0,0,0,0.07), 
                0 4px 8px rgba(0,0,0,0.07), 
                0 8px 16px rgba(0,0,0,0.07),
                0 16px 32px rgba(0,0,0,0.07), 
                0 32px 64px rgba(0,0,0,0.07);
    transform: translateY(-0.25em);
  }
  
  &:disabled {
    color: #D8DEE9;
    background-color: #4C566A;
    box-shadow: none;
    transform: translateY(0);
    cursor: not-allowed;
  }

  &:active {
    transform: translateY(0);
    box-shadow: inset 3px 3px 2px black;
  }
`

const Button = ({ label, shape, disabled, ...props }: ButtonProps): JSX.Element => {
  return (
    <QuotidianButton
      shape={shape}
      disabled={disabled}
      {...props}
    >
      {label}
    </QuotidianButton>
  )
};

export default Button;