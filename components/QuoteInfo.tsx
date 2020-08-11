import useSWR from 'swr';

import ContentEditable from 'react-contenteditable';
import styles from './QuoteInfo.module.css';

import { searchQuote } from '../lib/gbooks';

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

const titleHtml = (value: string) => `<div class=${styles.quote_title}>${value}</div>`;

function Title(props) {
    const { title } = props;
    
    return <ContentEditable
        html={titleHtml(title)}
        disabled={false}
        onChange={(e) => e}
    />
}

export default function QuoteInfo(props) {
    const { quote: string } = props;
    const { data, error } = useSWR(
        "We were somewhere around Barstow, on the edge of the desert when the drugs began to take hold.",
        searchQuote
    );
    
    let title = (data && data.title) || "";
    console.dir(data);
    console.log(error);
    return (
        <div className={styles.quote_info}>
            <Year />
            <div>
                <Title title={title}/>
                <Author />
            </div>
        </div>
    )
}