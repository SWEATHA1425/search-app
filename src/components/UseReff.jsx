import React from 'react'
import {useState, useEffect, useRef} from 'react'
function UseReff(){
    const [inputValue, setInputValue] = useState("");
    const prevValue = useRef("");

    useEffect(()=>{
        prevValue.current = inputValue;
    },[inputValue]);

    return(
        <>
            <hr className='mb-4'/>
            <h1 className='text-2xl font-bold mb-4'>use reference hook</h1>
            <input className="border px-2 py-1 mb-4"
            value={inputValue} onChange={(e) => setInputValue(e.target.value)} type='text' />

            <h1 className='text-2xl mb-4'>Current value : {inputValue}</h1>
            <h1 className='text-2xl mb-4'>prev value : {prevValue.current}</h1>
        </>
    )

}

export default UseReff;