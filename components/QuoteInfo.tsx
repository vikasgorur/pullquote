import ContentEditable from 'react-contenteditable';
import styles from './QuoteInfo.module.css';

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
        <div>
            <Title />
            <Author />
        </div>
    )
}