import { motion } from "framer-motion";
import "./about.css";
import profileImg from "../../assets/images/logo_white.png";
import {useEffect} from "react";

const highlights = [
    { k: "2+", v: "Years learning & building" },
    { k: "10+", v: "UI screens designed (Figma)" },
    { k: "5+", v: "Web projects (React)" },
];

const chips = [
    "Figma UI/UX",
    "React + TypeScript",
    "Spring Boot (learning)",
    "Clean UI",
    "Responsive Design",
    "Animations",
];

export default function About() {

    useEffect(() => {
        document.title = "About | ElbrouxiWeb";
    }, []);

    return (
        <section className="section about" id="about">
            <div className="aboutGrid">

                {/* LEFT */}
                <div className="aboutLeft">
                    <header className="cyServicesHeader">
                        <p className="cyKicker">Who we are</p>
                        <h2 className="serviceTitle">
                            Cyber-grade <span>digital services</span>
                        </h2>
                        <p className="seviceSub">
                            Modern solutions crafted with precision: design, development, and performance.
                        </p>
                    </header>
                    {/*<div className="aboutBadge">WHO WE ARE</div>*/}

                    {/*<h2 className="aboutTitle">*/}
                    {/*    We build clean, modern & high-converting websites.*/}
                    {/*</h2>*/}

                    <p className="aboutText">
                        I’m Samir, a Computer Science student in Turin. I design interfaces in Figma and
                        build web experiences using React + TypeScript. My goal is simple: deliver elegant
                        websites that feel premium, fast, and easy to use.
                    </p>

                    <div className="aboutChips">
                        {chips.map((c) => (
                            <span className="chip" key={c}>
                              {c}
</span>
                        ))}
                    </div>

                    <div className="aboutStats">
                        {highlights.map((x) => (
                            <motion.div
                                key={x.k}
                                className="statCard"
                                whileHover={{ y: -4 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="statK">{x.k}</div>
                                <div className="statV">{x.v}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="aboutActions">
                        <a className="aboutBtnPrimary" href="#contact">
                            Let’s work together
                        </a>
                        <a className="aboutBtnGhost" href="#projects">
                            See projects
                        </a>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="aboutRight">
                    <motion.div
                        className="aboutCard"
                        whileHover={{ y: -6, rotate: -0.2 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="aboutCardTop">
                            <div className="avatar" aria-hidden="true">
                                {/* من بعد تبدلو بصورة ديالك */}
                                <img src={profileImg} alt="ElbrouxiWeb" className="profileImage" />
                            </div>

                            <div className="aboutCardInfo">
                                <div className="name">ElbrouxiWeb</div>
                                <div className="role">Web Design & Web Development</div>
                            </div>
                        </div>

                        <div className="aboutCardLine" />

                        <div className="aboutCardBody">
                            <div className="row">
                                <span className="label">Based in</span>
                                <span className="value">Morocco / Italy</span>
                            </div>

                            <div className="row">
                                <span className="label">Focus</span>
                                <span className="value">Portfolio, Business websites, UI</span>
                            </div>

                            <div className="row">
                                <span className="label">Stack</span>
                                <span className="value">React TS, (Spring Boot soon)</span>
                            </div>
                        </div>

                        <div className="aboutMiniNote">
                            Tip: we keep design clean, fast and responsive on all devices.
                        </div>
                    </motion.div>

                    <div className="aboutGlow" aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}