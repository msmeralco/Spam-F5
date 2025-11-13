
import { createContext } from "react";
import { useState } from "react";


const sinagContext = createContext();

export { sinagContext };

export default function SinagContext({children}) {

    const [address, setAddress] = useState("");
    const [Baseline, setBaseline] = useState(0);
    const [currentUsage, setCurrentUsage] = useState(0);
    const [energySaved, setEnergySaved] = useState(0);
    const [sinagTokens, setSinagTokens] = useState(0);
    const [rate, setRate] = useState(0);
    const [history, setHistory] = useState([]);

    const update_currentUsage = (usage) => {
        setCurrentUsage(usage);
    } 

    const update_energySaved = (energy) => {
        setEnergySaved(energy);
    }

    const update_sinagTokens = (tokens) => {
        setSinagTokens(tokens);
    }

    const update_rate = (newRate) => {
        setRate(newRate);
    }

    const update_address = (addr) => {
        setAddress(addr);
    }

    const update_Baseline = (baseValue) => {
        setBaseline(baseValue);
    }

    const update_History = (newHistory) => {
        setHistory(newHistory);
    }

    const add_HistoryEntry = (entry) => {
        // entry should be { month, billAmount, tokensEarned, status }
        setHistory(prev => [...prev, entry]);
    }




    return(
        <sinagContext.Provider value={{address, Baseline, currentUsage, energySaved, sinagTokens, rate, history,
        update_address, update_Baseline, update_currentUsage, update_energySaved, update_sinagTokens, update_rate, 
        update_History, add_HistoryEntry}}>
            {children}
        </sinagContext.Provider>
    )
}
