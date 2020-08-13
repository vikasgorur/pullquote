import React from 'react';
import ContentEditable from "react-contenteditable";
import styles from './QuoteCard.module.css';

const placeholderHtml = `
    <div />
`;

interface QuoteTextState {
    html: string
}

interface QuoteTextProps {
    onQuoteChange(quote: string);
}

export default class QuoteText extends React.Component {
    contentEditable: React.Ref<HTMLDivElement>;

    state: QuoteTextState
    props: QuoteTextProps

    constructor(props: QuoteTextProps) {
        super(props);
        this.contentEditable = React.createRef();
        this.state = { html: placeholderHtml }
    }

    handleChange = e => {
        this.setState({html: e.target.value});
        this.props.onQuoteChange(e.target.value);
    };

    render() {
        return (
            <ContentEditable
                html={this.state.html}
                disabled={false}
                className={styles.quote_text}
                onChange={this.handleChange}
            />
        )
    }
}