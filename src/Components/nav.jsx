import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home",       id: "home"       },
        { name: "About",      id: "about"      },
        { name: "Experience", id: "experience" },
        { name: "Menu",       id: "menu"       },
        { name: "Contact",    id: "contact"    },
    ];

    // Detect base path for clean slashes (supports /Chanchal024/Focal or root /)
    const getBasePath = () => {
        const knownSections = ["about", "story", "experience", "menu", "contact", "reserve", "review", "reviews"];
        const parts = window.location.pathname.split("/").filter(Boolean);
        if (parts.length > 0 && knownSections.includes(parts[parts.length - 1].toLowerCase())) {
            parts.pop();
        }
        return parts.length > 0 ? `/${parts.join("/")}` : "";
    };

    // Clean slash navigation: /about, /menu, /experience, /contact
    const openSectionInNewTab = (sectionId) => {
        const base = getBasePath();
        if (!sectionId || sectionId === "home") {
            window.open(base ? `${base}/` : "/", "_blank", "noopener,noreferrer");
            return;
        }
        window.open(`${base}/${sectionId}`, "_blank", "noopener,noreferrer");
    };

    return (
        // id="navbar" — GSAP targets this for the page-load slide-down
        <nav id="navbar" className="absolute top-4 left-1/2 z-50 w-[88%] max-w-5xl -translate-x-1/2">

            <div className="rounded-full border border-white/15 bg-zinc-950/85 px-6 py-3.5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-2xl">
                <div className="flex items-center justify-between">

                    {/* Logo Button */}
                    <button 
                        type="button"
                        onClick={() => openSectionInNewTab("home")}
                        className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none"
                        aria-label="Focal Home"
                    >
                        <img src="/Focal.png" alt="FOCAL" className="h-9 w-auto object-contain" />
                    </button>

                    {/* Desktop Navigation Buttons */}
                    <div className="hidden items-center gap-2 md:flex">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                type="button"
                                onClick={() => openSectionInNewTab(link.id)}
                                className="relative px-4 py-2 text-sm font-medium text-white/85 transition-all duration-300 hover:text-white hover:bg-white/10 rounded-full cursor-pointer
                                           after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:rounded-full
                                           after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-1/2 focus:outline-none"
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <button 
                        type="button"
                        onClick={() => openSectionInNewTab("contact")}
                        className="hidden rounded-full bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 px-5 py-2.5 text-sm font-bold text-zinc-950 md:inline-flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer focus:outline-none"
                    >
                        <span>Let's Talk</span>
                        <ArrowUpRight size={16} />
                    </button>

                    {/* Mobile Toggle */}
                    <button 
                        type="button"
                        onClick={() => setIsOpen(!isOpen)} 
                        className="text-white md:hidden p-1 rounded-lg hover:bg-white/10 transition-colors focus:outline-none cursor-pointer" 
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(false);
                                        openSectionInNewTab(link.id);
                                    }}
                                    className="w-full text-left rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white cursor-pointer focus:outline-none"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button
                                type="button"
                                onClick={() => {
                                    setIsOpen(false);
                                    openSectionInNewTab("contact");
                                }}
                                className="w-full mt-2 rounded-xl bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 px-4 py-3 text-center text-sm font-bold text-zinc-950 transition-all shadow-md cursor-pointer inline-flex items-center justify-center gap-1.5 focus:outline-none"
                            >
                                <span>Let's Talk</span>
                                <ArrowUpRight size={16} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;