import React from "react";
import styled, { css } from "styled-components";
import { BorderRadius, Colors } from "../../utils";
import Loader from "../Loader";
import './Button.css'

export type ButtonProps = {
  label: string,
  disabled?: boolean,
  shape?: "sm" | "md" | "lg" | "full" | undefined,
  variant?: "primary" | "outline" | "text",
  loading?: boolean,
  onClick?: () => void
}

type StyleProps = {
  shape?: "sm" | "md" | "lg" | "full",
  variant?: "primary" | "outline" | "text"
}

const handleBorderRadius = (size?: string) => {
  switch (size) {
    case "sm":
      return `${BorderRadius.sm}`
    case "md":
      return `${BorderRadius.md}`
    case "lg":
      return `${BorderRadius.lg}`
    case "full":
      return `${BorderRadius.full}`
    default:
      return `${BorderRadius.none}`
  }
}

const QuotidianButton = styled.button<StyleProps>`
  background-color: ${Colors.gray7};
  padding: 0.625rem 0.5rem;
  color: ${Colors.gray1};
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
    color: ${Colors.gray3};
    background-color: ${Colors.gray4};
    box-shadow: none;
    transform: translateY(0);
    cursor: not-allowed;
  }

  &:active {
    transform: translateY(0);
    box-shadow: inset 3px 3px 2px ${Colors.black};
  }

  ${({ variant }) => variant === 'outline' && css`
    background-color: ${Colors.white};
    color: ${Colors.gray7};
    border: 1px solid ${Colors.gray7};

    &:active {
      transform: translateY(0);
      box-shadow: inset 3px 3px 2px rgba(0,0,0,0.15);
    }
  `}

  ${({ variant }) => variant === 'text' && css`
    background-color: ${Colors.white};
    color: ${Colors.gray7};

    &:active {
      transform: translateY(0);
      box-shadow: inset 3px 3px 2px rgba(0,0,0,0.15);
    }
  `}
`

const Button = ({ label, shape, variant = "primary", disabled, loading, ...props }: ButtonProps): JSX.Element => {
  return (
    <QuotidianButton
      shape={shape}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {loading ? <Loader /> : label}
    </QuotidianButton>
  )
};

export default Button;