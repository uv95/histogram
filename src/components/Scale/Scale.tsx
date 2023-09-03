import style from './Scale.module.scss';

interface ScaleProps {
    intervalsArray: number[]
}
   
export const Scale = ({intervalsArray}: ScaleProps) => {

    return (
        <div className={style.scale}>
            {intervalsArray.slice().reverse().map((value) => (
                <p key={value}>{value.toLocaleString('ru-RU')}</p>
            ))}
        </div>
    );
};