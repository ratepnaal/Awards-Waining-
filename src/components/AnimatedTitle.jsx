import React, { useEffect, useRef } from 'react'; // Importing React and hooks
import gsap from 'gsap'; // Importing GSAP for animations

const AnimatedTitle = ({ title, containarClass }) => {
  // Creating a reference to the container element
  const containarRef = useRef(null);

  useEffect(() => {
    // Setting up scoped animations using gsap.context
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          // Trigger animation when the container enters the viewport
          trigger: containarRef.current,
          start: '100 bottom', // Start when the bottom of the viewport is 100px from the container
          end: 'center bottom', // End when the viewport bottom aligns with the container's center
          toggleActions: 'play none none reverse', // Play on entering, reverse on leaving
        },
      });

      // Animate individual characters with staggered timing
      titleAnimation.to('.animated-word', {
        opacity: 1, // Fade the characters in
        transform: 'translate3d(0,0,0) rotateY(0deg) rotateX(0deg)', // Reset translation and rotation
        ease: 'power2.inOut', // Smooth easing for animations
        stagger: 0.02, // Apply a delay between each character's animation
      });
    }, containarRef);

    // Cleanup function to revert animations on component unmount
    return () => ctx.revert();
  }, []); // Empty dependency array to run once on mount

  return (
    <div
      ref={containarRef} // Attaching the reference to the container
      className={`animated-title ${containarClass}`} // Applying custom and default classes
    >
      {/* Splitting the title into lines by <br/> */}
      {title.split('<br/>').map((line, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap gap-1 px-8 text-4xl md:text-8xl md:gap-1"
        >
          {/* Splitting each line into individual characters */}
          {line.split('').map((word, i) => (
            <span
              key={i}
              className="animated-word" // Class for animated characters
              dangerouslySetInnerHTML={{ __html: word }} // Rendering HTML characters safely
            ></span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AnimatedTitle; // Exporting the component for use in other parts of the application

