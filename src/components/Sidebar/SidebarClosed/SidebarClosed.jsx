import React from "react";
import s from "./SidebarClosed.module.css";

export const SidebarClosed = () =>{

    return(
        <div className={s.SidebarClosedContainet}>
            <div className={s.MenuContainer}> 
                <div style={{borderColor: 'green'}}>  </div>
                <div style={{borderColor: 'yellow'}}> </div>
                <div style={{borderColor: 'brown'}}>  </div>
            </div>
        </div>
    )
}