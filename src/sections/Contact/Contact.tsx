// src/sections/Contact/Contact.tsx
import { motion } from "framer-motion";
import "./contact.css";
import {useEffect} from "react";

export default function Contact() {

    useEffect(() => {
        document.title = "Contact | ElbrouxiWeb";
    }, []);

    return (
        <section className="contact" id="contact">
            <div className="contactWrap">
                <header className="contactHead">
                    <p className="contactKicker">Let’s build something</p>
                    <h2 className="contactTitle">
                        Contact <span>ElbrouxiWeb</span>
                    </h2>
                    <p className="contactSub">
                        Tell me about your project. I’ll reply fast with a clear plan and an estimation.
                    </p>
                </header>

                <div className="contactGrid">
                    {/* Left: Info card */}
                    <motion.aside
                        className="contactInfo"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.45 }}
                    >
                        <div className="infoGlow" />

                        <h3 className="infoTitle">Direct contact</h3>

                        <div className="infoRows">
                            <div className="infoRow">
                                <span className="infoLabel">Phone</span>
                                <a className="infoValue" href="tel:+212728419735">
                                    +212 728 41 97 35
                                </a>
                            </div>

                            <div className="infoRow">
                                <span className="infoLabel">Email</span>
                                <a className="infoValue" href="mailto:contact@elbrouxiweb.com">
                                    contact@elbrouxiweb.com
                                </a>
                            </div>

                            <div className="infoRow">
                                <span className="infoLabel">Location</span>
                                <span className="infoValue">Casablanca, Morocco</span>
                            </div>
                        </div>

                        <div className="infoDivider" />

                        <div className="infoBadges">
                            <span className="infoBadge">Websites</span>
                            <span className="infoBadge">UI/UX</span>
                            <span className="infoBadge">SEO</span>
                            <span className="infoBadge">E-commerce</span>
                        </div>

                        <p className="infoNote">
                            Prefer WhatsApp? Send a short message with your needs and budget range.
                        </p>

                        <div className="infoActions">
                            <a className="infoBtnPrimary" href="https://wa.me/212728419735" target="_blank" rel="noreferrer">
                                WhatsApp me
                            </a>
                            <a className="infoBtnGhost" href="mailto:contact@elbrouxiweb.com">
                                Email
                            </a>
                        </div>
                    </motion.aside>

                    {/* Right: Form */}
                    <motion.div
                        className="contactFormCard"
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.25 }}
                        transition={{ duration: 0.45, delay: 0.06 }}
                    >
                        <div className="formGlow" />

                        <h3 className="formTitle">Send a message</h3>
                        <p className="formSub">Fill the form and I’ll get back to you.</p>

                        {/* ✅ Basic form (you can connect later to Formspree / EmailJS) */}
                        <form
                            className="contactForm"
                            onSubmit={(e) => {
                                e.preventDefault();
                                alert("Message saved ✅ (connect backend later)");
                            }}
                        >
                            <div className="formRow2">
                                <label className="field">
                                    <span className="fieldLabel">Name</span>
                                    <input className="fieldInput" type="text" placeholder="Your name" required />
                                </label>

                                <label className="field">
                                    <span className="fieldLabel">Email</span>
                                    <input className="fieldInput" type="email" placeholder="your@email.com" required />
                                </label>
                            </div>

                            <label className="field">
                                <span className="fieldLabel">Project type</span>
                                <select className="fieldInput" defaultValue="Website">
                                    <option>Website</option>
                                    <option>UI / UX</option>
                                    <option>E-commerce</option>
                                    <option>SEO</option>
                                </select>
                            </label>

                            <label className="field">
                                <span className="fieldLabel">Message</span>
                                <textarea
                                    className="fieldInput fieldTextarea"
                                    placeholder="Tell me what you want to build..."
                                    required
                                />
                            </label>

                            <div className="formActions">
                                <button className="formBtnPrimary" type="submit">
                                    Send
                                </button>
                                <a className="formBtnGhost" href="#projects">
                                    See projects
                                </a>
                            </div>

                            <p className="formFoot">
                                By sending this message, you agree to be contacted back for project discussion.
                            </p>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}