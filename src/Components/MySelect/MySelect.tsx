import React from 'react'
import styles from './MySelect.module.scss'

export interface IOptions {
    value: string,
    labelText: string
}

interface IProps {
    labelText: string,
    value: string,
    handlerOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    options: IOptions[]
}

export const MySelect: React.FC<IProps> = ({ labelText, value, handlerOnChange, options }) => {


    let content = (options.map((item, i) => {
        return <option
            key={i}
            value={item.value}>
            {item.labelText}
        </option>
    }))

    return (
        <div className={styles.mainContainer}>
            <label className={styles.labelText}>
                {labelText}
            </label>

            <select className={styles.selectContainer}
                value={value}
                onChange={handlerOnChange}
            >
                {content}
            </select>
        </div>
    )
}



