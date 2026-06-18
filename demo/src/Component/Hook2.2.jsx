import { useEffect,useState } from "react";

function Holi() {
    // setTimeout(Alert,2000);

    let[data,setData] = React.useState([]);
    let[url,setUrl]=useState("https://dummyjson.com/products");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{return res.json();})
        .then((v)=>{
            setData(v);
        })
    },[url]);

    function ChangeUrl()
    {
        setUrl("https://dummyjson.com/products/search?q=phone");
    }
    return (
        <>
            <h1>Happy Holi</h1>
            <button onClick={ChangeUrl}>Fetch new data.</button>
            {
                data.map((i)=>{
                    return(<>
                    <h4>{i.title}</h4>
                    </>)
                })
            }

        </>
    )}
function Alert() {
    window.alert("Diwali");
}
export default Holi;