import React from 'react';
import cls from "./theme-switcher.module.scss";
import {Theme, useTheme} from "@app/providers/theme-provider";
import {classNames} from "@shared/class-names";
import MoonIcon from "@shared/assets/icons/moon.svg"
import SunIcon from "@shared/assets/icons/sun.svg"
import {Button} from "@shared/button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const {className} = props;
    const {toggleTheme, theme} = useTheme();

    return (
        <Button theme={"clear"} className={classNames(className)} onClick={toggleTheme}>
            {theme === Theme.DARK ? <SunIcon width={24} height={24} /> : <MoonIcon fill="#fff" stroke="#fff" width={24} height={24} />}
        </Button>
    );
}
