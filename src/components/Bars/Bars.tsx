import { Period, usePeriodContext } from '@/context/PeriodContext';
import { graph } from '@/utils/api';
import { getCategoryLabels } from '@/utils/getCategoryLabels';
import { Bar } from '../Bar/Bar';
import style from './Bars.module.scss';
    
interface BarsProps {
    intervalsArray: number[]
}
    
export const Bars = ({ intervalsArray }: BarsProps) => {
    const {period} = usePeriodContext()

    return (
        <>
            {Object.entries(graph[period]).map(([key, value], index) => (
                period===Period.MONTH ? <Bar key={key} intervalsArray={intervalsArray} value={value}/> : <div key={index+key} className={style.bar} >
                    <Bar intervalsArray={intervalsArray} value={value} />     
                    <p>{getCategoryLabels(period)[index]}</p>    
                </div>
       
            )
            )}
        </>
    );
};