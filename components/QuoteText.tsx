import React from "react";
import ContentEditable from "react-contenteditable";
import styles from "./QuoteCard.module.css";

interface QuoteTextState {
    html: string;
    firstFocus: boolean;
}

interface QuoteTextProps {
    onQuoteChange(quote: string);
    onQuoteFinish(quote: string);
}

export default class QuoteText extends React.Component<
    QuoteTextProps,
    QuoteTextState
    > {
    contentEditable: React.Ref<HTMLDivElement>;

    constructor(props: QuoteTextProps) {
        super(props);
        this.contentEditable = React.createRef();
        this.state = {
            html:
                "The impulse to write things down is a peculiarly compulsive one, inexplicable to those who do not share it, useful only"
                + " accidentally, only secondarily, in the way that any compulsion tries to justify itself.<span>&rdquo;</span>",
            firstFocus: true,
        };
    }

    handleChange = (e) => {
        this.setState({ html: e.target.value });
        this.props.onQuoteChange(e.target.value);
    };

    handleBlur = (e) => {
        //this.setState({ html: this.state.html + `<span>&rdquo;</span>`});
        this.props.onQuoteFinish(e.target.value);
    };

    handleFocus = () => {
        if (this.state.firstFocus) {
            this.setState({ html: "<span>&rdquo;</span>", firstFocus: false });
        }
    }

    // <span>&rdquo;</span>
    render() {
        return (
            <div className={styles.quote_text}>
                <span className={styles.quote_open}>&ldquo;</span>
                <ContentEditable
                    html={this.state.html}
                    disabled={false}
                    className={styles.quote_input}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                />
            </div>
        );
    }
}
