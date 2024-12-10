import React, { useRef } from 'react';
import AnimatedTitle from './AnimatedTitle';  // Importing an animated title component
import gsap from 'gsap';  // Importing GSAP (GreenSock Animation Platform) for animations
import RoundedCorners from './RoundedCorners';  // Importing a component for adding rounded corner effects
import Button from './Button';  // Importing a button component

const Story = () => {
    const frameRef = useRef('');  // Creating a reference for the image element

    // Handler for mouse leave events
    const handleMouseLeave = () => {
        const element = frameRef.current;  // Get the current DOM element
        gsap.to(element, {  // Use GSAP to animate the element
            duration: 0.3,
            rotateX: 0,  // Reset rotation on the X axis
            rotateY: 0,  // Reset rotation on the Y axis
            ease: 'power1.inOut'  // Easing function for the animation
        });
    };

    // Handler for mouse move events
    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;  // Get the mouse position
        const element = frameRef.current;  // Get the current DOM element
        if (!element) return;  // If the element doesn't exist, do nothing

        const rect = element.getBoundingClientRect();  // Get the bounding rectangle of the element
        const x = clientX - rect.left;  // Calculate X position relative to the element
        const y = clientY - rect.top;  // Calculate Y position relative to the element
        const centerX = rect.width / 2;  // Calculate the center X position of the element
        const centerY = rect.height / 2;  // Calculate the center Y position of the element

        // Calculate rotation values based on the mouse position
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        // Use GSAP to animate the element's rotation
        gsap.to(element, {
            duration: 0.3,
            rotateX,  // Set rotation on the X axis
            rotateY,  // Set rotation on the Y axis
            transformPerspective: 500,  // Perspective for 3D transformation
            ease: 'power1.inOut'  // Easing function for the animation
        });
    };

    return (
        <section id='story' className='min-h-dvh w-screen bg-black text-blue-50 '>
            <div className='flex size-full flex-col items-center py-10 pb-24 '>
                <p className='font-general text-sm uppercase md:text-[10px]'>the multiversal ip world </p>
                <div className='relative size-full '>
                    <AnimatedTitle
                        title={`the${' '} story of <br/> a ${' '} hidden ${' '} realm`}
                        sectionId="#story"
                        containarClass="mt-5 pointer-events-none mix-blend-difference relative z-10 gap-1 "
                    />
                    <div className='story-img-container'>
                        <div className='story-img-mask'>
                            <div className='story-img-content'>
                                <img
                                    ref={frameRef}  // Reference for the image element
                                    src='/public/img/entrance.webp'
                                    alt='entrance'
                                    onMouseLeave={handleMouseLeave}  // Mouse leave event handler
                                    onMouseUp={handleMouseLeave}  // Mouse up event handler
                                    onMouseEnter={handleMouseLeave}  // Mouse enter event handler
                                    onMouseMove={handleMouseMove}  // Mouse move event handler
                                    className='object-contain'
                                />
                            </div>
                        </div>
                        <RoundedCorners />  {/* Component for rounded corners effect */}
                    </div>
                </div>
                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                            Where realms converge, lies Zentry and the boundless pillar.
                            Discover its secrets and shape your fate amidst infinite
                            opportunities.
                        </p>
                        <Button
                            id="realm-btn"
                            tittle="discover prologue"
                            containerClass="mt-5 "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Story;

