import {React, memo } from "react";
import ChildB from './ChildB'

function ChildA({Learning}){
    console.log("Child Component");
    return(
        <>
        {/* <ChildB /> */}
        </>
    )
}
export default memo(ChildA);