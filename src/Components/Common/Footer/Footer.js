import React from "react";
import s from "./Footer.module.css"

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className={s.footer_wrap}>
                    <h5 className={s.footer_name}>Made by Sergey Shramko</h5>
                    <a href="tel:+380660956616" className={s.footer_phone}>066 095 66 16</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;