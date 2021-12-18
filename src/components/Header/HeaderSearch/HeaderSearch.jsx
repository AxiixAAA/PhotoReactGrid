import React from "react";
import s from "./HeaderSearch.module.css";

export const HeaderSearch = () =>{

    return<>
        <div className={s.HeaderSearchContainer}>
            <div className={s.PoiskSubmit}> <button /> </div>
            <div className={s.PoiskText}> <input type="text" placeholder="Поиск фото..."/> </div>
        </div>
    </>
}
