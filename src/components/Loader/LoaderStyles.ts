import styled from "styled-components";
import { Colors } from "../../utils";

export const BouncerLoader = styled.div`
 display: flex;
 justify-content: center;
 align-items: flex-start;
 margin: auto 0;

 > div  {
  width: 8px;
  height: 8px;
  background-color: ${Colors.gray300};
  border-radius: 50%;
  margin: 0 2px;
  animation: bouncer 0.5s cubic-bezier(.19, .57, .3, .98) infinite alternate;
 }

 div:nth-child(2) {
  animation-delay: 0.1s;
  opacity: 0.8;
 }

 div:nth-child(3) {
  animation-delay: 0.2s;
  opacity: 0.6;
 }

 div:nth-child(4) {
  animation-delay: 0.3s;
  opacity: 0.4;
 }

 @keyframes bouncer {
  from {
   transform: translateY(0)
  }

  to {
   transform: translateY(-2px);
  }
 }
`