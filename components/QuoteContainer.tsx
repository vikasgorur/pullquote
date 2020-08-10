import React from 'react';

import QuoteCard from "./QuoteCard";
import QuoteInput from "./QuoteInput";

export default function(props) {
    const [quote, updateQuote] = React.useState("");

    return (
        <div>
            <QuoteInput onChange={(q: string) => updateQuote(q)} />
            <QuoteCard quote={quote}/>
        </div>
    )
}