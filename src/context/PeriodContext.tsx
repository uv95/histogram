'use client'
import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';

export enum Period {
    YEAR = 'year',
    HALF_YEAR = 'half_year',
    MONTH = 'month'
}

export const PeriodText:Record<Period, string> = {
    [Period.MONTH]: 'За последний месяц',
    [Period.YEAR]: 'За последний год',
    [Period.HALF_YEAR]: 'За последние 6 месяцев',
}

interface IPeriodContext {
  period: Period;
  setPeriod: React.Dispatch<React.SetStateAction<Period >>;
}

export const PeriodContext = createContext<IPeriodContext>({
    period: Period.MONTH,
    setPeriod: () => {},
});

export const PeriodProvider:FC<PropsWithChildren> = ({ children }) => {
    const [period, setPeriod] = useState<Period>(Period.MONTH);
  
    const values = useMemo(
        () => ({
            period,
            setPeriod,
        }),
        [period]
    )

    return (
        <PeriodContext.Provider value={values}>
            {children}
        </PeriodContext.Provider>
    );
};

export const usePeriodContext = () => useContext(PeriodContext)