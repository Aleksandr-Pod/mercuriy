import styles from "./contacts.module.css"

export default function Contacts() {
  return (
    <section className={styles.section}>
      <h2>Наши контакты</h2>
      <p>Бухгалтер - Светлана  Сафронова</p>
      <p>ВрИО головы правления - Наталья</p>
      <p>Председатель Ревизионной комиссии - Ляликова Светлана Георгиевна</p>
    </section>
  )
}