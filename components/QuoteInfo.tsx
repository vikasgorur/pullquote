import React from 'react';
import ContentEditable from 'react-contenteditable';
import styles from './QuoteInfo.module.css';

interface EditableState {
    edited: boolean;
    html: string
}

interface EditableProps {
    className: string;
    value: string;
    onContentChange()
}

class Editable extends React.Component<EditableProps, EditableState> {
    contentEditable: React.Ref<HTMLDivElement>;

    constructor(props: EditableProps) {
        super(props);
        this.contentEditable = React.createRef();
        this.state = { html: "", edited: false }
    }

    handleChange = e => {
        this.setState({html: e.target.value, edited: true});
        this.props.onContentChange();
    };

    render() {
        let html = this.state.edited ? this.state.html : `<div>${this.props.value}</div>`
        return (
            <ContentEditable
                html={html}
                disabled={false}
                className={this.props.className}
                onChange={this.handleChange}
            />
        )
    }
}

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