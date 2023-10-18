import React, { createContext, useContext, useState } from 'react'

const WordCountContext = createContext();

export const UseWordCountContext = () => {
    return useContext(WordCountContext);
}

export const WordCountProvider = ({ children }) => {

    const [textbox1Value, setTextBox1Value] = useState('');
    const [textbox2Value, setTextBox2Value] = useState('');
    const [wordCounts, setWordCounts] = useState([]);

    const clearText = () => {
        setTextBox1Value('');
        setTextBox2Value('');
        setWordCounts([]);
    }

    const caluculateWordCount = () => {
        const specialCharacterRegex = /[-“•/!@#$%^&*(),.?"':;{}|━<>”]/g;
        const ignoreWords = ['[', 'a', 'an', 'as', 'i', 'go', 'the', '-', '+', '_', ']'];

        const wordsTextbox1 = textbox1Value.replace(specialCharacterRegex, '').trim().split(/\s+/).
            map(word => word.toLowerCase()).filter(word => !ignoreWords.includes(word));

        const wordsTextbox2 = textbox2Value.replace(specialCharacterRegex, '').trim().split(/\s+/).
            map(word => word.toLowerCase()).filter(word => !ignoreWords.includes(word));

    
        if (wordsTextbox1.length === 1 && wordsTextbox2.length === 1) {
            return;
        }

        const combimewords = [...new Set([...wordsTextbox1, ...wordsTextbox2])];

        combimewords.sort((wordA, wordB) => {
            const countA = wordsTextbox1.filter(w => w.toLowerCase() === wordA.toLowerCase()).length + wordsTextbox2.filter(w => w.toLowerCase() === wordA.toLowerCase()).length;
            const countB = wordsTextbox1.filter(w => w.toLowerCase() === wordB.toLowerCase()).length + wordsTextbox2.filter(w => w.toLowerCase() === wordB.toLowerCase()).length;
            return countB - countA;
        })

        setWordCounts(combimewords.map(word => ({
            word: word,
            countTextBox1: wordsTextbox1.filter(w => w === word).length,
            counttextBox2: wordsTextbox2.filter(w => w === word).length
        })))
    };

    const contextValue = {
        textbox1Value,
        textbox2Value,
        wordCounts,
        clearText,
        caluculateWordCount,
        setTextBox1Value,
        setTextBox2Value
    };

    return (
        <WordCountContext.Provider value={contextValue}>
            {children}
        </WordCountContext.Provider>
    )
}