import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import transitions from "../../Locale/Footer.json";

const Footer = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "ko",
  );

  useEffect(() => {
    const handleLanguageChange = () => {
      setLanguage(localStorage.getItem("language") || "ko");
    };

    window.addEventListener("languageChange", handleLanguageChange);
    return () => {
      window.removeEventListener("languageChange", handleLanguageChange);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {transitions[language].footer.company.title}
            </h3>
            <p className="text-gray-400">
              {transitions[language].footer.company.description}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              {transitions[language].footer.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  {transitions[language].footer.quickLinks.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  {transitions[language].footer.quickLinks.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  {transitions[language].footer.quickLinks.leadership}
                </Link>
              </li>
              <li>
                <Link
                  to="/board"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  {transitions[language].footer.quickLinks.board}
                </Link>
              </li>
              <li>
                <Link
                  to="/our-services"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  {transitions[language].footer.quickLinks.services}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  {transitions[language].footer.quickLinks.contact}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">연락처</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{transitions[language].footer.contact.address1}</li>
              <li>{transitions[language].footer.contact.address}</li>
              <li>{transitions[language].footer.contact.phone}</li>
              <li>{transitions[language].footer.contact.email}</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">
              {transitions[language].footer.social.title}
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{transitions[language].footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
