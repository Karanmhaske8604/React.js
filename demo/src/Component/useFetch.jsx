import { useEffect, useState } from "react"

function UseFetch(url)
{
    console.log("url",url.url);

    const url2=url.url;
    

 useEffect(()=>{

    let[loading,setLoading]=useState(true);
    let[data,setData]=useState([]);
    useEffect(()=>{
        fetch("https://dummyjson.com/todos"+url.url)
        .then((v)=>{ return v.json()})
        .then((v)=>{
            setData(v);
            console.log(v);
            
        }).catch((e)=>{
            console.log(v);            
        }).finally(()=>{
            setLoading(false);
        })
 },[url2])

 return([loading,data]);

})
}

export default UseFetch;