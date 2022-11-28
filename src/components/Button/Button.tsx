import React, { HTMLProps, ReactElement, useLayoutEffect, useRef, useState } from "react";
import { IconProps, QuotidianButton } from "./ButtonStyles";
import Loader from "../Loader";
import './Button.css'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  label?: string,
  disabled?: boolean,
  shape?: "sm" | "md" | "lg" | "full",
  variant?: "primary" | "outline" | "text",
  loader?: boolean,
  icon?: ReactElement<IconProps>,
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const Button = ({ label, shape, variant = 'primary', disabled, loader, icon, size, ...props }: ButtonProps): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [buttonWidth, setButtonWidth] = useState<number>()
  const [buttonHeight, setButtonHeight] = useState<number>()

  useLayoutEffect(() => {
    setButtonWidth(buttonRef.current?.clientWidth)
    setButtonHeight(buttonRef.current?.clientHeight)

  }, [buttonWidth, buttonHeight])

  return (
    <QuotidianButton
      ref={buttonRef}
      shape={shape}
      variant={variant}
      disabled={disabled || loader}
      loader={loader}
      height={buttonHeight}
      width={buttonWidth}
      icon={icon}
      label={label}
      size={size}
      {...props}
    >
      {loader ? <Loader /> : label}
      {icon && icon}
    </QuotidianButton>
  )
};

export default Button;