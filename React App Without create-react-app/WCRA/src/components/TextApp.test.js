import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { WordCountProvider } from "./context/WordCountContext";
import TextApp from "./TextApp";
import {render, fireEvent} from '@testing-library/react';

describe('Word Count App', ()=>{
    test('renders without erors', () => { 
        render(
            <WordCountProvider>
            <TextApp></TextApp>
            </WordCountProvider>
        )
     })
})