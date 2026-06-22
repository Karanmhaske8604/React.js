
import { useState } from "react";
import { useFetchdata } from "./Component/Hook3";

function Fetchdata()
{
    let[url,seturl]=useState('http://localhost:8080/amazon/order/get-product');
    let[data,error] =useFetchdata(url)
    let[id,setid]=useState(1);

    function Changeid()
    {
        setid(id+1);
    }

    function Changeurl()
    {
        Changeid();
        seturl(`http://localhost:8080/amazon/order/get-by-id/${id}`);
    }
    
   if(error)
    return(<>
    <h3>Something is Fishy...</h3>
    </>)

    return(<>
    {
        data.map((i)=>{return(<>
        <li>
            <h3>{i.id}</h3>
            <h3>{i.o_name}</h3>
            <h3>{i.o_price}</h3>
        </li>
        </>)

        })
    }
    <button onClick={Changeurl}>ChangeURL</button>
    </>)
}

export default Fetchdata;