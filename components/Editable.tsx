import React from "react";
import ContentEditable from "react-contenteditable";

interface EditableState {
  edited: boolean;
  html: string;
}

interface EditableProps {
  className: string;
  value: string;
  onContentChange();
}

export default class Editable extends React.Component<
  EditableProps,
  EditableState
  > {
  contentEditable: React.Ref<HTMLDivElement>;

  constructor(props: EditableProps) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = { html: "", edited: false };
  }

  handleChange = (e) => {
    this.setState({ html: e.target.value, edited: true });
    this.props.onContentChange();
  };

  handleFocus = () => {
    // @ts-ignore
    if (this.contentEditable.current) {
      // @ts-ignore
      let elem = this.contentEditable.current;
      document.getSelection().setBaseAndExtent(elem, 0, elem, elem.childNodes.length);
    }
  }

  render() {
    let html = this.state.edited
      ? this.state.html
      : this.props.value;

    return (
      <ContentEditable
        html={html}
        disabled={false}
        innerRef={this.contentEditable}
        className={this.props.className}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
      />
    );
  }
}
