// src/sections/Projects/Projects.tsx
import {useEffect, useMemo, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./projects.css";

type ProjectTag = "Websites" | "UI/UX" | "E-commerce" | "SEO";

type Project = {
    id: string;
    title: string;
    desc: string;
    tags: ProjectTag[];
    year?: string;
    link?: string;
    status?: "Live" | "Case study" | "In progress";
};

const FILTERS: ("All" | ProjectTag)[] = ["All", "Websites", "UI/UX", "E-commerce", "SEO"];

const PROJECTS: Project[] = [
    {
        id: "p1",
        title: "CoffeshopBachir",
        desc: "Cyber landing + product storytelling. High-converting structure and clean UI.",
        tags: ["Websites", "UI/UX"],
        year: "2026",
        status: "Case study",
        link: "#",
    },
    {
        id: "p2",
        title: "Larosea Store",
        desc: "E-commerce concept with strong product cards, checkout flow, and SEO-ready structure.",
        tags: ["E-commerce", "SEO", "UI/UX"],
        year: "2026",
        status: "In progress",
        link: "#",
    },
    {
        id: "p3",
        title: "ElbrouxiWeb Portfolio",
        desc: "Animated portfolio with fixed layout, motion sections, and responsive nav.",
        tags: ["Websites", "UI/UX", "SEO"],
        year: "2026",
        status: "In progress",
        link: "#",
    },
    {
        id: "p4",
        title: "Nobty Dashboard",
        desc: "Admin dashboard UI concept: services, stats, export, and staff management.",
        tags: ["UI/UX", "Websites"],
        year: "2026",
        status: "Case study",
        link: "#",
    },
];

export default function Projects() {

    useEffect(() => {
        document.title = "Projects | ElbrouxiWeb";
    }, []);

    const [active, setActive] = useState<(typeof FILTERS)[number]>("All");

    const filtered = useMemo(() => {
        if (active === "All") return PROJECTS;
        return PROJECTS.filter((p) => p.tags.includes(active));
    }, [active]);

    return (
        <section className="projects" id="projects">
            <div className="projectsWrap">
                <header className="projectsHead">
                    <p className="projectsKicker">Selected work</p>
                    <h2 className="projectsTitle">
                        Projects that <span>feel alive</span>
                    </h2>
                    <p className="projectsSub">
                        Clean UI, cyber motion, and responsive experiences across all devices.
                    </p>
                </header>

                {/* Filters */}
                <div className="projectsFilters" role="tablist" aria-label="Projects filters">
                    {FILTERS.map((f) => {
                        const isActive = f === active;
                        return (
                            <button
                                key={f}
                                className={`filterBtn ${isActive ? "active" : ""}`}
                                onClick={() => setActive(f)}
                                role="tab"
                                aria-selected={isActive}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId="filterPill"
                                        className="filterPill"
                                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                                    />
                                )}
                                <span className="filterText">{f}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                <motion.div
                    className="projectsGrid"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.5 }}
                >
                    <AnimatePresence mode="popLayout">
                        {filtered.map((p, index) => (
                            <motion.article
                                key={p.id}
                                className="projectCard"
                                layout
                                initial={{ opacity: 0, y: 18, scale: 0.985 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.985 }}
                                transition={{ duration: 0.28, delay: index * 0.03 }}
                            >
                                <div className="cardGlow" />

                                <div className="projectTop">
                                    <div className="projectMeta">
                                        {p.year && <span className="metaChip">{p.year}</span>}
                                        {p.status && <span className="metaChip ghost">{p.status}</span>}
                                    </div>

                                    <div className="projectTags">
                                        {p.tags.slice(0, 2).map((t) => (
                                            <span key={t} className="tagChip">
                        {t}
                      </span>
                                        ))}
                                        {p.tags.length > 2 && <span className="tagChip ghost">+{p.tags.length - 2}</span>}
                                    </div>
                                </div>

                                {/* Thumbnail (placeholder) */}
                                <div className="projectThumb" aria-hidden="true">
                                    <div className="thumbGrid" />
                                    <div className="thumbScan" />
                                </div>

                                <h3 className="projectTitle">{p.title}</h3>
                                <p className="projectDesc">{p.desc}</p>

                                <div className="projectActions">
                                    <a className="projectBtnPrimary" href={p.link || "#"} target="_blank" rel="noreferrer">
                                        View
                                    </a>
                                    <a className="projectBtnGhost" href="#contact">
                                        Request similar
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}