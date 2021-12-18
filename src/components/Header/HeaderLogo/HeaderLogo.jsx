import React from "react";
import { NavLink } from "react-router-dom";
import s from "./HeaderLogo.module.css";

export const HeaderLogo = () =>{

    return<>
        <NavLink to="/#">
            <div className={s.HeaderLogoContainer}>
                <div class={s.logoIMG}>  <img src="https://img.icons8.com/fluency/48/000000/fox.png"/></div>
                <div class={s.logoText}>XIDE </div>
            </div>
        </NavLink>
    </>
}