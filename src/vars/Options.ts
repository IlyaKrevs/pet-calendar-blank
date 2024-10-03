import { IOptions } from "../Components/MySelect/MySelect"
let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

let monthOprtions: IOptions[] = monthNames.map((item, i) => {
    return {
        value: i + '',
        labelText: item
    }
})

let yearsOptions: IOptions[] = []

for (let i = 2024; i > 1990; i--) {
    yearsOptions.push({
        value: i + '',
        labelText: i + ''
    })
}

export { monthOprtions, yearsOptions, monthNames }

