import { motion } from "framer-motion";
import "./topMarquee.css";

const items = ["ElbrouxiWeb", "Wed Design", "UI/UX", "React + TypeScript", "High-Converting Websites", "Performance Optimized"];

export default function TopMarquee() {
    const doubled = [...items, ...items, ...items];

    return (
        <div className="topMarquee">
            <motion.div
                className="topTrack"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            >
                {doubled.map((t, i) => (
                    <span className="topItem" key={`${t}-${i}`}>
            {t}
                        <span className="sep">•</span>
          </span>
                ))}
            </motion.div>
        </div>
    );
}