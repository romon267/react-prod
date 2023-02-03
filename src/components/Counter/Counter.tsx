import {useState} from "react";
import cls from "./Counter.module.scss";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    return <div>
        <h1>{count}</h1>
        <button className={cls.button} onClick={increment}>click</button>
    </div>
}
