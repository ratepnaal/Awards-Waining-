import React from 'react';
import Button from './Button';

// Component to render an image with a custom clip path or style
const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" /> {/* Display the image */}
  </div>
);

const Contact = () => {
  return (
    <div
      id="contact"
      className="my-20 min-h-96 w-screen px-10" // Main container for the contact section
    >
      <div
        className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden"
      >
        {/* Left floating images */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:hidden lg:left-20 lg:w-96">
          <ImageClipBox
            clipClass="contact-clip-path-1" // Custom style for the first clipped image
            src="/public/img/contact-1.webp" // Source of the image
          />
          <ImageClipBox
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60" // Positioned with custom classes
            src="/public/img/contact-2.webp"
          />
        </div>

        {/* Top floating images */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            clipClass="absolute md:scale-125" // Custom scaling for the first sword image
            src="/public/img/swordman-partial.webp"
          />
          <ImageClipBox
            clipClass="sword-man-clip-path md:scale-125" // Custom clipping and scaling
            src="/public/img/swordman.webp"
          />
        </div>

        {/* Central text content */}
        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">join zentry</p> {/* Small header text */}
          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Let's b<b>u</b>ild the <br /> new era of
            <br /> g<b>a</b>ming t<b>o</b>gether
          </p>
          <Button
            tittle="contact us" // Button title
            containerClass="mt-10 cursor-pointer" // Additional styling for the button
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;

