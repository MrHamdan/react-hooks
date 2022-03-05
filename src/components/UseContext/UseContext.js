import React, { useState } from 'react';
import ClassContextComponent from '../ClassContextComponent/ClassContextComponent';
import FunctionContextComponent from '../FunctionContextComponent/FunctionContextComponent';
import { ThemeProvider } from '../ThemeContext/ThemeContext';

export default function UseContext() {
    return (
        <ThemeProvider>
            <FunctionContextComponent/>
        </ThemeProvider>
    );
}