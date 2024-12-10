import React from 'react';

const RoundedCorners = () => {
  return (
    <svg
      className="invisible absolute size-0"  // SVG element with classes that initially hide it and position it absolutely
      xmlns="http://www.w3.org/2000/svg"   // XML namespace declaration for SVG
    >
      <defs>  {/* SVG definitions section where reusable elements are defined */}
        <filter id="flt_tag">  {/* Defining a filter with ID 'flt_tag' */}
          <feGaussianBlur  // Applying a Gaussian blur effect to the filter
            in="SourceGraphic"  // Specifies the input image for the filter, which is the entire graphic
            stdDeviation="8"  // Amount of blur to apply
            result="blur"  // Name of the resulting image after the blur effect
          />
          <feColorMatrix  // Applying a color matrix effect to the result of the Gaussian blur
            in="blur"  // Specifies the input image for the filter, which is the blurred graphic
            mode="matrix"  // Matrix multiplication mode for color manipulation
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"  // Transformation matrix values for adjusting color
            result="flt_tag"  // Name of the resulting image after the color matrix effect
          />
          <feComposite  // Combining the original graphic with the filtered graphic
            in="SourceGraphic"  // Specifies the input image for the filter, which is the entire graphic
            in2="flt_tag"  // Specifies the second image input for the filter, which is the color matrix effect result
            operator="atop"  // Composite operation mode where the resulting image combines the top and bottom images
          />
        </filter>
      </defs>
    </svg>
  );
}

export default RoundedCorners;

