import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="fixed top-0 z-20 w-full py-1 bg-white">
      <div className="container mx-auto">
        <HeaderTop />
        <HeaderBottom/>
      </div>
    </header>
  );
};

export default Header;
