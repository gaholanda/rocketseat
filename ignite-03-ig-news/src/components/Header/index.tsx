import Image from "next/image";
import { SignInButton } from "../SignInButton";

import styles from "./Header.module.scss";

export function Header(){
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Image src="/images/logo.svg" width={100} height={50} alt="ig news" />
        <nav>
          <a className={styles.active}>Home</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  )
}