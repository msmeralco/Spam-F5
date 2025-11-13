
import { createContext } from "react";
import { useState } from "react";


const sinagContext = createContext();
export default function SinagContext({children}) {

    const [address, setAddress] = useState("");
    const [base, setBaseline] = useState(0);
    const [current, setCurrent] = useState(0);
    const [energySaved, setEnergySaved] = useState(0);
    const [sinagTokens, setSinagTokens] = useState(0);
    const [rate, setRate] = useState(0);


    return(
        <sinagContext.Provider value={{}}>
            {children}
        </sinagContext.Provider>
    )
}
