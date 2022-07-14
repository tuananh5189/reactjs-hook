import { useState, useEffect, useRef } from "react";

const UseRefHookDemo2 = () => {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
        const newValue = inputElement.current.value;
        console.log('newValue====',newValue);
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}
export default UseRefHookDemo2;