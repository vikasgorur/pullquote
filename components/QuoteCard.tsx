import styles from './QuoteCard.module.css';
import QuoteText from './QuoteText'

export default function QuoteCard(props) {
    return (
        <div className={styles.quote_card}>
            <QuoteText />
        </div>
    );
}