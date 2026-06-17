import { useState } from "react";


function Notice()
{

    const [data,setdata]=useState({names:"Karan Mhaske",color:"blue"});

    
    function Name()
    {
        setdata(prev =>({...prev, names:"KARAN MHASKE"}));
    }

    function cols()
    {
        setdata(prev =>({...data,color:"red"}));
    }
   
    return (
        <>
        <h1 style={{color:data.color}}>{data.names}</h1>
        <button onClick={Name}>Change</button>
        <button onClick={cols}>red</button>
        </>
    )
}

export  {Notice};