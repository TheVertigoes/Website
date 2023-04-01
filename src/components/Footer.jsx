import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaSpotify,
} from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <a className="footer__link" href="https://www.facebook.com/TheVertigoes" rel="noopener noreferrer" target="_blank">
        <FaFacebook className="icon" />
      </a>
      <a className="footer__link"  href="https://www.instagram.com/the__vertigoes/" rel="noopener noreferrer" target="_blank">
        <FaInstagram className="icon" />
      </a>
      <a className="footer__link"  href="https://www.youtube.com/@the_vertigoes" rel="noopener noreferrer" target="_blank">
        <FaYoutube className="icon" />
      </a>
      <a className="footer__link"  href="https://open.spotify.com/artist/1pkw1cSrFI610qUbsZqIOq" rel="noopener noreferrer" target="_blank">
        <FaSpotify className="icon" />
      </a>
    </footer>
  );
}

export default Footer;
