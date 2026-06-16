import { Child } from "./Child"

function Parent(nm)
{
    console.log(nm.nm);
    
    return(
    <>
        <h1>Hi I am Parent of the child</h1>
        <h2>Importing Child</h2>
        <Child cn={nm}></Child>

    </>)
}

export {Parent}