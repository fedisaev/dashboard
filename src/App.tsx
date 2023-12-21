import React, {FC} from 'react';
import './App.css';
import 'typeface-roboto';
import 'typeface-montserrat';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./router/AppRouter";
import {TestsContextProvider} from "./context/testsContext";

const App: FC = () => {
    return (
        <TestsContextProvider>
            <BrowserRouter>
                <AppRouter/>
            </BrowserRouter>
        </TestsContextProvider>
    );
};

export default App;