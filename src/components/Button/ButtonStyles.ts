import { ReactElement } from "react";
import styled, { css } from "styled-components";
import { BorderRadius, Colors, Spacing } from "../../utils";
import { handleBorderRadius } from "../utils";

type StyleProps = {
  label?: string
  shape?: "sm" | "md" | "lg" | "full",
  variant?: "primary" | "outline" | "text",
  width?: number,
  height?: number,
  loader?: boolean,
  icon?: ReactElement<IconProps>,
}

export type IconProps = {
  height: string,
  width: string,
  color: string,
}

export const QuotidianButton = styled.button<StyleProps>`
  background-color: ${Colors.gray7};
  padding: ${Spacing.size3} ${Spacing.size2};
  color: ${Colors.gray1};
  border: 0;
  cursor: pointer;
  transition: 0.25s;
  border-radius: ${({ shape }) => handleBorderRadius(shape as string)};
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

  ${({ loader, width, height }) => loader && css`
    width: ${width}px;
    height: ${height}px;
    cursor: not-allowed;
  `}

  ${({ variant }) => variant === 'text' && css`
    background-color: ${Colors.white};
    color: ${Colors.gray7};

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
      color: ${Colors.gray1};
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
        color: ${Colors.gray1};
        width: 2rem;
      }
  ` }
`