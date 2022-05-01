import React from 'react';
import style from './SingleCounter.module.css'
import {SingleButton} from "./SingleButton/SingleButton";
import {SingleDisplay} from "./SingleDisplay/SingleDisplay";
import {SetSingleCounter} from "./SetSingleCounter/SetSingleCounter";

type CounterType = {
    setStartCount: (startCount: number) => void
    startCount: number
    maxCount: number
    addStyle: string
    resetStyle: string
    displayInform: string
    setDisplayInform: (displayInform: string) => void
    isActive: boolean
    setMaxCount: (startCount: number) => void
    setValueToLS: () => void
    displayOutput: () => void
    setIsActive: (isActive: boolean)=>void
    setRenderSettings: (renderSettings: boolean) => void
    renderSettings: boolean
}

export const SingleCounter: React.FC<CounterType> = ({
                                                         setStartCount,
                                                         startCount,
                                                         addStyle,
                                                         resetStyle,
                                                         maxCount,
                                                         displayInform,
                                                         setDisplayInform,
                                                         isActive,
                                                         setMaxCount,
                                                         setValueToLS,
                                                         displayOutput,
                                                         setIsActive,
                                                         setRenderSettings,
                                                         renderSettings
                                                     }) => {

    const onAddClickHandler = () => setStartCount(startCount + 1);

    const onResetClickHandler = () => {
        const getStartValueFromLS = localStorage.getItem('startCount');
        if (getStartValueFromLS) setStartCount(JSON.parse(getStartValueFromLS));
    }


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
                        setMaxCount={setMaxCount}
                        setCount={setStartCount}
                        startCount={startCount}
                        maxCount={maxCount}
                        setIsActive={setIsActive}
                        isActive={isActive}
                        displayOutput={displayOutput}
                    />
                </div>}


            </div>
        </>
    );
};

