import React, { useState, useEffect } from "react";
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

    // Helper to determine the current active section from clean slash, query param, or hash
    const getCurrentSection = () => {
        if (typeof window === "undefined") return "";
        const knownSections = ["about", "story", "experience", "menu", "contact", "reserve", "review", "reviews"];

        // 1. Pathname
        const parts = window.location.pathname.toLowerCase().split("/").filter(Boolean);
        const lastPart = parts[parts.length - 1] || "";
        if (knownSections.includes(lastPart)) return lastPart;

        // 2. Query param (?page=menu or ?section=about)
        const params = new URLSearchParams(window.location.search);
        const pageParam = (params.get("page") || params.get("section") || "").toLowerCase().trim();
        if (knownSections.includes(pageParam)) return pageParam;

        // 3. Hash (#menu)
        const hash = window.location.hash.toLowerCase().replace("#", "").trim();
        if (knownSections.includes(hash)) return hash;

        return "";
    };

    const [activeSection, setActiveSection] = useState(getCurrentSection);

    // Light pages are standalone section pages (about, menu, contact, etc.) where App.jsx sets bg-white
    const isLightMode = Boolean(activeSection);

    useEffect(() => {
        const handleRouteUpdate = () => {
            setActiveSection(getCurrentSection());
        };

        window.addEventListener("popstate", handleRouteUpdate);
        window.addEventListener("hashchange", handleRouteUpdate);
        return () => {
            window.removeEventListener("popstate", handleRouteUpdate);
            window.removeEventListener("hashchange", handleRouteUpdate);
        };
    }, []);

    // Detect base path for clean slashes (supports /Chanchal024/Focal or root /)
    const getBasePath = () => {
        const knownSections = ["about", "story", "experience", "menu", "contact", "reserve", "review", "reviews"];
        const parts = window.location.pathname.split("/").filter(Boolean);
        if (parts.length > 0 && knownSections.includes(parts[parts.length - 1].toLowerCase())) {
            parts.pop();
        }
        return parts.length > 0 ? `/${parts.join("/")}` : "";
    };

    // Clean client-side navigation with back/forward history support
    const navigateToSection = (sectionId, e) => {
        const base = getBasePath();
        const targetUrl = (!sectionId || sectionId === "home")
            ? (base ? `${base}/` : "/")
            : `${base}/${sectionId}`;

        // Support Ctrl+Click / Cmd+Click for new tab
        if (e && (e.metaKey || e.ctrlKey)) {
            window.open(targetUrl, "_blank", "noopener,noreferrer");
            return;
        }

        try {
            window.history.pushState({}, "", targetUrl);
            window.dispatchEvent(new PopStateEvent("popstate"));
            setActiveSection(!sectionId || sectionId === "home" ? "" : sectionId.toLowerCase());
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch {
            window.location.href = targetUrl;
        }
    };

    // Backward-compatible alias
    const openSectionInNewTab = navigateToSection;

    const isLinkActive = (linkId) => {
        if (linkId === "home") {
            return !activeSection || activeSection === "home";
        }
        return activeSection === linkId || (linkId === "about" && activeSection === "story");
    };

    return (
        // id="navbar" — GSAP targets this for the page-load slide-down
        <nav id="navbar" className="absolute top-4 left-1/2 z-50 w-[88%] max-w-5xl -translate-x-1/2">

            <div 
                className={`transition-all duration-300 ${isOpen ? "rounded-3xl" : "rounded-full"} px-6 py-3.5 backdrop-blur-xl ${
                    isLightMode 
                        ? "border border-zinc-200/80 bg-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.06)]" 
                        : "border border-white/20 bg-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]"
                }`}
            >
                <div className="flex items-center justify-between">

                    {/* Logo Button */}
                    <button 
                        type="button"
                        onClick={(e) => navigateToSection("home", e)}
                        className="flex items-center cursor-pointer transition-transform duration-300 hover:scale-105 focus:outline-none"
                        aria-label="Focal Home"
                    >
                        <img 
                            src="/Focal.png" 
                            alt="FOCAL" 
                            className="h-9 w-auto object-contain transition-all duration-300"
                            style={{ filter: isLightMode ? "brightness(0)" : "none" }}
                        />
                    </button>

                    {/* Desktop Navigation Buttons */}
                    <div className="hidden items-center gap-2 md:flex">
                        {navLinks.map((link) => {
                            const active = isLinkActive(link.id);
                            return (
                                <button
                                    key={link.name}
                                    type="button"
                                    onClick={(e) => navigateToSection(link.id, e)}
                                    className={`relative px-4 py-2 text-sm transition-all duration-300 rounded-full cursor-pointer focus:outline-none
                                        ${isLightMode
                                            ? active 
                                                ? "text-zinc-950 font-bold after:w-1/2 after:bg-orange-500" 
                                                : "text-zinc-700 font-semibold hover:text-black hover:bg-black/5 after:w-0 hover:after:w-1/2 after:bg-orange-500"
                                            : active
                                                ? "text-white font-bold after:w-1/2 after:bg-orange-400"
                                                : "text-white/85 font-medium hover:text-white hover:bg-white/10 after:w-0 hover:after:w-1/2 after:bg-orange-400"
                                        }
                                        after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:rounded-full after:transition-all after:duration-300`}
                                >
                                    {link.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* Desktop CTA Button */}
                    <button 
                        type="button"
                        onClick={(e) => navigateToSection("contact", e)}
                        className="hidden rounded-full bg-gradient-to-r from-orange-400 to-amber-400 hover:from-orange-500 hover:to-amber-500 px-5 py-2.5 text-sm font-bold text-zinc-950 md:inline-flex items-center gap-1.5 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer focus:outline-none"
                    >
                        <span>Let's Talk</span>
                        <ArrowUpRight size={16} />
                    </button>

                    {/* Mobile Toggle */}
                    <button 
                        type="button"
                        onClick={() => setIsOpen(!isOpen)} 
                        className={`md:hidden p-1 rounded-lg transition-colors focus:outline-none cursor-pointer ${
                            isLightMode 
                                ? "text-zinc-900 hover:bg-black/5" 
                                : "text-white hover:bg-white/10"
                        }`} 
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className={`mt-4 border-t pt-4 md:hidden ${isLightMode ? "border-zinc-200/80" : "border-white/10"}`}>
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => {
                                const active = isLinkActive(link.id);
                                return (
                                    <button
                                        key={link.name}
                                        type="button"
                                        onClick={(e) => {
                                            setIsOpen(false);
                                            navigateToSection(link.id, e);
                                        }}
                                        className={`w-full text-left rounded-xl px-4 py-3 text-sm transition-colors cursor-pointer focus:outline-none ${
                                            isLightMode
                                                ? active 
                                                    ? "bg-black/5 text-zinc-950 font-bold" 
                                                    : "text-zinc-800 font-semibold hover:bg-black/5 hover:text-black"
                                                : active
                                                    ? "bg-white/15 text-white font-bold"
                                                    : "text-white/85 font-medium hover:bg-white/10 hover:text-white"
                                        }`}
                                    >
                                        {link.name}
                                    </button>
                                );
                            })}
                            <button
                                type="button"
                                onClick={(e) => {
                                    setIsOpen(false);
                                    navigateToSection("contact", e);
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