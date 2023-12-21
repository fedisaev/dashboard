import {createContext} from "react";

export const TestsContext = createContext({});

export const TestsContextProvider = ({children})=>{
    return (
        <TestsContext.Provider value={{

    }}>
    {children}
    </TestsContext.Provider>
    )
}