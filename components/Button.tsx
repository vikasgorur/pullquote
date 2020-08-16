import styles from "./ActionBar.module.css";

export default function Button(props) {
  const { label, onClick } = props;
  return (
    <button
      className="bg-transparent border border-black font-bold py-2 px-4 rounded-full outline-none focus:outline-none"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
