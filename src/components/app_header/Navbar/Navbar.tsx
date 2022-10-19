import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "../../../img/Facebook.svg";
import MenuLine from "../../../img/MenuLine.png";
import YoutubeLogo from "../../../img/YoutubeLogo.svg";
import TwitterLogo from "../../../img/TwitterLogo.svg";
import { useGlobalMenuOpenContext } from "../AppHeaderContext";
import Logo from "../../../img/Logo.svg";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen, getAdditionalStyling } = useGlobalMenuOpenContext();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <div>
      <div className={`relative px-4 sm:px-6 ${getAdditionalStyling}`}>
        <div className="">
          <div className="flex w-full items-center py-4 h-20">
            <div className="flex absolute">
              <Link
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                to="/"
                className="pl-2 md:pl-5 lg:pl-8"
              >
                <img src={Logo} alt="Cookie's Khaw" />
              </Link>
            </div>
            <div className="flex justify-end xl:justify-center w-full">
              <div className="hidden xl:flex justify-evenly w-7/12 font-navigation-items font-bold text-titansDarkBlue text-[16px] hover:text-gray-900">
                <Link to="/NutritionalInformation">Food & Nutrition</Link>
                <Link to="/FitnessChallenges">Fitness Challenges</Link>
                <Link to="/Games">Games</Link>
                <Link to="/Videos">Videos</Link>
                <Link to="/Recipes">Recipes</Link>
                <Link to="/AboutUs">About us</Link>
              </div>

              <div className="ml-6 -my-2 xl:hidden">
                <button
                  aria-label="menu-toggle"
                  type="button"
                  className="flex flex-col h-12 w-12 justify-center items-center font-navigation-items"
                  aria-expanded="false"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <div
                    className={`h-1 w-6 rounded-full transition ease transform duration-300 bg-titansDarkBlue opacity-100 ${
                      isMenuOpen ? "rotate-45 translate-y-3 my-1" : "my-0.5"
                    }`}
                  />
                  <div
                    className={`h-1 w-6 rounded-full transition ease transform duration-300 bg-titansDarkBlue ${
                      isMenuOpen ? "opacity-0 my-1" : "opacity-100 my-0.5"
                    }`}
                  />
                  <div
                    className={`h-1 w-6 rounded-full transition ease transform duration-300 bg-titansDarkBlue ${
                      isMenuOpen ? "-rotate-45 -translate-y-3 opacity-100 my-1" : "my-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-testid="mobile-menu"
        className="origin-top-right right-0 w-full bg-mobileNavbarBackgroundColor absolute "
      >
        {isMenuOpen && (
          <ul className=" xl:hidden flex flex-col mt-8 mb-14 items-center overscroll-none">
            <li className="border-gray-400 my-2 text-sm font-medium text-titansDarkBlue hover:text-gray-900">
              <a href="/">Home</a>
            </li>
            <li className="border-gray-400 my-2  text-sm font-medium text-bold text-titansDarkBlue hover:text-gray-900">
              <a href="/NutritionalInformation">Food & Nutrition</a>
            </li>
            <li className="border-gray-400 my-2 text-sm font-medium text-titansDarkBlue hover:text-gray-900">
              <a href="/FitnessChallenges">Fitness Challenges</a>
            </li>
            <li className="border-gray-400 my-2 text-sm font-medium text-titansDarkBlue hover:text-gray-900">
              <a href="/Games">Games</a>
            </li>
            <li className="border-gray-400 my-2 text-sm font-medium text-titansDarkBlue hover:text-gray-900">
              <a href="/Videos">Videos</a>
            </li>
            <li className="border-gray-400 my-2 text-sm font-medium text-titansDarkBlue hover:text-gray-900">
              <a href="/Recipes">Recipes</a>
            </li>
            <li className="border-gray-400 my-2 text-sm font-medium text-titansDarkBlue hover:text-gray-900">
              <a href="/AboutUs">About us</a>
            </li>
            <li className="border-gray-400 my-2">
              <img src={MenuLine} alt="MenuLine" />
            </li>
            <li className="border-gray-400 mb-8 flex justify-evenly w-48 align-middle">
              <a className="mt-[30px]" href=" https://www.facebook.com/RotherhamRugby">
                <img className="h-8" src={FacebookLogo} alt="Facebook Logo" />
              </a>
              <a className="mt-8" href="https://www.youtube.com/channel/UCmGpl0cHbu38pTSjjCd16dg">
                <img className="h-7" src={YoutubeLogo} alt="Youtube Logo" />
              </a>
              <a className="mt-8" href="https://twitter.com/RotherhamRugby">
                <img className="h-7" src={TwitterLogo} alt="Twitter Logo" />
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
