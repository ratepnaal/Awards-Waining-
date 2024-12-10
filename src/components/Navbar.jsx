import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useWindowScroll } from "react-use";

// List of navigation items
const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {
    // Ref to the nav container element
    const navContainarRef = useRef(null);
    // Ref to the audio element
    const audioElementRef = useRef(null);
    // State to manage if audio is playing
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    // State to manage if indicator is active
    const [isIndiCatorActive, setIsIndicatorActive] = useState(false);
    // State to store the last scroll position
    const [lastScrollY, setLastScrollY] = useState(0);
    // State to determine if the nav is visible
    const [isNavVisible, setIsNavVisible] = useState(true);

    // Toggle audio and indicator states
    const toggleAudioIndicator = () => {
        setIsAudioPlaying(prev => !prev);
        setIsIndicatorActive(prev => !prev);
    };

    // Play or pause audio based on `isAudioPlaying` state
    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

    // Handle scroll events to show/hide the nav
    const { y: currentScrollY } = useWindowScroll();
    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainarRef.current.classList.remove('floating-nav');
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainarRef.current.classList.add('floating-nav');
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainarRef.current.classList.add('floating-nav');
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    // Animate nav container with GSAP when it becomes visible/invisible
    useEffect(() => {
        gsap.to(navContainarRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.5,
        });
    }, [isNavVisible]);

    return (
        <div ref={navContainarRef} className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6">
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <img
                            src="/public/img/logo.png"
                            alt="logo"
                            className="w-10"
                        />
                        <Button
                            id="product-button"
                            title="Products"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                        />
                    </div>
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item) => (
                                <a key={item} className="nav-hover-btn" href={`#${item.toLowerCase()}`}>
                                    {item}
                                </a>
                            ))}
                        </div>
                        <button
                            className="ml-10 flex items-center space-x-0.5"
                            onClick={toggleAudioIndicator}
                        >
                            <audio
                                ref={audioElementRef}
                                className="bg-yellow-400"
                                src="/public/audio/loop.mp3"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div key={bar}
                                    className={`indicator-line ${isIndiCatorActive ? `active` : ``}`}
                                    style={{ animationDelay: `${bar * 0.1}s` }}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;

