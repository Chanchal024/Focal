import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#Experience" },
        { name: "Menu", href: "#Menu" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="absolute top-4 left-1/2 z-50 w-[82%] max-w-5xl -translate-x-1/2 animate-arrive">
            {/* Glass Navbar */}
            <div className="rounded-[5rem] border border-white/20 bg-white/10 px-6 py-4 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl backdrop-saturate-150">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#"
                        className="text-2xl font-bold tracking-wide text-white transition hover:text-white/80">
                        FOCAL<span className="text-orange-400">.</span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="relative text-s font-medium text-white
                  transition
                  duration-300
                  hover:text-white

                  after:absolute
                  after:-bottom-2
                  after:left-0
                  after:h-[2px]
                  after:w-0
                  after:rounded-full
                  after:bg-orange-400
                  after:transition-all
                  after:duration-300

                  hover:after:w-full
                "
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <a href="#contact" className="hidden rounded-full bg-orange-400 px-5 py-2.5 text-sm font-semibold text-black md:block">
                        Let's Talk
                    </a>

                    {/* Mobile Menu Button */}
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white md:hidden" aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={25} /> : <Menu size={25} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="mt-5 border-t border-white/10 pt-5 md:hidden">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="
                    rounded-xl
                    px-4 py-3
                    text-sm
                    font-medium
                    text-white/80
                    transition
                    hover:bg-white/10
                    hover:text-white
                  "
                                >
                                    {link.name}
                                </a>
                            ))}

                            <a
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                                className="
                  mt-2
                  rounded-xl
                  bg-orange-400
                  px-4 py-3
                  text-center
                  text-sm
                  font-semibold
                  text-black
                  transition
                  hover:bg-orange-300
                "
                            >
                                Let's Talk
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;