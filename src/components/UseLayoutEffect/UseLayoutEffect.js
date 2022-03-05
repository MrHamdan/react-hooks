import React, { useLayoutEffect, useState } from 'react';

export default function UseLayoutEffect(){
    const [count , setCount] = useState(0);
    useLayoutEffect(() => {
        console.log(count);
    }, [count]);
    return(
        <>
        <button onClick={()=> setCount(c => c + 1)}>Increment</button>
        <div>{count}</div>
        </>
    );
}