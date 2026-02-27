import "./leftCard.css";

import instagramIcon from "../../assets/icons/instagram.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import dribbbleIcon from "../../assets/icons/dribbble.svg";

import profileImg from  "../../assets/images/logo_white.png"

export default function LeftCard() {
    return (
        <div className="leftCard">
            <div className="logoBox">
                <div className="profileWrapper">
                    <img src={profileImg} alt="Samir Broukssi" className="profileImage" />
                </div>
            {/*    <div className="logoCircle">EB</div>*/}
                <div className="logoText">ElbrouxiWeb</div>
            </div>




            <div className="contactInfo">
                <p>+212 693 582 56</p>
                <p>contact@elbrouxiweb.com</p>
                <p>Casablanca, Morocco | Turin, Italy</p>
            </div>

            <div className="socialRow">
                <a href="#">
                    <img src={instagramIcon} alt="Instagram" />
                </a>

                <a href="#">
                    <img src={whatsappIcon} alt="WhatsApp" />
                </a>

                <a href="#">
                    <img src={dribbbleIcon} alt="Dribbble" />
                </a>
            </div>

            <button className="leftBtn">Get In Touch</button>
        </div>
    );
}