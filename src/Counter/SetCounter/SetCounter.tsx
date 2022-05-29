import React from 'react';
import {SuperInput} from './Input';
import {Button} from '../Button/Button';
import style from './SetCounter.module.css';

type SetCounterType = {
    maxCount: number
    startCount: number
    setValueToLS: () => void
    setIsActive: (isActive: boolean)=>void
    isActive: boolean
    displayOutput: ()=>void
    changeStartValueHandler: (e: string)=>void
    changeMaxValueHandler: (e: string)=>void
}

export const SetCounter: React.FC<SetCounterType> = ({
                                                         maxCount,
                                                         startCount,
                                                         setValueToLS,
                                                         setIsActive,
                                                         isActive,
                                                         displayOutput,
                                                         changeStartValueHandler,
                                                         changeMaxValueHandler
}) => {

    const getStartValueFromInput = (e: string) => {
        changeStartValueHandler(e)
        displayOutput();
        setIsActive(true);
    }

    const getMaxValueFromInput = (e: string) => {
        changeMaxValueHandler(e);
    }

    const inputStyle = startCount > maxCount ? style.red : style.input;


    return (
        <div className={style.setCounterContainer}>

            <div className={style.inputsContainer}>

                <span className={style.text}>Start value: </span>
                <SuperInput
                    type={"string"}
                    onChangeText={(e) => getStartValueFromInput(e)}
                    value={startCount}
                    placeholder={'start'}
                    className={inputStyle}
                />

                <span className={style.text}>Max value: </span>
                <SuperInput
                    type={"string"}
                    onChangeText={(e) => getMaxValueFromInput(e)}
                    value={maxCount}
                    placeholder={'max'}
                    className={inputStyle}
                />
            </div>

            <div className={style.buttonContainer}>
                <Button
                    onClick={setValueToLS}
                    disabled={
                        (startCount === maxCount ||
                        startCount > maxCount) &&
                        isActive
                    }
                    name={'Set'}
                    styleName={style.set}
                />
            </div>
        </div>
    );
};

