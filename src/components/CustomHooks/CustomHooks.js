import React from 'react';
import UseLocalStorage from '../UseLocalStorage/UseLocalStorage';
import UseUpdateLogger from '../UseUpdateLogger/UseUpdateLogger';

export default function CustomHooks(){
    const [name, setName] = UseLocalStorage('name', '');
    UseUpdateLogger(name);
    return(
        <>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        </>
    );
}