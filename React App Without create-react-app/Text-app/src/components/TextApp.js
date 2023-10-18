import React from "react";
import { UseWordCountContext } from "./context/WordCountContext";
// import './style.scss';


function TextApp() {
    const {
        textbox1Value,
        textbox2Value,
        wordCounts,
        clearText,
        caluculateWordCount,
        setTextBox1Value,
        setTextBox2Value
    } = UseWordCountContext();

    return (
        <div>
            <div className='title'>
                <h2>React Text Comparision App</h2>
            </div>
            <div className="container">
                <textarea value={textbox1Value} onChange={(e) => setTextBox1Value(e.target.value)} placeholder='Enter text in TextBox1'></textarea><br></br>
                <textarea value={textbox2Value} onChange={(e) => setTextBox2Value(e.target.value)} placeholder='Enter text in TextBox1'></textarea><br></br>
                <button onClick={clearText}>Clear</button>
                <button onClick={caluculateWordCount}>Submit</button>
                <div className="table-section">
                    <table>
                        <thead>
                            <tr>
                                <th>Text</th>
                                <th>Word Count in TextBox1</th>
                                <th>Word Count in TextBox2</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wordCounts.map((w, i) => (
                                <tr key={i}>
                                    <td>{w.word}</td>
                                    <td>{w.countTextBox1}</td>
                                    <td>{w.counttextBox2}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TextApp;