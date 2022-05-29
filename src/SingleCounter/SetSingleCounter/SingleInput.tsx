import React, {ChangeEvent} from "react";

type SuperInputTextPropsType = {
    onChangeText: (value: string) => void
    className: string
    type: string
    placeholder: string
    value: number
}

export const SingleInput: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChangeText,
         value,
        className,
        placeholder

    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
      onChangeText(e.currentTarget.value);
    };

    return (
        <>
            <input
                min={0}
                type={type}
                onChange={onChangeCallback}
                className={className}
                value={value}
                placeholder={placeholder}
            />
        </>
    );
};
