import ContentEditable from 'react-contenteditable';
import styles from './QuoteInfo.module.css';

const placeHolderYear = `<div class=${styles.quote_year}>1986</div>`;
function Year(props) {
    const { year } = props;
    return <ContentEditable
        html={placeHolderYear}
        disabled={false}
        onChange={(e) => e}
    />
}

const placeHolderAuthor = `<div class=${styles.quote_title}>Leo Tolstoy</div>`;

function Author(props) {
    const { author } = props;
    return <ContentEditable
        html={placeHolderAuthor}
        disabled={false}
        onChange={(e) => e}
    />
}

const placeHolderTitle = `<div class=${styles.quote_title}>Anna Karenina</div>`;

function Title(props) {
    const { title } = props;
    return <ContentEditable
        html={placeHolderTitle}
        disabled={false}
        onChange={(e) => e}
    />
}

export default function QuoteInfo(props) {
    const { quote: string } = props;
    return (
        <div className={styles.quote_info}>
            <Year />
            <div>
                <Title />
                <Author />
            </div>
        </div>
    )
}