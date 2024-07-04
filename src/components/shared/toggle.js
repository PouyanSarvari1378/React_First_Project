import * as React from 'react';
import styles from './toggle.module.css'

export const Toggle = (props) => {
    const {title, id} = props.box
    const {showingBoxes, checkedHandler} = props
    
  return (
    <div className={styles.ToggleContainer}>
        <label>
            <input 
            type='checkbox' 
            onChange={() => checkedHandler(id)}
            checked={showingBoxes.includes(id)} />
            <span>{title}</span>
        </label>
    </div>
  )
}
