import { useState } from "react";

function Counter()
{

let[Counter,setCounter]=useState(0);

let[Color,setColor]=useState("pink");

function blue()
{
    setColor("blue");
}

function Increase()
{
    setCounter(Counter+1);
}

function Decrease()
{
    setCounter(Counter-1);
}

function Reset()
{
    setCounter(0);
    setColor("pink");
}

function red()
{
    setColor("red");
}

function Dark()
{
    setColor("black");
}
return(<>
<h1 style={{color:Color}}> Welcome Back Su*kersss....</h1>
<h2>{Counter}</h2>
<button onClick={Increase}>Increase</button>
<button onClick={Decrease}>Decrease</button>
<button onClick={Reset}>Reset</button>
<button onClick={blue}>Blue</button>
<button onClick={red}>Red</button>
<button onClick={Dark}>Black</button>

</>)

}
export default Counter;