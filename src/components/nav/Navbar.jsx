import { Link } from "react-scroll";
import { navLinksData } from "../../data/nav";

const Navbar = () => {
  return (
    <div className="mt-32 ">
      
      <div className="flex items-center justify-between py-8">
        {navLinksData.map((item) => (
          <div
            className="w-[135px] py-3 bg-white rounded-md" 
            key={item.id}
          >
           <div className="flex flex-col items-center justify-center">
           <img src={item.image} alt={item.title} className="mb-3" />
         
            <Link
            className="cursor-pointer "
            activeClass="active"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            >
            {item.title}
            </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Navbar;
