// eslint-disable-next-line react/prop-types
function Button({ className, children, handleClick, type }) {
  if (type === "active") {
    return (
      <button
        onClick={handleClick}
        className={`lg:text-[20px] md:text-[18px] sm:text-[14px] lg:py-2 md:py-1 rounded-lg font-semibold sm:py-1 bg-[#57C49F] text-white ${className}`}
      >
        {children}
      </button>
    );
  }
  if (type === "outline") {
    return (
      <button
        onClick={handleClick}
        className={`lg:text-[20px] md:text-[18px] sm:text-[14px] lg:py-2 md:py-1 rounded-lg font-semibold sm:py-1 border-[1px] bg-white border-[#D0D0D0] text-[#D0D0D0] ${className}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={handleClick}
      className={`lg:text-[20px] md:text-[18px] sm:text-[14px] xs:py-2 lg:py-2 md:py-1 rounded-lg font-semibold sm:py-1 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
