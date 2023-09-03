export const formatMonth = (month: number) => {
    const formattedMonth = new Date(new Date().setMonth(month)).toLocaleDateString('ru-RU', {
        month: 'short'
    }).split('').filter(el => el!=='.').join('')

    return formattedMonth[0].toUpperCase() + formattedMonth.slice(1)
}