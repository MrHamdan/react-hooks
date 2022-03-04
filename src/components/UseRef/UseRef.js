import React, { useEffect, useRef, useState } from 'react';

export default function UseRef() {
    const [name, setName] = useState('');
    const prevName = useRef('');
    useEffect(() => {
        prevName.current = name;
    },[name]);
    return(
        <>
        <input value={name} onChange={e => setName(e.target.value)}/>
        <div>My name is {name} and it used to be {prevName.current}</div>
        </>
    );
}