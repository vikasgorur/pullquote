export default function QuoteInput(props) {
    const { onChange } = props;
    return (
        <textarea
            className="appearence-none border rounded w-full py-2 px-4"
            placeholder="All happy families ..."
            onChange={e => onChange(e.currentTarget.value)}
        />
    );
}