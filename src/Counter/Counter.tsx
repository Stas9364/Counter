import React from 'react';
import style from './Counter.module.css'
import {Button} from "./Button";
import {Display} from "./Display";

type CounterType = {
    setCount: (count: number) => void
    count: number
    addStyle: string
    resetStyle: string
}

export const Counter: React.FC<CounterType> = ({setCount, count, addStyle, resetStyle}) => {
    const startValue = 0;
    const maxValue = 5;

    const onAddClickHandler = () => {
        setCount(count + 1);
    };
    const onResetClickHandler = () => setCount(0);

    return (
        <>
            <div className={style.counterContainer}>

                <div className={style.resultContainer}>
                    <Display output={count}/>
                </div>

                <div className={style.buttonContainer}>

                    <Button
                        styleName={addStyle}
                        onClick={onAddClickHandler}
                        name='Add'
                        disabled={count === maxValue}
                    />
                    <Button
                        styleName={resetStyle}
                        onClick={onResetClickHandler}
                        name='Reset'
                        disabled={count === startValue}
                    />

                </div>
            </div>
        </>
    );
};

