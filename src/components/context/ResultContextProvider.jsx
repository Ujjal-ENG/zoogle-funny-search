import React, { createContext, useContext, useEffect, useState } from 'react';

const resultContext = createContext();

const baseURL = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getResults = async (type) => {
            setLoading(true);
            const response = await fetch(`https://google-search72.p.rapidapi.com/${type}`, {
                method: 'GET',
                headers: {
                    'x-user-agent': 'desktop',
                    'X-RapidAPI-Key': 'e4f895515dmshdd1fc9a6a8b3d44p12793cjsn920672b766b6',
                    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
                }
            });
            const data = response.json();
            setResults(data);
            setLoading(false);
            console.log(data);
        };
    }, []);

    return <resultContext.Provider value={{ results, searchTerm, setSearchTerm, loading }}>{children}</resultContext.Provider>;
};

export const useResultContext = () => useContext(resultContext);
