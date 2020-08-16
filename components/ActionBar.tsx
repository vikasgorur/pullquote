import Button from "./Button";
import styles from "./ActionBar.module.css";

export default function ActionBar(props) {
  const { onCopy } = props;
  return (
    <div className={styles.action_bar}>
      <Button label="Copy" onClick={onCopy} />
    </div>
  );
}
