
//change the counter

import { useState } from "react";

function Counting()
{
    const [count,setcount]=useState(9);

    function increase()
    {
        setcount(count+1);
    }

    function decrease()
    {
        if(count>0)
        {
        setcount(count-1);
        }
        else
        {
            window.alert("Not Allowed");
        }
    }

    function origin()
    {
        setcount(50);
    }

    if(count==0)
    {
        return(<h1>Conditional Rendering</h1>)
    }

    return(
    <>
    <h1>Count:{count}</h1>
    <button onClick={increase}>add</button>
    <button onClick={decrease}>remove</button>
    <button onClick={origin}>reset</button>
    </>
    )

}

export {Counting};