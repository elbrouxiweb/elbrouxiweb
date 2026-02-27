import "./rightMenu.css";

const items = [
    { href: "#hero", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Works" },
    { href: "#contact", label: "Contact" },
];

export default function RightMenu() {
    return (
        <div className="rightMenu">
            {items.map((i) => (
                <a className="menuItem" key={i.href} href={i.href} title={i.label}>
                    {/* دابا placeholder icon */}
                    <span className="dot" />
                </a>
            ))}
        </div>
    );
}