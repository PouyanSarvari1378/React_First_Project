import * as React from 'react';
import styles from './Box.module.css'

export const Box = (props) => {
    const {title} = props
  return (
    <div className={styles.box}>
        <h3>{title}</h3>
    </div>
  )
}
