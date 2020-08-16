import styles from "./ActionBar.module.css";

export default function Button(props) {
  const { label, onClick } = props;
  return (
    <button
      className="border-2 border-black hover:bg-secondary font-bold py-2 px-4 rounded-full outline-none focus:outline-none"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
