import React from 'react';
import style from './Counter.module.css'
import {Button} from "./Button/Button";
import {Display} from "./Display/Display";

type CounterType = {
    setStartCount: (startCount: number) => void
    startCount: number
    maxCount: number
    addStyle: string
    resetStyle: string
    displayInform: string
    setDisplayInform: (displayInform: string)=>void
    isActive: boolean
}

export const Counter: React.FC<CounterType> = ({
                                                   setStartCount,
                                                   startCount,
                                                   addStyle,
                                                   resetStyle,
                                                   maxCount,
                                                   displayInform,
                                                   setDisplayInform,
                                                   isActive
}) => {

    const onAddClickHandler = () => setStartCount(startCount + 1);

    const onResetClickHandler = () => {
        const getStartValueFromLS = localStorage.getItem('startCount');
        if (getStartValueFromLS) setStartCount(JSON.parse(getStartValueFromLS));
    }

    return (
        <>
            <div className={style.counterContainer}>

                <div className={style.resultContainer}>
                    <Display
                        startCount={startCount}
                        maxCount={maxCount}
                        displayInform={displayInform}
                        setDisplayInform={setDisplayInform}
                        isActive={isActive}
                    />
                </div>

                <div className={style.buttonContainer}>

                    <Button
                        styleName={addStyle}
                        onClick={onAddClickHandler}
                        name='Add'
                        disabled={
                            startCount === maxCount ||
                            startCount < 0 ||
                            maxCount < 0 ||
                            startCount > maxCount ||
                            isActive
                        }
                    />
                    <Button
                        styleName={resetStyle}
                        onClick={onResetClickHandler}
                        name='Reset'
                    />

                </div>
            </div>
        </>
    );
};

