import useSWR from 'swr';

import ContentEditable from 'react-contenteditable';
import styles from './QuoteInfo.module.css';

import { searchQuote } from '../lib/gbooks';

const yearHtml = (value: number) => `<div class=${styles.quote_year}>${value}</div>`;
function Year(props) {
    const { year } = props;
    return <ContentEditable
        html={yearHtml(year)}
        disabled={false}
        onChange={(e) => e}
    />
}

const authorHtml = (value: string) => `<div class=${styles.quote_title}>${value}</div>`;
function Author(props) {
    const { author } = props;
    return <ContentEditable
        html={authorHtml(author)}
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
    const { quote } = props;
    const { data, error } = useSWR(
        quote,
        searchQuote
    );
    
    let title = data?.title;
    let author = data?.author;
    let year = data?.year;

    return (
        <div className={styles.quote_info}>
            <Year year={year}/>
            <div>
                <Title title={title}/>
                <Author author={author} />
            </div>
        </div>
    )
}