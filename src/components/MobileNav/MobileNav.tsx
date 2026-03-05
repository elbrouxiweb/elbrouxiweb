import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./mobileNav.css";

export default function MobileNav() {
    const [open, setOpen] = useState(false);

    return (
        <div className="mNav">
            <div className="mNavInner">
                <div className="mLogo">ElbrouxiWeb</div>

                <button className="mBurger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        className="mDrawer"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                    >
                        <a href="#hero" onClick={() => setOpen(false)}>Home</a>
                        <a href="#about" onClick={() => setOpen(false)}>About</a>
                        <a href="#services" onClick={() => setOpen(false)}>Services</a>
                        <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}