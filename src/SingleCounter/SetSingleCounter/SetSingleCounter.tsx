import React, {useCallback} from 'react';
import {Button} from '../../Counter/Button/Button';
import style from './SetSingleCounter.module.css';
import {SuperInput} from "../../Counter/SetCounter/Input";

type SetCounterType = {
    maxCount: number
    startCount: number
    setValueToLS: () => void
    setIsActive: (isActive: boolean) => void
    isActive: boolean
    displayOutput: () => void

    changeStartValueHandler: (e: string) => void
    changeMaxValueHandler: (e: string) => void

}

export const SetSingleCounter: React.FC<SetCounterType> = React.memo (({
                                                               maxCount,
                                                               startCount,
                                                               setValueToLS,
                                                               setIsActive,
                                                               isActive,
                                                               displayOutput,

                                                               changeStartValueHandler,
                                                               changeMaxValueHandler
}) => {
    const getStartValueFromInput = useCallback ((e: string) => {
        changeStartValueHandler(e);
        displayOutput();
        setIsActive(true);
    }, [changeStartValueHandler, displayOutput, setIsActive]);
    const getMaxValueFromInput = useCallback ((e: string) => {
        changeMaxValueHandler(e);
        displayOutput();
        setIsActive(true);
    }, [changeMaxValueHandler, displayOutput, setIsActive]);

    const inputStyle =
        startCount < 0 || maxCount < 0 || startCount > maxCount ? style.red : style.input;

    return (
        <div className={style.setCounterContainer}>

            <div className={style.inputsContainer}>

                <div>
                    <span className={style.text}>Start value: </span>
                    <SuperInput
                        type={"string"}
                        onChangeText={(e) => getStartValueFromInput(e)}
                        value={startCount}
                        placeholder={'start'}
                        className={inputStyle}
                    />
                </div>

                <div>
                    <span className={style.text}>Max value: </span>
                    <SuperInput
                        type={"string"}
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
} );

