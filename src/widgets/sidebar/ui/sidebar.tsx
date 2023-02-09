import React, {useState} from 'react';
import cls from "./sidebar.module.scss";
import {classNames} from "@shared/class-names";
import {ThemeSwitcher} from "@shared/theme-switcher";

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [])}>
            <button onClick={onToggle}>toggle</button>
            <div className={cls.switchers}>
                <ThemeSwitcher size={40} />
            </div>
        </div>
    );
};
