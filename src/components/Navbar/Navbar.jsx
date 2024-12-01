import { ShoppingCart } from "lucide-react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white px-4 fixed w-full z-50 shadow-sm top-0 shadow-gray-400">
      <div className="max-w-7xl mx-auto py-2 px-5 flex justify-between items-center">
        <img src={Logo} alt="" className="md:w-24 w-20" />
        <div className="flex items-center gap-5">
          <nav className="hidden md:block">
            <ul className="flex items-center text-xl font-semibold gap-7">
              <Link to='/'><li>Home</li></Link>
              <Link to='/mens'><li>Mens</li></Link>
              <Link to='/womens'><li>Womens</li></Link>
              <Link to='/kids'><li>Kids</li></Link>
              <Link to='/login'><button className="bg-red-500 px-4 py-1 text-white rounded-md">Login</button></Link>
            </ul>
          </nav>
          <Link to="/cart" className="relative w-10">
            <ShoppingCart/>
            <div className="bg-red-500 w-5 absolute -top-3 right-1 flex items-center justify-center rounded-full text-white">0</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar