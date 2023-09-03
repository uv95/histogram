'use client'
import { getBarHeight } from '@/utils/getBarHeight';
import { useEffect, useState } from 'react';
import style from './Bar.module.scss';
    
interface BarProps {
    value: number,
    intervalsArray: number[],
}
    
export const Bar = ({value, intervalsArray}: BarProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const [height, setHeight] = useState(1)

    useEffect(() => {
        setHeight(getBarHeight(value, intervalsArray, 50) + 20)
    }, [value, intervalsArray])

    return (
        <div className={style.barContainer}>
            <div className={style.value} style={{opacity: isHovered ? 1 : 0}}>{value}</div>
        
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={style.bar} style={{height: height + 'px'}}/>
        </div>
    );
};