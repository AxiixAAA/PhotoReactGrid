import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./SidebarOpen.module.css";


export const SidebarOpen = () =>{

    return<>
        <div className={s.SidebarOpenContainet}>
            <div className={s.MenuContainer}>
                <NavLink to="/desctopPhoto">Обои на рабочий стол</NavLink>
                <NavLink to="/photoTelephone">Обои на телефон</NavLink>
                <NavLink to="/anime">Anime</NavLink>
            </div>
        </div>
    </>
}