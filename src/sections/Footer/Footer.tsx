// src/components/Footer/Footer.tsx
import "./footer.css";

import instagramIcon from "../../assets/icons/instagram.svg";
import whatsappIcon from "../../assets/icons/whatsapp.svg";
import dribbbleIcon from "../../assets/icons/dribbble.svg";


import profileImg from "../../assets/images/logo_white.png";
import {useEffect} from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    useEffect(() => {
        document.title = "Footer | ElbrouxiWeb";
    }, []);
    return (
        <footer className="footer" id="footer">
            <div className="footerWrap">
                <div className="footerGlow" />

                <div className="footerGrid">
                    {/* Brand */}
                    <div className="footerBrand">
                        <div className="footerLogo">
                            <div className="avatar" aria-hidden="true">
                                {/* من بعد تبدلو بصورة ديالك */}
                                <img src={profileImg} alt="ElbrouxiWeb" className="profileImage" />
                            </div>
                            {/*<span className="footerLogoMark">EB</span>*/}
                            <span className="footerLogoText">ElbrouxiWeb</span>
                        </div>

                        <p className="footerDesc">
                            Cyber-clean websites, UI/UX and performance optimization. Built with modern tech,
                            responsive on all devices.
                        </p>

                        {/* Desktop badges */}
                        <div className="footerBadges desktopOnly">
                            <span className="footerBadge">Web</span>
                            <span className="footerBadge">UI/UX</span>
                            <span className="footerBadge">SEO</span>
                            <span className="footerBadge">E-commerce</span>
                        </div>

                        {/* Mobile social icons */}
                        <div className="footerSocial mobileOnly">
                            <a href="https://www.instagram.com/elbrouxiweb?igsh=M2Z0aXRyYzNxMA%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
                                <img src={instagramIcon} alt="Instagram" />
                            </a>

                            <a href="https://wa.me/212728419735" target="_blank" rel="noreferrer">
                                <img src={whatsappIcon} alt="Facebook" />
                            </a>

                            <a href="https://dribbble.com" target="_blank" rel="noreferrer">
                                <img src={dribbbleIcon} alt="Dribbble" />
                            </a>
                        </div>

                        {/*<div className="footerBadges">*/}
                        {/*    <span className="footerBadge">Web</span>*/}
                        {/*    <span className="footerBadge">UI/UX</span>*/}
                        {/*    <span className="footerBadge">SEO</span>*/}
                        {/*    <span className="footerBadge">E-commerce</span>*/}
                        {/*</div>*/}
                    </div>

                    {/* Links */}
                    <nav className="footerLinks" aria-label="Footer">
                        <h4 className="footerTitle">Navigate</h4>
                        <a className="footerLink" href="#home">Home</a>
                        <a className="footerLink" href="#about">About</a>
                        <a className="footerLink" href="#services">Services</a>
                        <a className="footerLink" href="#projects">Projects</a>
                        <a className="footerLink" href="#contact">Contact</a>
                    </nav>

                    {/* Contact */}
                    <div className="footerContact">
                        <h4 className="footerTitle">Contact</h4>

                        <div className="footerRow">
                            <span className="footerLabel">Whatsapp, Morocco</span>
                            <a className="footerValue" href="tel:+212728419735">+212 728 419 735</a>
                        </div>

                        <div className="footerRow">
                            <span className="footerLabel">Whatsapp, Italia</span>
                            <a className="footerValue" href="tel:+393509464481">+39 350 946 4481</a>
                        </div>


                        <div className="footerRow">
                            <span className="footerLabel">Email</span>
                            <a className="footerValue" href="mailto:contact.elbrouxiweb@gmail.com">
                                contact@elbrouxiweb.com
                            </a>
                        </div>

                        <div className="footerRow">
                            <span className="footerLabel">Location</span>
                            <span className="footerValue">Casablanca, Morocco<br/>Turin, Italia</span>
                        </div>

                        <div className="footerActions">
                            <a
                                className="footerBtnPrimary"
                                href="https://wa.me/212728419735"
                                target="_blank"
                                rel="noreferrer"
                            >
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footerBottom">
                    <p className="footerCopy">
                        © {year} <span>ElbrouxiWeb</span>. All rights reserved.
                    </p>

                    <div className="footerMiniLinks">
                        <a className="footerMini" href="#contact">Let’s Talk</a>
                        <a className="footerMini" href="#projects">See Work</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}