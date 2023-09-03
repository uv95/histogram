import { Period } from '@/context/PeriodContext';
import {graph} from './api';
import {formatMonth} from './formatMonth';

export const getCategoryLabels = (category: Period) => {
    if (category === Period.YEAR || category === Period.HALF_YEAR) return Object.keys(graph[category]).map(month => {
        const monthNum = Object.keys(graph[Period.YEAR]).indexOf(month)
        return formatMonth(monthNum)
    });

    return ['01', '05', '10', '15', '20', '25', '30']
}