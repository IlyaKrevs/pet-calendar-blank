import React from 'react'
import styles from './TicketInfo.module.scss'
import { MyBtn } from '../../Components/MyBtn/MyBtn'
import { MySelect } from '../../Components/MySelect/MySelect'
import { Calendar } from '../../Components/Calendar/Calendar'
import { BigCard } from '../../Components/BigCard/BigCard'
import { useSelectInput } from '../../fnc/hooks/useSelectInput'

import { monthOprtions, yearsOptions } from '../../vars/Options'

interface IProps {

}

export const TicketInfo: React.FC<IProps> = ({ }) => {



    let aboutContent = []

    for (let i = 0; i < 4; i++) {
        aboutContent.push(
            <div className={styles.about}
                key={i}
            >
                <span>Фио:</span>
                <span>Иванов Иван Иванович</span>
            </div>
        )

    }


    const currentDate = new Date()
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth()

    const [chosenYear, setChosenYear] = useSelectInput(year + '')
    const [chosenMonth, setChosenMonth] = useSelectInput(month + '')



    return (
        <div className={styles.mainContainer}>

            <div className={styles.ticketItem}>
                <div className={styles.wrapper}>
                    <MyBtn>назад</MyBtn>
                    <MySelect
                        labelText='год'
                        options={yearsOptions}
                        value={chosenYear}
                        handlerOnChange={setChosenYear}
                    />
                    <MySelect
                        labelText='месяц'
                        options={monthOprtions}
                        value={chosenMonth}
                        handlerOnChange={setChosenMonth}
                    />
                </div>
                <BigCard type='basic'>
                    <Calendar
                        year={chosenYear}
                        month={chosenMonth}
                    />
                </BigCard>
            </div>

            <div className={styles.ticketItem}>

                <div className={styles.wrapper}>
                    {aboutContent}
                </div>
                <BigCard type='primary'>
                    <span>123</span>
                    <span>123</span>
                    <span>123</span>
                    <span>123</span>
                </BigCard>
            </div>
        </div>
    )
}

