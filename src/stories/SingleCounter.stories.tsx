import {SingleCounter} from "../SingleCounter/SingleCounter";
import style from "../Counter/Counter.module.css";
import useState from "storybook-addon-state";
import {action} from "@storybook/addon-actions";

export default {
    title: 'SingleCounter Component',
    component: SingleCounter
}

const setDisplayInfo = action('change');
const clickHandler = action('+1');
const resetClick = action('0');
const changeStartValue = action('change start val');
const changeMaxVal = action('change max val');
const setValToLS = action('set to LS');
const dispOutput = action('Enter value and press "set"');


export const SingleCounterExample = () => {
    let [displayInform, setDisplayInform] = useState('Enter value and press "set"', '');

    return (
        <SingleCounter
            startCount={5}
            maxCount={10}
            addStyle={style.add}
            resetStyle={style.reset}
            displayInform={displayInform}
            setDisplayInform={setDisplayInfo}
            addClickHandler={clickHandler}
            resetClickHandler={resetClick}
            changeStartValueHandler={changeStartValue}
            changeMaxValueHandler={changeMaxVal}
            isActive={false}
            setValueToLS={setValToLS}
            displayOutput={dispOutput}
            setIsActive={isActive => false}
            setRenderSettings={renderSettings => false}
            renderSettings={true}
        />
    )
}