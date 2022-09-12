import React from "react"
import styled from "styled-components";
import { BorderRadius, Colors, Spacing } from "../../utils";

interface Options {
 value: string;
 label: string;
}

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
 options: Options[]
 label: string
 selectName: string
}

const SelectLabel = styled.label`
 margin-left: ${Spacing.size2};
 text-transform: capitalize;
 color: ${Colors.gray5};
`

const SelectWrapper = styled.div`
 width: 100%;
 min-width: 15ch;
 max-width: 30ch;
 border: 1px solid ${Colors.gray4};
 border-radius: ${BorderRadius.md};
 padding: ${Spacing.size2} ${Spacing.size3};
 cursor: pointer;
 line-height: 1.1;
 background-color: ${Colors.white};
 background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
 display: flex;
 align-items: center;
 position: relative;

 &::after {
  content: '';
  width: 0.8em;
  height: 0.5em;
  background-color: ${Colors.primary1};
  clip-path: polygon(100% 0%, 0 0%, 50% 100%);
 }
`
const QuotidianSelect = styled.select`
 appearance: none;
 background-color: transparent;
 border: none;
 padding: 0 1em 0 0;
 margin: 0;
 width: 100%;
 outline: none;
 font-size: inherit;
 cursor: inherit;
 line-height: inherit;

 :focus + span {
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border: 2px solid ${Colors.primary2};
  border-radius: inherit;
 }

 ::-ms-expand {
  display: none;
 }
`

const QuotidianOption = styled.option`
 display: none;
`

const Select = ({ label, selectName, options, ...props }: SelectProps): JSX.Element => {
 return (
  <>
   <SelectLabel htmlFor={selectName}>{label}</SelectLabel>
   <SelectWrapper>
    <QuotidianSelect id={selectName} {...props}>
     {
      options && options.map(({ value, label }) => (
       <option value={value}>{label}</option>
      ))
     }
    </QuotidianSelect>
    <span />
   </SelectWrapper>
  </>
 )
}

export default Select