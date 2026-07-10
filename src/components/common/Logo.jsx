const Logo = ({ src, alt, size = 70 }) => {
  return (
    <img
      src={`/logos/${src}`}
      alt={alt}
      width={size}
      height={size}
      draggable={false}
      loading="lazy"
      className="object-contain"
    />
  );
};

export default Logo;