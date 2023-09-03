import { usePeriodContext } from '@/context/PeriodContext';
import { getCategoryLabels } from '@/utils/getCategoryLabels';
import style from './Category.module.scss';
     
export const Category = () => {
    const {period} = usePeriodContext()
    const labels = getCategoryLabels(period)

    const setLabelStyle = (index:number) => {
        return {transform: `translateX(${labels.length ===7 && (index===4 || index===5) ? 3 : 0}px)`}
    }

    return (
        <div className={style.category}>
            {labels.map((label, index) => (
                <p key={label} style={setLabelStyle(index)}>{label}</p>
            ))}
        </div>
    );
};