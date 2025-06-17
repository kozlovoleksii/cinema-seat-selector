import "./Header.css"
import { FaFacebook, FaXTwitter, FaInstagram   } from "react-icons/fa6"

export const Header = () => {
  return (
    <header className="site-header">
      <div className="site-header__logo">
        <a href="/">🎬 Cinema</a>
      </div>
      <div className="site-header__socials">
        <a href="https://facebook.com" target="_blank">
          <FaFacebook/>
        </a>
        <a href="https://twitter.com" target="_blank">
          <FaXTwitter/>
        </a>
        <a href="https://instagram.com" target="_blank">
          <FaInstagram/>
        </a>
      </div>
    </header>
  );
};
