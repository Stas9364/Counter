import React from "react";
import style from '../Counter.module.css'

type DisplayType = {
    startCount: number
    maxCount: number
    displayInform: string
    setDisplayInform: (displayInform: string) => void
    isActive: boolean
}

export const Display: React.FC<DisplayType> = ({
                                                   startCount,
                                                   maxCount,
                                                   displayInform,
                                                   isActive
}) => {

    return (
        <>
            <div
                className={startCount === maxCount ||
                startCount < 0 ||
                maxCount < 0 ||
                startCount > maxCount ? style.displayRed : ''}

            >{isActive ? <span className={style.displayInform}>{displayInform}</span> : startCount}
            </div>
        </>
    );
};

