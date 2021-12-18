import React from "react";
import s from "./SidebarOpen.module.css";

export const SidebarOpen = () =>{

    return<>
        <div className={s.SidebarOpenContainet}>
            <div className={s.MenuContainer}>
                <div>Все обои</div>
                <div>Обои на телефон</div>
                <div>Обои на рабочий стол</div>
                <div>Красивые картинки</div>
                <div>Обои для девочек</div>
            </div>
        </div>
    </>
}