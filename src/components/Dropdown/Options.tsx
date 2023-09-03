import { Period, PeriodText, usePeriodContext } from '@/context/PeriodContext';
import { Dispatch, SetStateAction } from 'react';
import style from './Dropdown.module.scss';
    
interface OptionsProps {
    open: boolean
    setOpen: Dispatch<SetStateAction<boolean>>
}
    
export const Options = ({ open, setOpen}: OptionsProps) => {
    const {period, setPeriod} = usePeriodContext()
 
    return (
        <div className={style.options} style={{opacity: open ? 1 : 0}}>
            {Object.entries(PeriodText).filter(([_, text]) => text!==PeriodText[period]).map(([period, text]) => (
                <p key={text} className={style.optionsText} onClick={() => {
                    if(open)
                    { setPeriod(period as Period)
                        setOpen(false) }
                }} style={{cursor: open ? 'pointer' : 'default'}}
                >{text}</p>
            ))}
        </div>
    );
};