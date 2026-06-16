import { useState } from "react";

function Second()
{
    const[green,setgreen]=useState("Green");

    function change()
    {
        setgreen("violet");
    }

    function tored()
    {
        setgreen("Red");
    }

    return (
        <>
        <h1 style={{color:green}}>Helloo Second Sons are here</h1>
        <button onClick={change}>Change</button>
        <button onClick={tored}>toRed</button>
        </>    )
}

export {Second};