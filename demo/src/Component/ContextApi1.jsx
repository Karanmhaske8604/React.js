// ContextAPI => it directly shared data from parent to grandchild component on globally in large applications.replace Props Drilling in this way
// 2) Consume Data

import { useContext } from "react";
import { namecontext } from "./ContextApi2";

function Suma()
{
    let name=useContext(namecontext);
    return(<>
    <h2>This is our Child Component..{name}</h2>
    </>)
}

export default Suma;