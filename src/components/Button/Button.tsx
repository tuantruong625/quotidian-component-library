import React, { ReactElement, useLayoutEffect, useRef, useState } from "react";
import { IconProps, QuotidianButton } from "./ButtonStyles";
import Loader from "../Loader";
import './Button.css'

type ButtonProps = {
  label?: string,
  disabled?: boolean,
  shape?: "sm" | "md" | "lg" | "full",
  variant?: "primary" | "outline" | "text",
  loader?: boolean,
  icon?: ReactElement<IconProps>,
  onClick?: () => void
}

const Button = ({ label, shape, variant = 'primary', disabled, loader, onClick, icon, ...props }: ButtonProps): JSX.Element => {
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
      onClick={onClick}
      loader={loader}
      height={buttonHeight}
      width={buttonWidth}
      icon={icon}
      label={label}
      {...props}
    >
      {icon}
      {loader ? <Loader /> : label}
    </QuotidianButton>
  )
};

export default Button;