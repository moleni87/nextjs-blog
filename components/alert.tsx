import styles from '../styles/alert.module.css'
import cn from 'classnames'

export default function Alert({
  children,
  type,
}: {
  children: string
  type: string
}) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
  )
}
