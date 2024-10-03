import React, { ReactNode } from 'react'
import styles from './BigCard.module.scss'

interface IProps {
    children: ReactNode
    type: 'basic' | 'primary',
}

export const BigCard: React.FC<IProps> = ({ type, children }) => {

    let stylesArr = [styles.mainContainer]

    if (type === 'basic') {
        stylesArr.push(styles.basic)
    } else if (type === 'primary') {
        stylesArr.push(styles.primary)
    }

    return (
        <div className={stylesArr.join(' ')}>
            {children}
        </div>
    )
}
