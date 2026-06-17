
// useEffect() => handles the side effect of the heavy operations like Fetching Data from API 

import { useEffect, useState } from "react";


function Fetchdata()
{

    let[product,setproduct]=useState([]);
    let[count,setcount]=useState(0);

    useEffect(()=>{
        console.log("Fetching Data From Backend Server");
        fetch('http://localhost:8080/amazon/order/get-product')
        .then((v)=>{ return v.json();})
        .then((v)=>{ console.log(v);
            setproduct(v);
        })
     },[count]);

    function counter()
    {
        setcount(count+1);
    }
     console.log(product);


    return(<>
        <button onClick={counter}>RefetchData</button>
        {
             product.map((i) => {
                return (
                    <table border="1">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
        </tr>
      </thead>
         <tbody>
        <tr key={i.id}>
            <td>{i.o_name}</td>
            <td>{i.o_price}</td>
          </tr>
          </tbody>
    </table>
        );
  })
        }
        </>
    )

}

export {Fetchdata};