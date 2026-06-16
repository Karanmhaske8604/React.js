import { useState } from "react"

//Conditional Rendering => components based on conditions

function Three()
{

    let[login, setLogin]=useState();

    function loginin()
    {
        setTimeout(() => {
            setLogin(true);
        },5000);
    }

    if(!login)
    {
    return(
        <>
        <h2>Are you going to log in</h2>
        <button type="button" class="btn btn-primary" onClick={loginin}>Primary</button>
        </>)
    }

    return (
        <>
        <h3>Successfully Login here</h3>
        </>
    )

}

export {Three};