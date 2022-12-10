import styles from './DarkLayout.module.css';

type DarkLayout = {
  children: React.ReactNode;
}
const DarkLayout = ({children} : DarkLayout) => {
  return (
    <div className={styles.DarkLayout_container}>
      <h3>DarkLayout</h3>
      { children }
    </div>
  )
}

export default DarkLayout