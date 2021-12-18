import React from "react";
import { NavLink } from "react-router-dom";
import s from "./HeaderLogo.module.css";

export const HeaderLogo = () =>{

    return<>
        
            <div className={s.HeaderLogoContainer}>
            <NavLink to="/#"><div class={s.logoIMG}>  <img src="https://img.icons8.com/fluency/48/000000/fox.png"/></div></NavLink>
            <NavLink to="/#"><div class={s.logoText}>   XIDE </div></NavLink>
            </div>
        
    </>
}