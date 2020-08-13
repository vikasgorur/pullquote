import Button from "./Button";
import styles from "./ActionBar.module.css";

export default function ActionBar(props) {
    return <div className={styles.action_bar}>
        <Button label="Copy" />
    </div>
}