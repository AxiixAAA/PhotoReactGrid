import React, { useState }from "react";
import { SidebarClosed } from "../../Sidebar/SidebarClosed/SidebarClosed";
import { SidebarOpen } from "../../Sidebar/SidebarOpen/SidebarOpen";
import s from "./HeaderMenu.module.css";


export const HeaderMenu = () =>{

    const [cheked, setCheked] = useState(false);

    const activateEditMode = () =>{
        setCheked(true);
    }
    const deactivateEditMode = () =>{
        setCheked(false);
    }

    return<>
    
        {cheked
            ? <div className={s.HeaderMenuContainer} onClick={deactivateEditMode}> <div></div>   <div></div>  <div></div>   </div> 
            : <div className={s.HeaderMenuContainer} onClick={activateEditMode}> <div></div>   <div></div>  <div></div>   </div>
        }
           
        {!cheked
            ? <SidebarOpen />
            : <SidebarClosed />
        } 
    </>
}