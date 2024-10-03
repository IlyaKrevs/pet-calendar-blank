import React, { ReactNode } from 'react'
import styles from './MyBtn.module.scss'

interface IProps {
    children: ReactNode,
    // onClick: () => void,
}

export const MyBtn: React.FC<IProps> = ({ children }) => {

    return (
        <button className={styles.mainContainer} >
            {children}
        </button>
    )
}
