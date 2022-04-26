import React from "react";
import style from './Counter.module.css'

type DisplayType = { output: number }

export const Display: React.FC<DisplayType> = ({output}) => {
    const maxValue = 5;

    return (
        <>
            <div
                className={output === maxValue ? style.displayRed : ''}
            >{output}
            </div>
        </>
    );
};

