import { useEffect, useState } from "react";


function Effect()
{
    const[data,setdata]=useState([]);
    useEffect(()=>{

        console.log("Fetching Data ");
        fetch('https://dummyjson.com/todos')
        .then((a)=>{return a.json(); })
        .then((v)=>{console.log(v);
            setdata(v);
        })
    },[]);

    return(<>
    {data.map((i) => (
        <div key={i.id}>
          <h2>{i.id}</h2>
          <h2>{i.todo}</h2>
        </div>
      ))}
    
    </>)

}

export default Effect ;