
import { Logo } from "../logo";
import style from "./header.module.css"
import Link from "next/link";
import Image from "next/image"

const menu = [
  ["Про нас", "/"],
  ["Новини", "/news"],
  ["Інформація", "/info"],
  ["Контакти", "/contacts"]
];

export default function Header() {

  return (
      <ul className={style.menu}>
        <Image src="/mercuriy-logo.png" width={64} height={64} alt="logo" className="logo"/>
        <ul className={style.menu_list}>
          {menu.map(([title, goto]) => <li key={title}>
            <Link href={goto}>{title}</Link>
          </li>)}
        </ul>
        <Logo/>
      </ul>
  );
}