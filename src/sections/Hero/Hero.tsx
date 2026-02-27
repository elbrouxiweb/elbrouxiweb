import { motion } from "framer-motion";
import "./hero.css";
import {useEffect} from "react";

export default function Hero() {

    useEffect(() => {
        document.title = "Hero | ElbrouxiWeb";
    }, []);

    return (
        <section className="section" id="hero">
            <motion.h1
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.35 }}
                transition={{ duration: 0.7 }}
                className="heroTitle"
            >
                FREELANCE FULL-STACK <br /> DEVELOPER
            </motion.h1>

            <p className="muted heroText">
                Modern, high-converting websites built with clean design and powerful performance.
            </p>
        </section>
    );
}