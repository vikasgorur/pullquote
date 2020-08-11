import ContentEditable from "react-contenteditable";
import styles from './QuoteCard.module.css';

const placeholderHtml = `
    <div class=${styles.quote_text}>
        All happy families are alike, every unhappy family is unhappy in its own way.
    </div>
`;

export default function QuoteText(props) {
    return (
        <ContentEditable
            html={placeholderHtml}
            disabled={false}
            onChange={(e) => console.log(e.currentTarget.innerText)}
        />
    )
}