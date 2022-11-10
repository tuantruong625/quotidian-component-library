import { ReactElement } from "react";
import styled, { css } from "styled-components";
import { BorderRadius, Colors, Spacing } from "../../utils";
import { handleBorderRadius, handleButtonSize } from "../utils";

type StyleProps = {
  label?: string
  shape?: "sm" | "md" | "lg" | "full",
  variant?: "primary" | "outline" | "text",
  width?: number,
  height?: number,
  loader?: boolean,
  icon?: ReactElement<IconProps>,
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

export type IconProps = {
  height: string,
  width: string,
  color: string,
}

export const QuotidianButton = styled.button<StyleProps>`
  background-color: ${Colors.gray700};
  padding: ${({ size }) => {
    if (size === "xs" || size === "sm" || !size) {
      return `${Spacing.size3} ${Spacing.size2}`
    }
    if (size === "md") {
      return `${Spacing.size3} ${Spacing.size3}`
    }
    if (size === "lg") {
      return `${Spacing.size3} ${Spacing.size4}`
    }
    if (size === "xl") {
      return `${Spacing.size3} ${Spacing.size5}`
    }
  }};
  color: ${Colors.gray100};
  border: 0;
  cursor: pointer;
  transition: 0.25s;
  border-radius: ${({ shape }) => handleBorderRadius(shape as string)};
  transform: translateY(0);
  user-select: none;
  font-size: ${({ size }) => handleButtonSize(size as string)};

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
    color: ${Colors.gray300};
    background-color: ${Colors.gray400};
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
    color: ${Colors.gray700};
    border: 1px solid ${Colors.gray700};

    &:active {
      transform: translateY(0);
      box-shadow: inset 3px 3px 2px rgba(0,0,0,0.15);
    }
  `}

  ${({ loader, width, height }) => loader && css`
    width: ${width}px;
    height: ${height}px;
    cursor: not-allowed;
  `}

  ${({ variant }) => variant === 'text' && css`
    background-color: ${Colors.white};
    color: ${Colors.gray700};

    &:active {
      transform: translateY(0);
      box-shadow: inset 3px 3px 2px rgba(0,0,0,0.15);
    }
  `}

  ${({ icon, label }) => icon && label && css`
    display: flex;
    align-items: center;

    > svg {
      margin: 0 ${Spacing.size1};
      color: ${Colors.gray100};
      width: 1em;
      height: 1em;
    }
  `}

  ${({ icon, label, shape }) => icon && !label && css`
      display: flex;
      justify-content: center;
      border-radius: ${handleBorderRadius(shape as string)};
      padding: ${Spacing.size2};
      height: 2rem;
      width: 2rem;

      > svg {
        color: ${Colors.gray100};
        width: 2rem;
      }
  ` }
`