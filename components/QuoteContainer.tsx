import React from 'react';

import QuoteCard from "./QuoteCard";
import QuoteInput from "./QuoteInput";

export default function QuoteContainer(props) {
    const [quote, updateQuote] = React.useState("");

    return (
        <div className="container mx-auto px-40">
            <div className="text-6xl">Pull Quotes</div>
            <div className="">
                <div className="">
                    <QuoteInput onChange={(q: string) => updateQuote(q)} />
                </div>
            </div>
            <div className="">
                <div className="">
                    <QuoteCard quote={quote}/>
                </div>
            </div>
        </div>
    )
}