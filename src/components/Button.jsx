const Button = ({ tittle, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id} // Unique identifier for the button in the DOM
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden 
      rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`} // Combined default and custom styles
    >
      {leftIcon} {/* Renders an optional icon on the left side of the button */}
      <span
        className="relative incline-flex overflow-hidden font-general text-xs uppercase"
      >
        <div>
          {tittle} {/* The main text/content of the button */}
        </div>
      </span>
      {rightIcon} {/* Renders an optional icon on the right side of the button */}
    </button>
  );
};

export default Button;

