
import { useState } from "react";
import ReactToDo from "./ReactToDo";

const ReactMemoBad = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState(["todo 1", "todo 2"]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <ReactToDo todos={todos} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
}
export default ReactMemoBad;