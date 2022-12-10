import Link from "next/link";
import { useRouter } from "next/router";
import styles from './ActiveLink.module.css';

type propsActiveLink = {
  text: string;
  href: string;
}

const ActiveLink = ( { text, href } : propsActiveLink ) => {

  const { asPath } = useRouter();

  return (
    <Link href={href} className={ asPath === href ? `${styles.menu_item} ${styles.is_active}` : styles.menu_item}>
      {text}
    </Link>
  )
}

export default ActiveLink;
