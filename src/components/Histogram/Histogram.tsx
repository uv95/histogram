'use client'
import { Period, usePeriodContext } from '@/context/PeriodContext';
import { Bars } from '../Bars/Bars';
import { Category } from '../Category/Category';
import { Dropdown } from '../Dropdown/Dropdown';
import { Scale } from '../Scale/Scale';
import style from './Histogram.module.scss';
    
export const Histogram = () => {
    const {period} = usePeriodContext()
    const intervalsArray = [0, 500, 1000, 2000, 5000, 10000]

    const barsStyle = {padding: `0 ${period===Period.MONTH ? 15 : 0}px`}

    return (
        <div className={style.histogram}>
            <Dropdown />
            <div className={style.body}>
                <Scale intervalsArray={intervalsArray}/>

                <div className={style.barChart}>
                    <div className={style.bars} style={barsStyle}>
                        <Bars intervalsArray={intervalsArray}/>
                    </div>

                    {period === Period.MONTH && <Category/>}
                </div>
            </div>
        </div>
    );
};