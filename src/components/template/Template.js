import React from 'react'

import TemplateContainer from 'containers/TemplateContainer'
import styles from './Template.module.scss'

const Template = () => (
  <>
    <div className={`${styles.template} ${styles.active}`}>Template</div>
    <TemplateContainer />
  </>
)

export default Template
