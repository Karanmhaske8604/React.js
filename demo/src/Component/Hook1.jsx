
//useState() =>  state crate and manage lifecycle

import { useState } from "react";

   function First()
    {
         let[color,setColor]=useState("yellow");
        return(
        <>
        <h2 style={{color:color}}>THis text coloe oos </h2>
        </>)

    }

    export {First};