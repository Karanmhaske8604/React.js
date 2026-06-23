import { useState } from "react";

function EmiCalculator()
{
    let[amount,setamount]=useState("");
    let[interest,setinterest]=useState("");
    let[time,settime]=useState("");
    let[emi,setemi]=useState(0);
    let[totalamount,settotalamount]=useState();
    let[totalinterest,settotalinterest]=useState();

    function calculate(){

        let P=Number(amount);
        let R=Number(interest)/12/100;
        let N=Number(time)*12;

        const emiValue=(P * R * Math.pow(1+R,N))/(Math.pow(1+R,N)-1);
        const totalpay=emiValue * N;
        const totalinterest=totalpay - P;

        setemi(emiValue.toFixed(2));
        settotalamount(totalpay.toFixed(2));
        settotalinterest(totalinterest.toFixed(2));
    }


    return(<>
    <h1>EMi-Calculator</h1>

    <input
        type="number"
        placeholder="amount"
        value={amount}
        onChange={(e)=>setamount(e.target.value)}/>
        <br />
    <input
        type='number'
        placeholder="interest"
        value={interest}
        onChange={(e)=>setinterest(e.target.value)}/>
        <br/>

    <input
        type="number"
        placeholder="time"
        value={time}
        onChange={(e)=>settime(e.target.value)}/>
        <br/>

        <button onClick={calculate}>Emi Calculate</button>
        <h2>Monthly EMi:{emi}</h2>
        <h2>TotalAmount:{totalamount}</h2>
        <h2>TotalInterest:{totalinterest}</h2>

    </>);
}
export  default EmiCalculator;