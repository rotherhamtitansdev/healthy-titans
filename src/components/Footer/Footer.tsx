import React from "react";
import { Link } from "react-router-dom";
import FacebookLogo from "../../img/Facebook.svg";
import YoutubeLogo from "../../img/YoutubeLogo.svg";
import TwitterLogo from "../../img/TwitterLogo.svg";
import TitansLogo from "../../img/TitansCommunityLogo.png";
import ANDLogo from "../../img/AND-icon.png";
import Logo from "../../img/Logo.svg";

const Footer = () => (
  <footer className="text-left lg:text-center bg-mbfooterwave bg-no-repeat bg-span md:bg-tbfooterwave md:pt-10 lg:bg-footerwave lg:pt-0 text-[#243A73] font-medium">
    <div className="flex justify-center pt-2 md:pt-14 lg:pt-14 ">
      <Link to="/">
        <img src={Logo} className="w-32 md:w-44" alt="Cookie's Khaw" />
      </Link>
    </div>

    <div className="py-14 lg:pt-20 text-left px-4 md:text-left">
      <div
        className="flex flex-wrap justify-center space-y-10
        md:place-items-center md:grid md:grid-cols-1 md:grid-rows-2 md:gap-y-14 md:space-y-0
         lg:gap-y-0 lg:flex lg:justify-evenly"
      >
        <div className="flex gap-x-16">
          <div className="justify-center flex flex-col items-center pb-6">
            <p className="font-bold mb-4 flex text-center justify-center md:justify-start">
              Powered by
            </p>
            <a href="https://www.titans-rugby.com/" target="_blank" rel="noreferrer">
              <img
                src={TitansLogo}
                alt="Titans Community Foundation Logo"
                className="w-16 mx-auto md:mx-0"
              />
            </a>
          </div>

          <div className="justify-center flex flex-col items-center pb-10">
            <p className="font-bold mb-4 flex text-center justify-center md:justify-start">
              In collaboration with
            </p>
            <a href="https://www.and.digital/" target="_blank" rel="noreferrer">
              <img src={ANDLogo} alt="AND Digital" className="w-16 justify-center" />
            </a>
          </div>
        </div>

        <div className="space-y-16 md:space-y-0 md:flex justify-between pb-5 md:justify-around w-full lg:w-7/12 px-4">
          <div className="space-y-6">
            <p className="font-bold mb-4 flex justify-left md:justify-start">About us</p>
            <p className="mb-4">
              <a href="/AboutUs" className="text-[#243A73]">
                Cookie&apos;s KHAW
              </a>
            </p>
            <p className="mb-4">
              <a href="https://www.titans-rugby.com/about-tcf" className="text-[#243A73]">
                Titans Community Foundation
              </a>
            </p>
          </div>

          <div className="space-y-6">
            <p className="font-bold mb-4 flex justify-left md:justify-start">External Links</p>
            <p className="mb-4">
              <a href="https://endchildfoodpoverty.org/" className="text-[#243A73]">
                #ENDCHILDFOODPOVERTY
              </a>
            </p>
            <p className="mb-4">
              <a href="https://www.nhs.uk/live-well/eat-well/" className="text-[#243A73]">
                Eat well - NHS
              </a>
            </p>
          </div>

          <div className="space-y-6 justify-center md:justify-start">
            <p className="font-bold mb-4 flex justify-left md:justify-start">Follow us</p>

            <div className="flex h-10 space-x-10 justify-left">
              <a href="https://www.facebook.com/RotherhamRugby" className="flex justify-center">
                <img src={FacebookLogo} alt="Rotherham Titans Facebook" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCmGpl0cHbu38pTSjjCd16dg"
                className="flex justify-center"
              >
                <img src={YoutubeLogo} alt="Rotherham Titans Youtube" />
              </a>
              <a href="https://twitter.com/RotherhamRugby" className="flex justify-center">
                <img src={TwitterLogo} alt="Rotherham Titans Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-left p-10">
      <span>© TITANS COMMUNITY FOUNDATION 2022</span>
    </div>
  </footer>
);

export default Footer;
