const Logo = ({ logoSize, fontSize }) => {
  return (
    <div className="flex items-center justify-center gap-5">
      <div className={`w-full ${logoSize}`}>
        <img
          src="/logo.svg"
          alt=""
        />
      </div>
      <p className={`font-bold text-dark-100 ${fontSize}`}>Tienda Digital</p>
    </div>
  );
};

export default Logo;
