import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import style from "./Counter/Counter.module.css";
import {SetCounter} from "./Counter/SetCounter/SetCounter";
import {SingleCounter} from "./SingleCounter/SingleCounter";
import {NavLink, Route, Routes} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./Redux/reduxStore";
import {
    changeMaxValueAC,
    changeStartValueAC,
    incrementCounterAC,
    resetStartValueAC,
    setResetValueAC
} from "./Redux/counterActions";

function App() {
    let [displayInform, setDisplayInform] = useState<string>('Enter value and press "set"');
    let [isActive, setIsActive] = useState(true);
    let [renderSettings, setRenderSettings] = useState(true);


    const setValueToLS = () => {
        setIsActive(false);
        dispatch(setResetValueAC());
        setRenderSettings(!renderSettings);
    };

    const displayOutput = () => {
        if (startValue + 1 > maxValue) {
            setDisplayInform('Invalid value');
        } else {
            setDisplayInform('Enter value and press "set"');
        }
    };


    const startValue = useSelector<AppStateType>(state => state.counter.startValue) as number;
    const maxValue = useSelector<AppStateType>(state => state.counter.maxValue) as number;
    const dispatch = useDispatch();

    const addClickHandler = () => dispatch(incrementCounterAC());

    const changeStartValueHandler = (e: string) => dispatch(changeStartValueAC(Number(e)));

    const changeMaxValueHandler = (e: string) => dispatch(changeMaxValueAC(Number(e)));

    const resetClickHandler = () => dispatch(resetStartValueAC());

    const addStyle = style.add;
    const resetStyle = style.reset;

    return (
        <div>

            <button>
                <NavLink
                    style={(params) => {
                        return {
                            backgroundColor: params.isActive ? "#41EAD4FF" : '',
                            textDecoration: 'none'
                        }
                    }}
                    to={'/Counter'}
                >Counter </NavLink>
            </button>

            <button>
                <NavLink
                    style={(params) => {
                        return {
                            backgroundColor: params.isActive ? "#41EAD4FF" : '',
                            textDecoration: 'none'
                        }
                    }}
                    to={'/SingleCounter'}
                >SingleCounter </NavLink>
            </button>

            <div className='container'>
                <Routes>
                    <Route path={'/Counter'}
                           element={<>

                               <div className='setCounter'>
                                   <SetCounter
                                       setValueToLS={setValueToLS}
                                       startCount={startValue}
                                       maxCount={maxValue}
                                       setIsActive={setIsActive}
                                       isActive={isActive}
                                       displayOutput={displayOutput}
                                       changeStartValueHandler={changeStartValueHandler}
                                       changeMaxValueHandler={changeMaxValueHandler}
                                   />
                               </div>

                               <div className='counter'>
                                   <Counter
                                       maxCount={maxValue}
                                       startCount={startValue}
                                       addStyle={addStyle}
                                       resetStyle={resetStyle}
                                       displayInform={displayInform}
                                       setDisplayInform={setDisplayInform}
                                       addClickHandler={addClickHandler}
                                       resetClickHandler={resetClickHandler}
                                       isActive={isActive}
                                   />
                               </div>
                           </>}/>

                    <Route path={'/SingleCounter'}
                           element={<>
                               <SingleCounter
                                   maxCount={maxValue}
                                   startCount={startValue}
                                   addStyle={addStyle}
                                   resetStyle={resetStyle}
                                   displayInform={displayInform}
                                   setDisplayInform={setDisplayInform}
                                   addClickHandler={addClickHandler}
                                   resetClickHandler={resetClickHandler}
                                   changeStartValueHandler={changeStartValueHandler}
                                   changeMaxValueHandler={changeMaxValueHandler}

                                   isActive={isActive}
                                   setValueToLS={setValueToLS}
                                   displayOutput={displayOutput}
                                   setIsActive={setIsActive}
                                   setRenderSettings={setRenderSettings}
                                   renderSettings={renderSettings}
                               />
                           </>}/>

                </Routes>
            </div>
        </div>);
}

export default App;
