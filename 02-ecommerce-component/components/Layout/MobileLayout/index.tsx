import styles from './style.module.css' 

export const MobileLayout = ({children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}
