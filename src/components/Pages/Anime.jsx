import React from "react";
import s from "./Pages.module.css";
import Anime1 from "../../assets/img/Photo/Anime/Anime1.jpg";
import Anime2 from "../../assets/img/Photo/Anime/Anime2.jpg";
import Anime3 from "../../assets/img/Photo/Anime/Anime3.jpg";
import Anime4 from "../../assets/img/Photo/Anime/Anime4.jpg";
import Anime5 from "../../assets/img/Photo/Anime/Anime5.jpg";
import Anime6 from "../../assets/img/Photo/Anime/Anime6.jpg";
import Anime7 from "../../assets/img/Photo/Anime/Anime7.jpg";
import Anime8 from "../../assets/img/Photo/Anime/Anime8.jpg";



const Anime = () =>{

    return<div>
        <div className={s.TopText}>
            <h1>Картинки на рабочий стол</h1>
            <h5>Высоко детализированные обои на экран телефона 1440x2560px.</h5>
        </div>
        
        <div className={s.PhotoContainer}>
            <div>
                <img src={Anime1} /> 
                <a href={Anime1} download>Скачать</a>     
            </div>
            <div>
                <img src={Anime2} /> 
                <a href={Anime2} download>Скачать</a>  
            </div>
            <div> 
                <img src={Anime3} /> 
                <a href={Anime3} download>Скачать</a>  
            </div>
            <div> 
                <img src={Anime4} /> 
                <a href={Anime4} download>Скачать</a>  
            </div>
            <div> 
                <img src={Anime5} /> 
                <a href={Anime5} download>Скачать</a>  
            </div>
            <div> 
                <img src={Anime6} /> 
                <a href={Anime6} download>Скачать</a>  
            </div>
            <div> 
                <img src={Anime7} /> 
                <a href={Anime7} download>Скачать</a>  
            </div>
            <div> 
                <img src={Anime8} /> 
                <a href={Anime8} download>Скачать</a>  
            </div>
        </div>
    </div>
}

export default Anime