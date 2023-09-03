export const getBarHeight = (value: number, intervalsArr: number[], intervalHeight: number) => {
    if(value<0) throw new Error('Value should be greater or equal to 0!');
    if(intervalHeight<=0) throw new Error('Interval height should be greater than 0!');
    if(intervalsArr.length===0) throw new Error('intervalsArr should not be empty!');


    const indexOfLastNumberLowerThanValue = intervalsArr.findIndex(el => el>value) - 1
    
    const additionalHeightPercentage = (value - intervalsArr[indexOfLastNumberLowerThanValue]) / (intervalsArr[indexOfLastNumberLowerThanValue + 1] - intervalsArr[indexOfLastNumberLowerThanValue]);

    const result = Math.floor((indexOfLastNumberLowerThanValue * intervalHeight) + (intervalHeight * additionalHeightPercentage))

    return result;
}