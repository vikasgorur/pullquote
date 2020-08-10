export default function QuoteInput(props) {
    const { onChange } = props;
    return <input type="text" onChange={e => onChange(e.currentTarget.value)} />;
}