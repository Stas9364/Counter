import React from "react";
import style from '../SingleCounter.module.css'

type DisplayType = {
    startCount: number
    maxCount: number
    displayInform: string
    setDisplayInform: (displayInform: string) => void
    isActive: boolean
}

export const SingleDisplay: React.FC<DisplayType> = React.memo (({
                                                         startCount,
                                                         maxCount,
                                                         displayInform,
                                                         isActive
                                                     }) => {
    const displayStyle = {
        fontSize: '55px',
        fontWeight: 'bold'
    }
    return (
        <>
            <div
                style={displayStyle}
                className={startCount === maxCount ? style.displayRed : ''}
            >{isActive ? <span className={style.displayInform}>{displayInform}</span> : startCount}
            </div>
        </>
    );
} );

