import "./services.css";
import { motion, useScroll, useTransform } from "framer-motion";
import {type RefObject, useEffect, useRef} from "react";


type Props = {
    scrollRoot: RefObject<HTMLDivElement | null>;
};

const services = [
    {
        title: "Business Websites",
        desc: "High-converting websites with strong UI + fast performance.",
        points: ["Custom Design", "Mobile Responsive", "SEO Friendly", "Fast Performance"],
        tag: "WEB",
    },
    {
        title: "UI / UX Design",
        desc: "Interfaces that look premium and convert users into clients.",
        points: ["Wireframes", "Prototypes", "Design System", "Conversion Focus"],
        tag: "UI/UX",
    },
    {
        title: "Optimization & Performance",
        desc: "Speed, stability, and clean technical setup for Google ranking.",
        points: ["Core Web Vitals", "Speed Boost", "Technical SEO", "Best Practices"],
        tag: "BOOST",
    },
];

export default function Services({ scrollRoot }: Props) {

    useEffect(() => {
        document.title = "Services | ElbrouxiWeb";
    }, []);

    const ref = useRef<HTMLElement | null>(null);

    const { scrollYProgress } = useScroll({
        container: scrollRoot,     // ✅ هادي هي المفتاح
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

    // ✅ خلي opacity ديما باين باش ما يختافاش
    const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 1, 1, 1]);

    return (
        <motion.section
            ref={ref}
            style={{ opacity }}
            className="cyServices"
            id="services"
        >

            <header className="cyServicesHeader">
                <p className="cyKicker">Services Protocol</p>
                <h2 className="serviceTitle">
                    Cyber-grade <span>digital services</span>
                </h2>
                <p className="seviceSub">
                    Modern solutions crafted with precision: design, development, and performance.
                </p>
            </header>

            <div className="cyGrid">
                {services.map((s) => (
                    <motion.article
                        key={s.title}
                        className="cyCard"
                        style={{ y, scale }}
                    >
                        <div className="cyCardTop">
                            <span className="cyPill">{s.tag}</span>
                            <span className="cyPulse" />
                        </div>

                        <h3 className="cyCardTitle">{s.title}</h3>
                        <p className="cyCardDesc">{s.desc}</p>

                        <ul className="cyList">
                            {s.points.map((p) => (
                                <li key={p}>{p}</li>
                            ))}
                        </ul>

                        <div className="cyCardLine" />
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
}