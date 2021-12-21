import React from "react";
import { NavLink } from 'react-router-dom';
import s from "./SidebarOpen.module.css";


export const SidebarOpen = () =>{

    return<>
        <div className={s.SidebarOpenContainet}>
            <div className={s.MenuContainer}>
                <NavLink to="/ollPhoto">Все обои</NavLink>
                <NavLink to="/photoTelephone">Обои на телефон</NavLink>
                <NavLink to="/PhotoDesctop">Обои на рабочий стол</NavLink>
                <NavLink to="/BeautifulPictures">Красивые картинки</NavLink>
                <NavLink to="/PhotoGirls">Anime</NavLink>
            </div>
        </div>
    </>
}