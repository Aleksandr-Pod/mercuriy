import { Logo } from "../logo";
import style from "./header.module.css"
import Link from "next/link";
const menu = [
  ["О нас", "/"],
  ["Новости", "/news"],
  ["Информация", "/info"],
  ["Контакты", "/contacts"]
];

export default  function Header() {

  return (
      <ul className={style.ul}>
        <Logo />
        {menu.map(([title, goto]) => <li key={title} className='hover:shadow-lg'>
          <Link href={goto}>{title}</Link>
        </li>)}
      </ul>
  );
}