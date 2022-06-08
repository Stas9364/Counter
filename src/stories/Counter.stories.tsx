import {Counter} from "../Counter/Counter";
import {ComponentMeta} from "@storybook/react";
import style from "../Counter/Counter.module.css";
import useState from "storybook-addon-state";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Counter Component',
    component: Counter
} as ComponentMeta<typeof Counter>;

const setDispInf = action('Enter value and press "set"');
const addClck = action('click');
const resetClck = action('reset to start value')

export const CounterExample = () => {
    let [displayInform, setDisplayInform] = useState<string>('','Enter value and press "set"');

    return (
        <Counter
            startCount={5}
            maxCount={10}
            addStyle={style.add}
            resetStyle={style.reset}
            displayInform={displayInform}
            setDisplayInform={setDispInf}
            addClickHandler={addClck}
            resetClickHandler={resetClck}
            isActive={false}
        />
    )
}