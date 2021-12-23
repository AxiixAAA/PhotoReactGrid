import React from "react";
import s from "./Pages.module.css";
import BeautifulPhoto1 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto1.jpg";
import BeautifulPhoto2 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto2.jpg";
import BeautifulPhoto3 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto3.jpg";
import BeautifulPhoto4 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto4.jpg";
import BeautifulPhoto5 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto5.jpg";
import BeautifulPhoto6 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto6.jpg";
import BeautifulPhoto7 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto7.jpg";
import BeautifulPhoto8 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto8.jpg";
import BeautifulPhoto9 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto9.jpg";
import BeautifulPhoto10 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto10.jpg";
import BeautifulPhoto11 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto11.jpg";
import BeautifulPhoto12 from "../../assets/img/Photo/DesctopPhoto/BeautifulPhoto12.jpg";

const DesctopPhoto = () =>{

    return<div>
        <div className={s.TopText}>
            <h1>Картинки на рабочий стол</h1>
            <h5>Высоко детализированные обои на рабочий в Full HD качестве 1820x1024px.</h5>
        </div>
        
        <div className={s.PhotoContainer}>
            <div>
                <img src={BeautifulPhoto1} /> 
                <a href={BeautifulPhoto1} download>Скачать</a>     
            </div>
            <div>
                <img src={BeautifulPhoto2} /> 
                <a href={BeautifulPhoto2} download>Скачать</a>  
            </div>
            <div> 
                <img src={BeautifulPhoto3} /> 
                <a href={BeautifulPhoto3} download>Скачать</a>  
            </div>
            <div> 
                <img src={BeautifulPhoto4} /> 
                <a href={BeautifulPhoto4} download>Скачать</a>  
            </div>
            <div> 
                <img src={BeautifulPhoto5} /> 
                <a href={BeautifulPhoto5} download>Скачать</a>  
            </div>
            <div> 
                <img src={BeautifulPhoto6} /> 
                <a href={BeautifulPhoto6} download>Скачать</a>  
            </div>
            <div> 
                <img src={BeautifulPhoto7} /> 
                <a href={BeautifulPhoto7} download>Скачать</a>  
            </div>
            <div> 
                <img src={BeautifulPhoto8} /> 
                <a href={BeautifulPhoto8} download>Скачать</a>  
            </div>
            <div> 
                <img src={BeautifulPhoto9} /> 
                <a href={BeautifulPhoto9} download>Скачать</a>  
            </div>
            <div> 
                <img src={BeautifulPhoto10} /> 
                <a href={BeautifulPhoto10} download>Скачать</a>  
            </div>
            <div> 
                <img src={BeautifulPhoto11} /> 
                <a href={BeautifulPhoto11} download>Скачать</a>  
            </div>
            <div> 
                <img src={BeautifulPhoto12} /> 
                <a href={BeautifulPhoto12} download>Скачать</a>      
            </div>
        </div>
    </div>
}

export default DesctopPhoto