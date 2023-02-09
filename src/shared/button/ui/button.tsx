import React, {ButtonHTMLAttributes, FC} from 'react';
import {classNames} from "@shared/class-names";
import cls from "./button.module.scss";

type ButtonTheme = 'clear' | 'primary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme: ButtonTheme;
    className?: string;
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {theme, className, children, ...otherProps} = props;
    return (
        <button className={classNames(cls.button, {}, [cls[theme], className])} {...otherProps}>
            {children}
        </button>
    );
};
