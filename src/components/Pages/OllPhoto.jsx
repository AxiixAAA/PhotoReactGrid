import React from "react";
import s from "./Pages.module.css";
import BeautifulPhoto1 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto1.jpg";
import BeautifulPhoto2 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto2.jpg";
import BeautifulPhoto3 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto3.png";
import BeautifulPhoto4 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto4.jpg";
import BeautifulPhoto5 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto5.jpg";
import BeautifulPhoto6 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto6.jpg";
import BeautifulPhoto7 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto7.jpg";
import BeautifulPhoto8 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto8.jpg";
import BeautifulPhoto9 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto9.jpg";
import BeautifulPhoto10 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto10.jpg";
import BeautifulPhoto11 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto11.jpg";
import BeautifulPhoto12 from "../../assets/img/Photo/BeautifulPhoto/BeautifulPhoto12.jpg";

const OllPhoto = () =>{

    return<div >
        <div className={s.TopText}>
            <h1>Картинки на рабочий стол</h1>
            <h5>Высоко детализированные обои в 4K Ultra HD качестве 3840x2160. Используй возможности своего экрана на полную и устанавливай обои из нашей подборки, чтобы привычные картинки заиграли новыми красками.</h5>
        </div>
        <div className={s.PhotoContainer}>
            <div>
                <div> <img src={BeautifulPhoto1} /> </div>
                <div> <img src={BeautifulPhoto2} /> </div>
                <div> <img src={BeautifulPhoto3} /> </div>
            </div>
            <div>
                <div> <img src={BeautifulPhoto4} /> </div>
                <div> <img src={BeautifulPhoto5} /> </div>
                <div> <img src={BeautifulPhoto6} /> </div>
            </div>
            <div>
                <div> <img src={BeautifulPhoto7} /> </div>
                <div> <img src={BeautifulPhoto8} /> </div>
                <div> <img src={BeautifulPhoto9} /> </div>
            </div>
            <div>
                <div> <img src={BeautifulPhoto10} /> </div>
                <div> <img src={BeautifulPhoto11} /> </div>
                <div> <img src={BeautifulPhoto12} /> </div>
            </div>
        </div>
    </div>
}

export default OllPhoto