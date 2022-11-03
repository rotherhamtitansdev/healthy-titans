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
    <nav>
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
                >
                  <img src={Logo} className="w-52" alt="Cookie's Khaw" />
                </Link>
              </div>
              <div className="flex justify-end xl:justify-center w-full">
                <div className="hidden xl:flex justify-evenly w-7/12 font-navigation-items font-bold text-titansDarkBlue text-[16px]">
                  <Link to="/FoodAndNutrition" className="hover:text-[#D14267]">
                    Food & Nutrition
                  </Link>
                  <Link to="/FitnessChallenges" className="hover:text-[#D14267]">
                    Fitness Challenges
                  </Link>
                  <Link to="/Games" className="hover:text-[#D14267]">
                    Games
                  </Link>
                  <Link to="/Videos" className="hover:text-[#D14267]">
                    Videos
                  </Link>
                  <Link to="/Recipes" className="hover:text-[#D14267]">
                    Recipes
                  </Link>
                  <Link to="/AboutUs" className="hover:text-[#D14267]">
                    About us
                  </Link>
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
              <li className="border-gray-400 my-2 md:my-4 text-sm font-bold text-titansDarkBlue hover:text-[#D14267]">
                <a href="/">Home</a>
              </li>
              <li className="border-gray-400 my-2 md:my-4  text-sm font-bold text-bold text-titansDarkBlue hover:text-[#D14267]">
                <a href="/FoodAndNutrition">Food & Nutrition</a>
              </li>
              <li className="border-gray-400 my-2 md:my-4 text-sm font-bold text-titansDarkBlue hover:text-[#D14267]">
                <a href="/FitnessChallenges">Fitness Challenges</a>
              </li>
              <li className="border-gray-400 my-2 md:my-4 text-sm font-bold text-titansDarkBlue hover:text-[#D14267]">
                <a href="/Games">Games</a>
              </li>
              <li className="border-gray-400 my-2 md:my-4 text-sm font-bold text-titansDarkBlue hover:text-[#D14267]">
                <a href="/Videos">Videos</a>
              </li>
              <li className="border-gray-400 my-2 md:my-4 text-sm font-bold text-titansDarkBlue hover:text-[#D14267]">
                <a href="/Recipes">Recipes</a>
              </li>
              <li className="border-gray-400 my-2 md:my-4 text-sm font-bold text-titansDarkBlue hover:text-[#D14267]">
                <a href="/AboutUs">About us</a>
              </li>
              <li className="border-gray-400 my-4">
                <img src={MenuLine} alt="MenuLine" />
              </li>
              <li className="border-gray-400 mb-8 flex justify-evenly w-48 align-middle">
                <a className="mt-[30px]" href=" https://www.facebook.com/RotherhamRugby">
                  <img className="h-8" src={FacebookLogo} alt="logo" />
                </a>
                <a className="mt-8" href="https://www.youtube.com/channel/UCmGpl0cHbu38pTSjjCd16dg">
                  <img className="h-7" src={YoutubeLogo} alt="logo" />
                </a>
                <a className="mt-8" href="https://twitter.com/RotherhamRugby">
                  <img className="h-7" src={TwitterLogo} alt="logo" />
                </a>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
