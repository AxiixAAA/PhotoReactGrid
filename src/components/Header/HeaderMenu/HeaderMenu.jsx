import React, { useState }from "react";
import { SidebarClosed } from "../../Sidebar/SidebarClosed/SidebarClosed";
import { SidebarOpen } from "../../Sidebar/SidebarOpen/SidebarOpen";
import s from "./HeaderMenu.module.css";


export const HeaderMenu = () =>{

    const [cheked, setCheked] = useState(false);

    return<>
        <div className={s.HeaderMenuContainer} onClick={() => setCheked(true)}>
            <div></div>   <div></div>  <div></div>     
        </div>

        {cheked
            ? <SidebarClosed />
            : <SidebarOpen />
        }
    </>
}