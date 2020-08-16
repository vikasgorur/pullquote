import styles from "./HelpText.module.css";

export default function HelpText(props) {
    return <div className={styles.help_text}>
        This is an app that helps you post a quote from a book to Twitter.
        <ol className="list-decimal list-inside">
            <li className={styles.list_item}>Click on the text and type in your quote.</li>
            <li className={styles.list_item}>Edit the author, etc. if the auto-fill was wrong.</li>
            <li className={styles.list_item}>Click "Copy" to copy the image; paste it into Twitter.</li>
        </ol>
    </div>
}