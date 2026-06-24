import { useContext } from "react"
import { themeContext } from "./ContextApi4";

function Navbar()
{
    let name=useContext(themeContext);
    return(<>
    Current theme:{name}
    </>);
}

export {Navbar};