import { useEffect, useRef } from "react";

type Dot = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    r: number;
};

export default function DevNetworkBG() {
    const ref = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = ref.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = Math.max(1, window.devicePixelRatio || 1);

        let w = 0;
        let h = 0;

        const pointer = { x: -9999, y: -9999, active: false };

        // density حسب الجهاز
        const isMobile = window.matchMedia("(max-width: 820px)").matches;
        const COUNT = isMobile ? 45 : 90;          // عدد النقاط
        const LINK_DIST = isMobile ? 120 : 160;    // مسافة الربط
        const SPEED = isMobile ? 0.35 : 0.45;      // سرعة هادئة

        const dots: Dot[] = [];

        const resize = () => {
            const parent = canvas.parentElement;
            const rect = parent ? parent.getBoundingClientRect() : canvas.getBoundingClientRect();

            w = Math.floor(rect.width);
            h = Math.floor(rect.height);

            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };

        const rand = (a: number, b: number) => a + Math.random() * (b - a);

        const init = () => {
            dots.length = 0;
            for (let i = 0; i < COUNT; i++) {
                dots.push({
                    x: rand(0, w),
                    y: rand(0, h),
                    vx: rand(-SPEED, SPEED),
                    vy: rand(-SPEED, SPEED),
                    r: rand(1.2, 2.4),
                });
            }
        };

        const onMove = (x: number, y: number) => {
            pointer.x = x;
            pointer.y = y;
            pointer.active = true;
        };

        const onMouseMove = (e: MouseEvent) => {
            const r = canvas.getBoundingClientRect();
            onMove(e.clientX - r.left, e.clientY - r.top);
        };

        const onMouseLeave = () => {
            pointer.active = false;
            pointer.x = -9999;
            pointer.y = -9999;
        };

        const onTouchMove = (e: TouchEvent) => {
            const t = e.touches[0];
            if (!t) return;
            const r = canvas.getBoundingClientRect();
            onMove(t.clientX - r.left, t.clientY - r.top);
        };

        const onTouchEnd = () => onMouseLeave();

        resize();
        init();

        window.addEventListener("resize", () => {
            resize();
            init();
        });

        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mouseleave", onMouseLeave);
        window.addEventListener("touchmove", onTouchMove, { passive: true });
        window.addEventListener("touchend", onTouchEnd);

        let raf = 0;

        const step = () => {
            // clear
            ctx.clearRect(0, 0, w, h);

            // background vignette (اختياري ناعم)
            const grd = ctx.createRadialGradient(w * 0.55, h * 0.35, 0, w * 0.55, h * 0.35, Math.max(w, h));
            grd.addColorStop(0, "rgba(255, 0, 60, 0.05)");
            grd.addColorStop(1, "rgba(0, 0, 0, 0)");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, w, h);

            // update dots
            for (const p of dots) {
                p.x += p.vx;
                p.y += p.vy;

                // bounce
                if (p.x < 0) { p.x = 0; p.vx *= -1; }
                if (p.x > w) { p.x = w; p.vx *= -1; }
                if (p.y < 0) { p.y = 0; p.vy *= -1; }
                if (p.y > h) { p.y = h; p.vy *= -1; }

                // gentle pointer attraction (خفيفة)
                if (pointer.active) {
                    const dx = pointer.x - p.x;
                    const dy = pointer.y - p.y;
                    const d2 = dx * dx + dy * dy;
                    if (d2 < 200 * 200) {
                        p.vx += dx * 0.00003;
                        p.vy += dy * 0.00003;
                        // damping
                        p.vx *= 0.995;
                        p.vy *= 0.995;
                    }
                }
            }

            // links
            ctx.lineWidth = 1;
            ctx.shadowColor = "rgba(255, 30, 30, 0.35)";
            ctx.shadowBlur = 12;

            for (let i = 0; i < dots.length; i++) {
                for (let j = i + 1; j < dots.length; j++) {
                    const a = dots[i];
                    const b = dots[j];
                    const dx = a.x - b.x;
                    const dy = a.y - b.y;
                    const d = Math.hypot(dx, dy);

                    if (d < LINK_DIST) {
                        const alpha = (1 - d / LINK_DIST) * 0.35;
                        ctx.strokeStyle = `rgba(255, 40, 40, ${alpha})`;

                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }

            ctx.shadowBlur = 0;

            // dots
            for (const p of dots) {
                ctx.fillStyle = "rgba(255, 60, 60, 0.85)";
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }

            // pointer highlight


            raf = requestAnimationFrame(step);
        };

        raf = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseleave", onMouseLeave);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={ref}
            style={{
                position: "fixed",
                inset: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                zIndex: 0,
            }}
        />
    );
}