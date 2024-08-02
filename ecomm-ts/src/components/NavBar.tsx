import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">MyShop</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-cart">
        <a href="/cart">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;