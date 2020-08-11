import ContentEditable from "react-contenteditable";
import styles from './QuoteCard.module.css';

export default function QuoteText(props) {
    return (
        <ContentEditable
            html={"<div class=" + styles.quote_text + " />"}
            disabled={false}
            onChange={(text) => console.log(text)}
        />
    )
}