import React from 'react'
import styles from './TemplateComponent.module.scss'

const TemplateComponent = ({ prop, children }) => {
  return (
    <div className={`${styles.template} ${styles.active}`}>
      {prop}-{children}
    </div>
  )
}

export default TemplateComponent
