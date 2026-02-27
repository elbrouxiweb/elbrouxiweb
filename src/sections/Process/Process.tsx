// src/sections/Process/Process.tsx
import {useEffect, useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./process.css";

const steps = [
    {
        n: "01",
        title: "Discovery",
        desc: "We define goals, audience, content, and the best structure for your site.",
    },
    {
        n: "02",
        title: "Design",
        desc: "Cyber-clean UI, strong hierarchy, and responsive layouts for all devices.",
    },
    {
        n: "03",
        title: "Build",
        desc: "React + TypeScript implementation with smooth motion and strong performance.",
    },
    {
        n: "04",
        title: "Launch",
        desc: "Deploy, SEO basics, analytics, and maintenance-ready setup.",
    },
];

export default function Process() {

    useEffect(() => {
        document.title = "Process | ElbrouxiWeb";
    }, []);

    const sectionRef = useRef<HTMLElement | null>(null);

    // ✅ scroll-based (حي مع السكرول)
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Background parallax
    const bgY = useTransform(scrollYProgress, [0, 1], ["14%", "-10%"]);
    const glow = useTransform(scrollYProgress, [0, 1], [0.35, 0.7]);

    // Progress line fill
    const lineScale = useTransform(scrollYProgress, [0, 1], [0.05, 1]);

    return (
        <section className="process" id="process" ref={sectionRef as never}>
            {/* ✅ Cyber grid + glow (يتحرك مع السكرول) */}
            <motion.div className="processBg" style={{ y: bgY, opacity: glow }} />

            <div className="processWrap">
                <header className="processHead">
                    <p className="processKicker">How it works</p>
                    <h2 className="processTitle">
                        A structured <span>workflow</span> that ships fast
                    </h2>
                    <p className="processSub">
                        Clear steps, clean delivery, and a website that feels alive.
                    </p>
                </header>

                <div className="processGrid">
                    {/* Left: vertical progress */}
                    <div className="processRail">
                        <div className="railTrack" />
                        <motion.div className="railFill" style={{ scaleY: lineScale }} />
                        <div className="railDot top" />
                        <div className="railDot bottom" />
                    </div>

                    {/* Right: steps */}
                    <div className="processSteps">
                        {steps.map((s, i) => (
                            <motion.article
                                key={s.n}
                                className="processCard"
                                initial={{ opacity: 0, y: 18 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, amount: 0.35 }}
                                transition={{ duration: 0.45, delay: i * 0.08 }}
                            >
                                <div className="cardTop">
                                    <div className="cardNum">{s.n}</div>
                                    <div className="cardBadge">Step</div>
                                </div>

                                <h3 className="cardTitle">{s.title}</h3>
                                <p className="cardDesc">{s.desc}</p>

                                <div className="cardLine" />
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}