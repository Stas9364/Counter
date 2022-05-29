import React from 'react';
import style from './SingleCounter.module.css'
import {SingleButton} from "./SingleButton/SingleButton";
import {SingleDisplay} from "./SingleDisplay/SingleDisplay";
import {SetSingleCounter} from "./SetSingleCounter/SetSingleCounter";

type CounterType = {
    startCount: number
    maxCount: number
    addStyle: string
    resetStyle: string
    displayInform: string
    setDisplayInform: (displayInform: string) => void
    addClickHandler: () => void
    resetClickHandler: () => void
    changeStartValueHandler: (e: string) => void
    changeMaxValueHandler: (e: string) => void

    isActive: boolean
    setValueToLS: () => void
    displayOutput: () => void
    setIsActive: (isActive: boolean) => void
    setRenderSettings: (renderSettings: boolean) => void
    renderSettings: boolean
}

export const SingleCounter: React.FC<CounterType> = ({
                                                         startCount,
                                                         addStyle,
                                                         resetStyle,
                                                         maxCount,
                                                         displayInform,
                                                         setDisplayInform,
                                                         addClickHandler,
                                                         resetClickHandler,
                                                         isActive,

                                                         changeStartValueHandler,
                                                         changeMaxValueHandler,

                                                         setValueToLS,
                                                         displayOutput,
                                                         setIsActive,
                                                         setRenderSettings,
                                                         renderSettings
                                                     }) => {

    const onAddClickHandler = () => addClickHandler();

    const onResetClickHandler = () => resetClickHandler();

    console.log(startCount)
    console.log(maxCount)
    return (
        <>
            <div className={style.counterContainer}>

                {renderSettings ? <>

                        <div className={style.resultContainer}>
                            <SingleDisplay
                                startCount={startCount}
                                maxCount={maxCount}
                                displayInform={displayInform}
                                setDisplayInform={setDisplayInform}
                                isActive={isActive}
                            />
                        </div>

                        <div className={style.buttonContainer}>

                            <SingleButton
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
                            <SingleButton
                                styleName={resetStyle}
                                onClick={onResetClickHandler}
                                name='Reset'
                            />

                            <SingleButton
                                styleName={addStyle}
                                name={'Settings'}
                                onClick={() => setRenderSettings(!renderSettings)}
                            />
                        </div>
                    </>

                    : <div className='setSingleCounter'>
                        <SetSingleCounter
                            setValueToLS={setValueToLS}
                            startCount={startCount}
                            maxCount={maxCount}
                            setIsActive={setIsActive}
                            isActive={isActive}
                            displayOutput={displayOutput}

                            changeStartValueHandler={changeStartValueHandler}
                            changeMaxValueHandler={changeMaxValueHandler}
                        />
                    </div>}


            </div>
        </>
    );
};

