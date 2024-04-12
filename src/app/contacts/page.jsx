import styles from "./contacts.module.css"

export default function Contacts() {
  return (
    <div className={styles.bg}>
      <section>
        <h2 style={{backgroundColor: "transparent"}}>Наши контакти</h2>
        <ul className={styles.contacts_list}>
          <p>Глава правління - Сафронова Світлана Володимирівна </p>
        </ul>
          
        <h2 style={{backgroundColor: "transparent"}}>Члени правління:</h2>
        <ul className={styles.contacts_list}>
          <p>Вовк Андрій;</p>
          <p>Даниленко Василь;</p>
          <p>Балатенюк Степан;</p>
          <p>Валявський Валерій;</p>
          <p>Ткачик Ніна;</p>
          <p>Цибуля Сергій;</p>
          <p>Богачук Наталія.</p>
        </ul>
      </section>
    </div>
  )
}