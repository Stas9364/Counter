import React from 'react';
import {Button} from '../../Counter/Button/Button';
import style from './SetSingleCounter.module.css';
import {SuperInput} from "../../Counter/SetCounter/Input";

type SetCounterType = {
    setMaxCount: (startCount: number) => void
    maxCount: number
    setCount: (count: number) => void
    startCount: number
    setValueToLS: () => void
    setIsActive: (isActive: boolean)=>void
    isActive: boolean
    displayOutput: ()=>void
}

export const SetSingleCounter: React.FC<SetCounterType> = ({
                                                         setMaxCount,
                                                         maxCount,
                                                         setCount,
                                                         startCount,
                                                         setValueToLS,
                                                         setIsActive,
                                                         isActive,
                                                         displayOutput
}) => {

    const getStartValueFromInput = (e: string) => {
        setCount(Number(e));
        displayOutput();
        setIsActive(true);
    }

    const getMaxValueFromInput = (e: string) => {
        setMaxCount(Number(e));
        displayOutput();
        setIsActive(true);
    }

    const inputStyle =
            startCount < 0 || maxCount < 0 || startCount > maxCount ? style.red : style.input;


    return (
        <div className={style.setCounterContainer}>

            <div className={style.inputsContainer}>
                <div>
                    <span className={style.text}>Start value: </span>
                    <SuperInput
                        type={"number"}
                        onChangeText={(e) => getStartValueFromInput(e)}
                        value={startCount}
                        placeholder={'start'}
                        className={inputStyle}
                    />
                </div>

                <div>
                    <span className={style.text}>Max value: </span>
                    <SuperInput
                        type={"number"}
                        onChangeText={(e) => getMaxValueFromInput(e)}
                        value={maxCount}
                        placeholder={'max'}
                        className={inputStyle}
                    />
                </div>

            </div>

            <div className={style.buttonContainer}>
                <Button
                    onClick={setValueToLS}
                    disabled={
                        (startCount === maxCount ||
                        startCount < 0 ||
                        maxCount < 0 ||
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

