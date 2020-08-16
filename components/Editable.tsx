import React from 'react';
import ContentEditable from 'react-contenteditable';

interface EditableState {
    edited: boolean;
    html: string
}

interface EditableProps {
    className: string;
    value: string;
    onContentChange()
}

export default class Editable extends React.Component<EditableProps, EditableState> {
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
