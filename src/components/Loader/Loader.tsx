import React from "react";
import { BouncerLoader } from "./LoaderStyles";

const Loader = (): JSX.Element => {
 return (
  <BouncerLoader data-testid="loader">
   <div></div>
   <div></div>
   <div></div>
   <div></div>
  </BouncerLoader>
 )
}

export default Loader