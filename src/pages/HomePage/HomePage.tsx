import TopMarquee from "../../components/TopMarquee/TopMarquee";
import LeftCard from "../../components/LeftCard/LeftCard";
import RightMenu from "../../components/RightMenu/RightMenu";
import MobileNav from "../../components/MobileNav/MobileNav";

// import BackgroundFX from "../../components/BackgroundFX/BackgroundFX";

import Hero from "../../sections/Hero/Hero";
import "./homePage.css";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services.tsx";
import {type RefObject, useRef} from "react";
import Process from "../../sections/Process/Process.tsx";
import Projects from "../../sections/Projects/Projects.tsx";
import Contact from "../../sections/Contact/Contact.tsx";
import Footer from "../../sections/Footer/Footer.tsx";

export default function HomePage() {

    const scrollRef = useRef<HTMLDivElement>(null);
    return (
        <div className="layout">
            {/* ✅ خلفية الحشرة */}
            {/*<BackgroundFX />*/}

            {/* ✅ Desktop: TopMarquee | ✅ Mobile: MobileNav */}
            <div className="topFixed">
                <div className="desktopOnly">
                    <TopMarquee />
                </div>

                <div className="mobileOnly">
                    <MobileNav />
                </div>
            </div>

            {/* Desktop fixed */}
            <aside className="leftFixed">
                <LeftCard />
            </aside>

            <aside className="rightFixed">
                <RightMenu />
            </aside>

            {/* ✅ Mobile bottom marquee */}
            <div className="bottomFixed mobileOnly">
                <TopMarquee />
            </div>

            {/* scroll only */}
            <main className="centerScroll" ref={scrollRef}>
                <Hero />
                <About />
                <Services scrollRoot={scrollRef as RefObject<HTMLDivElement>} />
                <Process />
                <Projects />
                <Contact />
                <Footer />

            </main>
        </div>
    );
}