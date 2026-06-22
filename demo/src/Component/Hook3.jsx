
// Custom Hook => JavaScript function which reuses logic across multiple component.

import { useState,useEffect } from "react";

function useFetchdata(url)
{
    let[data,setdata]=useState([]);//Stores upcoming array
    let[error,seterror]=useState(false);
    
    
    useEffect(()=>{
        fetch(url)
        .then((v)=>{ return v.json();})
        .then((v)=>{ 
            console.log("Inside the Custom Hook..");
            console.log(v);
            setdata(v);   //set the data
        })
        .catch((e)=>{ console.log(e);
            window.alert(e);
            seterror(true);
        })

    },[url]);
    return [data,error];

}

export {useFetchdata};