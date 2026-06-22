
import useCounter from "./Hook3.1";

function Counter() {
    const { count, increment } = useCounter();

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </>
    );
}

export default Counter;