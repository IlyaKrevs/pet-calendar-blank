import React from 'react'
import styles from './Calendar.module.scss'

import { monthNames } from '../../vars/Options'

interface IProps {
    year: string,
    month: string,
}

export const Calendar: React.FC<IProps> = ({ year, month }) => {

    function makeNumbersArr(year: number, month: number): number[] {

        const firstDay = new Date(year, month, 1)
        const lastDay = new Date(year, month + 1, 0)


        const start = new Date(firstDay)
        start.setDate(firstDay.getDate() - firstDay.getDay())

        const end = new Date(lastDay)
        end.setDate(lastDay.getDate() + (6 - lastDay.getDay()))

        let result: number[] = []

        for (let i = start; i <= end; i.setDate(i.getDate() + 1)) {
            result.push(i.getDate())
        }

        return result
    }


    let numbersArr = makeNumbersArr(+year, +month)

    let content = (numbersArr.map((item, i) => {
        return (
            <div className={styles.item}
                key={i}
            >
                {item}
            </div>)
    }))


    let date = new Date(+year, +month)

    return (
        <>
            <div className={styles.title}>
                {monthNames[date.getMonth()] + ' ' + date.getFullYear()}
            </div>
            <div className={styles.itemsContainer}>
                {content}
            </div>

            <div className={styles.descriptionContainer}>
                <div className={styles.descTitle}>Итого:</div>
                <div className={styles.descValue}>7 дней</div>
            </div>
        </>
    )
}

