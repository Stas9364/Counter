import React from 'react';
import style from './Counter.module.css'
import {Button} from "./Button/Button";
import {Display} from "./Display/Display";

type CounterType = {
    startCount: number
    maxCount: number
    addStyle: string
    resetStyle: string
    displayInform: string
    setDisplayInform: (displayInform: string) => void
    addClickHandler: () => void
    resetClickHandler: () => void
    isActive: boolean
}

export const Counter: React.FC<CounterType> = ({
                                                   startCount,
                                                   addStyle,
                                                   resetStyle,
                                                   maxCount,
                                                   displayInform,
                                                   setDisplayInform,
                                                   addClickHandler,
                                                   resetClickHandler,
                                                   isActive
                                               }) => {

    const onAddClickHandler = () => addClickHandler();

    const onResetClickHandler = () => resetClickHandler();

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

