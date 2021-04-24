import React from 'react'
import styles from './button-danger.module.css'

type Props = {
  handleClick: () => void

  children: React.ReactNode
}

const ButtonDanger: React.FC<Props> = ({ handleClick, children }: Props) => {
  const buttonClick = (event: React.SyntheticEvent) => {
    event.stopPropagation()
    handleClick()
  }
  return (
    <button type="button" className={styles.button} onClick={buttonClick}>
      {children}
    </button>
  )
}

export { ButtonDanger }
