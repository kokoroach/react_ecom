import { FC } from "react";

const Footer: FC = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About Us</h4>
            <p>Information about the company.</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>Email: info@myshop.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 MyShop. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;