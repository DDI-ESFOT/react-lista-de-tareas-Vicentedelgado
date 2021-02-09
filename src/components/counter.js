
import {useState} from "react";
const Counter =() =>{
    const [counter, setCounter]= useState(0);


    console.log()

    const handDecrement =() => {
        console.log("DECREMENT");
        setCounter(counter-1);
    };
    const handIncrement = () => {
        console.log("INCREMENT");
        //setCounter(counter+1);
        setCounter((prevState)=>{
            return prevState+1;
        });
    };
    const handLeReset = () => {
        setCounter(0);
    };
    return (
        <>
            <h1>Contador</h1>
            <div>
                <button onClick={handDecrement}>-</button>
                <span>{counter}</span>
                <button onClick={handIncrement}>+</button>
            </div>
            <div>
                <button onClick={handLeReset}>Reiniciar</button>
            </div>
        </>
    );
};
export default Counter;