const Logo = ({ nombre }) => {
  return (
    <>
      <div className="navbar-logo">
        <a href="/">{nombre}</a>
      </div>
    </>
  );
};

export default Logo;
