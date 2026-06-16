import UseFetch from "./useFetch";



function FetchDemo({url})
{

    console.log(url);

    let[loading,data]=UseFetch({url});

    if(loading)
    return(<>
    <h1>
        Data is Loading...</h1>
    </>)

    if(!loading)
{
        console.log(data);
        return(
            <>
            <h1>Check log...Data has Arrived....</h1>
            {
                data.map(()=>{
                    return(<>
                    <h2>{i.id}</h2>
                    <h2>{i.todo}</h2>
                    <h3>{i.userid}</h3>
                    <h3>{i.completed}</h3>
                    <h3>{i.name}</h3>
                    <h3>{i.email}</h3>
                    </>)
                })
            }
            </>)      
    }
    
}