import React from "react";
import styled from "styled-components";
import './Button.css'

export interface ButtonProps {
  label: string;
}

const QuotidianButton = styled.button`
  background-color: #2E3440;
  padding: 0.625rem 0.5rem;
  border-radius: 5px;
`

const Button = ({ label }: ButtonProps) => {
  return <QuotidianButton>{label}</QuotidianButton>;
};

export default Button;