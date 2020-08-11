import React from 'react';

import QuoteCard from "./QuoteCard";

export default function QuoteContainer(props) {
    return (
        <div className="container mx-auto px-40">
            <div className="text-6xl">Pull Quote</div>
            <div className="">
                <div className="">
                    <QuoteCard />
                </div>
            </div>
        </div>
    )
}