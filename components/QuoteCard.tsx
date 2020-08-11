import { useState } from 'react';
import styles from './QuoteCard.module.css';
import QuoteText from './QuoteText'
import QuoteInfo from './QuoteInfo';

export default function QuoteCard(props) {
    const [text, setText] = useState("");

    return (
        <div className={styles.quote_card}>
            <QuoteText onQuoteChange={t => setText(t)} />
            <QuoteInfo quote={text}/>
        </div>
    );
}