import gsap from "gsap"; // Importing the GSAP library for animations
import { useGSAP } from "@gsap/react"; // Importing a hook to integrate GSAP with React
import { ScrollTrigger } from "gsap/all"; // Importing ScrollTrigger for scroll-based animations
import AnimatedTitle from "./AnimatedTitle"; // Importing a custom component for the animated title

gsap.registerPlugin(ScrollTrigger); // Registering ScrollTrigger for usage in the GSAP library

const About = () => {
  useGSAP(() => {
    // Creating a timeline for animations using GSAP
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip", // The element that triggers the scroll animation
        start: "center center", // Animation starts when the element is centered in the viewport
        end: "+=800 center", // Animation ends after scrolling 800 pixels
        scrub: 0.5, // Adds smooth transition between animation frames during scrolling
        pin: true, // Pins the element in place while scrolling
        pinSpacing: true, // Retains spacing after the pinned element
      },
    });

    // Expanding the element with the class .mask-clip-path
    clipAnimation.to(".mask-clip-path", {
      width: "100vw", // Expands to fill the full width of the viewport
      height: "100vh", // Expands to fill the full height of the viewport
      borderRadius: 0, // Removes any border radius (making the corners square)
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      {/* Top section containing text and animated title */}
      <div className="relative mb-8 mt-12 flex flex-col items-center gap-5">
        {/* Welcome text */}
        <p className="font-general mb-20 text-sm uppercase md:text-[20px]">
          Welcome to Zentry
        </p>

        {/* Animated title displayed dynamically */}
        <AnimatedTitle
          title="Discover the world's <br/> largest shared adventure"
          containarClass="mt-5 !text-black text-center"
        />

        {/* Subtext providing more details */}
        <div className="about-subtext">
          <p>The Game of Games begins—your life, now an epic MMORPG</p>
          <p className="text-gray-500">
            Zentry unites every player from countless games and platforms, both
            digital and physical, into a unified Play Economy
          </p>
        </div>
      </div>

      {/* Bottom section containing the background image with animation */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About; // Exporting the component to be used in other parts of the application
