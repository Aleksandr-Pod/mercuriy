import { FullLogo } from "../logo";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <div className={styles.tm}>
      <h3>Developed by </h3>
      <FullLogo />
    </div>
  )
}