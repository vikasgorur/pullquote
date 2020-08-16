import styles from "./Footer.module.css";

export default function Footer(props) {
  return <div className={styles.footer}>
    Made by <a className="underline" href="https://twitter.com/vikasgorur">@vikasgorur</a>. Works on desktop + Chrome.
  </div>
}