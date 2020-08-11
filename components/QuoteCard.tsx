import styles from './QuoteCard.module.css';
import QuoteText from './QuoteText'
import QuoteInfo from './QuoteInfo';

export default function QuoteCard(props) {
    return (
        <div className={styles.quote_card}>
            <QuoteText />
            <QuoteInfo />
        </div>
    );
}