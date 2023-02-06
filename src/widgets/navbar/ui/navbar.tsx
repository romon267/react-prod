import React from 'react';
import {classNames} from "@shared/class-names";
import cls from "./navbar.module.scss";
import AppLink from "@shared/app-link/ui/app-link";

function Navbar() {
    return (
        <div className={classNames(cls.navbar, {}, [])}>
            <div className={classNames(cls.navbarLinksWrapper, {}, [])}>
                <AppLink theme={'secondary'} to={'/'}>Home</AppLink>
                <AppLink theme={'secondary'} to={'/about'}>About</AppLink>
            </div>
        </div>
    );
}

export default Navbar;