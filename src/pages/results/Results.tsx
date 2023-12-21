import React from 'react';
import Header from "../components/header/Header";
import ArrowBack from "../components/arrowBack/ArrowBack";

const Results = () => {
    return (
        <div className='wrapper'>
            <div className='div'>
                <Header title={'Results'}/>
                <h2>Order basket redesing</h2>
                <div>
                    <ArrowBack/>
                </div>
            </div>
        </div>
    );
};

export default Results;