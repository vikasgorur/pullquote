import ContentEditable from "react-contenteditable";
import styles from './QuoteCard.module.css';

const placeholderHtml = `
    <div class=${styles.quote_text}>
    </div>
`;

export default function QuoteText(props) {
    const { onQuoteChange } = props;
    return (
        <ContentEditable
            html={placeholderHtml}
            disabled={false}
            onChange={(e) => null}
            onBlur={(e) => onQuoteChange(e.currentTarget.innerText)}
        />
    )
}