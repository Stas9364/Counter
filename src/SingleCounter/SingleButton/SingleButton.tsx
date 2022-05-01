import React from 'react';

type ButtonProps = {
    onClick: () => void
    name: string
    styleName?: string
    disabled?: boolean
}

export const SingleButton: React.FC<ButtonProps> = ({onClick, name, styleName, disabled}) => {

    const onClickHandler = () => onClick();

    return (
        <button
            disabled={disabled}
            className={styleName}
            onClick={onClickHandler}
        >{name}
        </button>
    );
};
