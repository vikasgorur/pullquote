import React from 'react';
import ContentEditable from 'react-contenteditable';
import styles from './QuoteInfo.module.css';
import Editable from './Editable';

export default function QuoteInfo(props) {
    const { author, title, year, onInfoChange } = props;
    return (
        <div className={styles.quote_info}>
            <Editable value={year} className={styles.quote_year} onContentChange={onInfoChange} />
            <div>
                <Editable value={title} className={styles.quote_title} onContentChange={onInfoChange} />
                <Editable value={author} className={styles.quote_title} onContentChange={onInfoChange} />
            </div>
        </div>
    )
}