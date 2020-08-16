import React from "react";
import ContentEditable from "react-contenteditable";
import styles from "./QuoteCard.module.css";

interface QuoteTextState {
  html: string;
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
        "We were somewhere Barstow, at the edge of the desert, when the drugs began to take hold. We knew we would get into the ether soon enough.",
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
        />
      </div>
    );
  }
}
