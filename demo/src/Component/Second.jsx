import { useContext } from "react";
import Cont from "./Context";

function Second_Context()
{

    let usercon=useContext(Cont);

    return(
        <>
        <h3>Hii this is the second function</h3>
        <h2>Second:::{usercon}</h2>
        
        </>)

}

export default Second_Context;