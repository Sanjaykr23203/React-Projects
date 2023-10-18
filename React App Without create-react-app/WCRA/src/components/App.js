import React from 'react';
import { WordCountProvider } from './context/WordCountContext';
import TextApp from './TextApp';

function App() {
    return (
        <WordCountProvider>
        <TextApp></TextApp>
        </WordCountProvider>
    )
}
export default App