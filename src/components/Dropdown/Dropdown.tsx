'use client'
import { PeriodText, usePeriodContext } from '@/context/PeriodContext';
import Image from 'next/image';
import { useState } from 'react';
import arrow from '../../assets/icons/arrow.png';
import style from './Dropdown.module.scss';
import { Options } from './Options';
    
export const Dropdown = () => {
    const {period} = usePeriodContext()
    const [open, setOpen] = useState(false)

    const arrowStyle = {transform: `scaleY(${open ? -1 : 1})`}

    return (
        <div className={style.dropdown}>
            <div className={style.button}>
                <p>{PeriodText[period]}</p>
                <Image src={arrow} alt='arrow' width={24} height={12} onClick={() => setOpen(!open)} style={arrowStyle}/>
            </div>
     
            <Options open={open} setOpen={setOpen} />
        </div>
    );
};