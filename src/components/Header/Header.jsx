import React from "react";
import s from "./Header.module.css";
import { HeaderLogo } from "./HeaderLogo/HeaderLogo";
import { HeaderMenu } from "./HeaderMenu/HeaderMenu";

export const Header = () =>{

    return<>
        <div className={s.HeaderContainer}>
            <div> <HeaderMenu /> </div>
            <div> <HeaderLogo /> </div>
            <div>333</div>
        </div>
    </>
}