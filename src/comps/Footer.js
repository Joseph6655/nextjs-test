import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footerall">
        <img src="/creoshiftlogo.jpg" alt="Footer Logo" />
        <div className="footer-links">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="social-icons">
          <Link href="https://www.Facebook.com"
             className="Facebook-icon">
              <img src="/facebooklogo.png" alt="Facebook" />
            
          </Link>
          <Link href="https://www.Whatsup.com"
            className="whats-up-icon">
              <img src="/whatsuplogo.png" alt="WhatsApp" />
           
          </Link>
          <Link href="https://www.Instagram.com"
             className="Instagram-icon">
              <img src="/instagramlogo.jpg" alt="Instagram" />
           
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
