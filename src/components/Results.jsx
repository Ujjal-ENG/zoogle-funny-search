import React from 'react';
import { useLocation } from 'react-router-dom';
import { useResultContext } from './context/ResultContextProvider';

const Results = () => {
    const location = useLocation();
    // if (loading) return <Loading />;
    return <div>Results</div>;
};

export default Results;
