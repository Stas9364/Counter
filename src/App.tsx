import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import style from "./Counter/Counter.module.css";
import {SetCounter} from "./Counter/SetCounter/SetCounter";
import {SingleCounter} from "./SingleCounter/SingleCounter";
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
    let [startCount, setStartCount] = useState<number>(getStartValueFromLS());
    let [maxCount, setMaxCount] = useState<number>(getMaxValueFromLS());
    let [displayInform, setDisplayInform] = useState<string>('Enter value and press "set"');
    let [isActive, setIsActive] = useState(true);

    function getStartValueFromLS() {
        let getStartValueFromLS = localStorage.getItem('startCount');
        if (getStartValueFromLS) {
            return JSON.parse(getStartValueFromLS);
        } else {
            return 0;
        }
    }

    function getMaxValueFromLS() {
        let getMaxValueFromLS = localStorage.getItem('maxCount');
        if (getMaxValueFromLS) {
            return JSON.parse(getMaxValueFromLS);
        } else {
            return 0;
        }
    }

    const setValueToLS = () => {
        localStorage.setItem('startCount', JSON.stringify(startCount));
        localStorage.setItem('maxCount', JSON.stringify(maxCount));
        setIsActive(false);

        setRenderSettings(!renderSettings);
    }

    const displayOutput = () => {
        if (startCount < 0 || maxCount < 0 || startCount > maxCount) {
            setDisplayInform('Invalid value');
        } else {
            setDisplayInform('Enter value and press "set"');
        }
    }

    const addStyle = style.add;
    const resetStyle = style.reset;

    let [renderSettings, setRenderSettings] = useState(true);

    const navLinkStyle = {textDecoration: 'none'};
    return (
        <div>

            <button>
                <NavLink
                    style={navLinkStyle}
                    to={'/Counter'}
                >Counter </NavLink>
            </button>

            <button>
                <NavLink
                    style={navLinkStyle}
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
                                       setMaxCount={setMaxCount}
                                       setStartCount={setStartCount}
                                       startCount={startCount}
                                       maxCount={maxCount}
                                       setIsActive={setIsActive}
                                       isActive={isActive}
                                       displayOutput={displayOutput}
                                   />
                               </div>

                               <div className='counter'>
                                   <Counter
                                       maxCount={maxCount}
                                       setStartCount={setStartCount}
                                       startCount={startCount}
                                       addStyle={addStyle}
                                       resetStyle={resetStyle}
                                       displayInform={displayInform}
                                       setDisplayInform={setDisplayInform}
                                       isActive={isActive}
                                   />
                               </div>
                           </>}/>

                    <Route path={'/SingleCounter'}
                           element={<>
                               <SingleCounter
                                   maxCount={maxCount}
                                   setStartCount={setStartCount}
                                   startCount={startCount}
                                   addStyle={addStyle}
                                   resetStyle={resetStyle}
                                   displayInform={displayInform}
                                   setDisplayInform={setDisplayInform}
                                   isActive={isActive}

                                   setMaxCount={setMaxCount}
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
