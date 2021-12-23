import React from "react";
import s from "./Pages.module.css";
import TelephonePhoto1 from "../../assets/img/Photo/TelephonePhoto/TelephonePhoto1.jpg";
import TelephonePhoto2 from "../../assets/img/Photo/TelephonePhoto/TelephonePhoto2.jpg";
import TelephonePhoto3 from "../../assets/img/Photo/TelephonePhoto/TelephonePhoto3.png";
import TelephonePhoto4 from "../../assets/img/Photo/TelephonePhoto/TelephonePhoto4.jpg";
import TelephonePhoto5 from "../../assets/img/Photo/TelephonePhoto/TelephonePhoto5.jpg";
import TelephonePhoto6 from "../../assets/img/Photo/TelephonePhoto/TelephonePhoto6.jpg";
import TelephonePhoto7 from "../../assets/img/Photo/TelephonePhoto/TelephonePhoto7.jpg";
import TelephonePhoto8 from "../../assets/img/Photo/TelephonePhoto/TelephonePhoto8.jpg";


const PhotoTelephone = () =>{

    return<div>
        <div className={s.TopText}>
            <h1>Картинки на рабочий стол</h1>
            <h5>Высоко детализированные обои на экран телефона 1440x2560px.</h5>
        </div>
        
        <div className={s.PhotoContainer}>
            <div>
                <img src={TelephonePhoto1} /> 
                <a href={TelephonePhoto1} download>Скачать</a>     
            </div>
            <div>
                <img src={TelephonePhoto2} /> 
                <a href={TelephonePhoto2} download>Скачать</a>  
            </div>
            <div> 
                <img src={TelephonePhoto3} /> 
                <a href={TelephonePhoto3} download>Скачать</a>  
            </div>
            <div> 
                <img src={TelephonePhoto4} /> 
                <a href={TelephonePhoto5} download>Скачать</a>  
            </div>
            <div> 
                <img src={TelephonePhoto5} /> 
                <a href={TelephonePhoto5} download>Скачать</a>  
            </div>
            <div> 
                <img src={TelephonePhoto6} /> 
                <a href={TelephonePhoto6} download>Скачать</a>  
            </div>
            <div> 
                <img src={TelephonePhoto7} /> 
                <a href={TelephonePhoto7} download>Скачать</a>  
            </div>
            <div> 
                <img src={TelephonePhoto8} /> 
                <a href={TelephonePhoto8} download>Скачать</a>  
            </div>
        </div>
    </div>
}

export default PhotoTelephone