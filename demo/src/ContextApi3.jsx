import { useContext } from "react"
import { namecontext } from "./App";

function Puma()
{
    let name=useContext(namecontext);

    return(<>
    <h2>This is Grand Child..{name}</h2>
    </>)
}

export { Puma};