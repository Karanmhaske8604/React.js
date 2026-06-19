
import useFetch from "./useFetch";

function Todos() {
    const data = useFetch("https://dummyjson.com/todos");

    return (
        <>
            {data.map((todo) => (return(<>
                <p key={todo.id}>{todo.todo}</p>
            </>))}
        </>)
    );
}

export default Todos;