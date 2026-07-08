const Button = ({ children }) => {
  return (
    <button
      className="
      rounded-xl
      bg-orange-500
      px-6
      py-3
      font-medium
      text-white
      transition-all
      duration-300
      hover:scale-105
      hover:bg-orange-400
      "
    >
      {children}
    </button>
  );
};

export default Button;