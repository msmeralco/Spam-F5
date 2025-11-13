
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
    const [EnvironmentalImpact, setEnvironmentalImpact] = useState(0);
    const [toOffset, setToOffset] = useState(0);
    const [message, setMessage] = useState("Please upload your bill in the Bill Tracker");
    const [suggestions, setSuggestions] = useState("Please insert your bill to get suggestions.");
    const [savedPercentage, setSavedPercentage] = useState(0);
    
    const update_Suggestions = (sugg) => {
        setSuggestions(sugg);
    }

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
    
    const update_environmentalImpact = (impact) => {
        setEnvironmentalImpact(impact);
    }

    const update_toOffset = (offset) => {
        setToOffset(offset);
    }

    const update_Message = (msg) => {
        setMessage(msg);
    }

    const update_percentageSaved = (percentage) => {
        setSavedPercentage(percentage);
    }


    return(
        <sinagContext.Provider value={{address, Baseline, currentUsage, energySaved, sinagTokens, rate, history,
        update_address, update_Baseline, update_currentUsage, update_energySaved, update_sinagTokens, update_rate, 
        update_History, add_HistoryEntry , update_Suggestions, suggestions, savedPercentage, update_percentageSaved,
        EnvironmentalImpact, update_environmentalImpact, toOffset, update_toOffset, message , update_Message}}>
            {children}
        </sinagContext.Provider>
    )
}
