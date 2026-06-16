
function Child(cn)
{
    console.log(cn.cn.nm);
    let arr=new Array();
    arr=[...cn.cn.nm];
    
    return (
        <>
        <h2>I am the child : {arr.map} </h2>
         <p>{arr.length} </p>
         </>
        
    
    )
       
}

export {Child}