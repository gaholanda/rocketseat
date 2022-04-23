import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

import styles from "./SignInButton.module.scss";

export function SignInButton() {

  const isUserSignedIn = false;

  if(isUserSignedIn){
    return (
      <button type="button" className={styles.button}>
        <FaGithub color="#04d361" />
        Nome do usuário
        <FiX color="#737380" className={styles.close} />
      </button>
    )
  }

  return(
    <button type="button" className={styles.button}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  )
}