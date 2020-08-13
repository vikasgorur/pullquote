import React from 'react';
import styles from './QuoteCard.module.css';
import QuoteText from './QuoteText'
import QuoteInfo from './QuoteInfo';
import { copyNodeToClipboard } from '../lib/image';
import { interpret } from 'xstate';
import { quoteUIMachine } from '../lib/machine';

export default class QuoteCard extends React.Component {
    state = {
        current: quoteUIMachine.initialState       
    }

    service = interpret(quoteUIMachine).onTransition(current =>
        this.setState({ current })
    );

    card: React.Ref<HTMLDivElement>;

    constructor(props) {
        super(props);
        this.card = React.createRef();
    }

    componentDidMount() {
        this.service.start();
    }

    componentWillUnmount() {
        this.service.stop();
    }

    render() {
        const { send } = this.service;
        const { title, author, year } = this.state.current.context;

        return (
            <div className={styles.quote_card} ref={this.card}>
                <QuoteText onQuoteChange={(quote) => {
                    send({ type: 'edit_quote', quote })
                }} />
                <QuoteInfo
                    title={title}
                    author={author}
                    year={year}
                    onInfoChange={() => send('edit_info')}
                />
            </div>
        );
    }
}