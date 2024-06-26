import styles from "./info.module.css"

export default function Info() {
  return (
    <div className={styles.bg}>
      <section>
        <h2>Информація та документи</h2>
        <p className={styles.art1}>Увага, члени кооперативу! Велике прохання, по можливості, всі розрахунки по світлу, воді надавати на р.р. кооперативу по реквизитам: <br /><br />
          Отримувач: ОК СК 'Меркурий'<br/>
          Код 209 899 64 <br/>
          Р/р UA 6132 8845 00000 2600 4300 2769 60<br/>
          Банк отримувача:  Код: 328845<br/>
          АТ Ощадбанк, Чорноморська Філія<br/><br/>
          Призначення платежу: <br/>
          наприклад - Оплата за спожиту ел. енергію в січні 2024 р. від ПІБ., адреса: вул..., покази: на початок і кінець місяця.<br /><br />
          Просьба квитанции отправлять бухгалтеру на Viber +380992220859 @Меркурий Бухг.
        </p>
        <p className={styles.art2}>
          Вивіз сміття:<br/>
          (097) 951 91 47 - Константин
        </p>
        <p className={styles.art2}>
          Асенізатор - викачка ями:<br />
          (067) 981 37 60 - Віталій
        </p>
      </section>
    </div>
  )
}