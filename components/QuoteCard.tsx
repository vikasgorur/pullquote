import React from 'react';
import styles from './QuoteCard.module.css';
import QuoteText from './QuoteText'
import QuoteInfo from './QuoteInfo';
import { copyNodeToClipboard } from '../lib/image';

export default class QuoteCard extends React.Component {
    card: React.Ref<Node>;

    constructor(props) {
        super(props);
        this.card = React.createRef();
    }

    render() {
        return (
            <div className={styles.quote_card} ref={this.card}>
                <QuoteText onQuoteChange={t => copyNodeToClipboard(this.card.current)} />
                <QuoteInfo quote={""}/>
            </div>
        );
    }
}