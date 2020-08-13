export default function Button(props) {
    const { label, onClick } = props;
    return <button
            className="bg-transparent border border-black font-bold py-2 px-4 rounded-full"
            onClick={onClick}
        >
        {label}
    </button>
}