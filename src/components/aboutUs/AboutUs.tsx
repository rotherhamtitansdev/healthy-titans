// empty div at bottom for layout issue
/* eslint-disable react/self-closing-comp */
import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FirebaseAPI from "../../api/FirebaseAPI";
import { AboutUsProps } from "../../models/AboutUs/AboutUsProps";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import RTLogo from "../../img/RT_Logo.png";

const gridStyles = "grid grid-cols-1 md:grid-cols-2";
const sectionPaddingStyles = "py-6 md:py-14";
const sectionHeaderStyles = "font-semibold text-[#252948] text-xl md:text-2xl lg:text-4xl py-5";
const imgContainerStyles = "flex justify-center items-center my-6 md:my-0";
const textMarginStyles = "mx-8 md:mx-16 lg:mx-24";
const textAreaStyles = `${textMarginStyles} flex flex-col gap-4`;

const AboutUs = () => {
  const [AboutUsData, setAboutUsData] = useState<AboutUsProps | undefined>();
  const [imgUrl, setImgUrl] = useState<string | undefined>("");

  useEffect(() => {
    FirebaseAPI.fetchAboutUsData().then((res) => {
      if (res) {
        setAboutUsData(res as DocumentData as AboutUsProps);
      }
    });

    FirebaseAPI.fetchImages("FoodCategories/Fruits/FruitAndVeg.svg").then((value) =>
      setImgUrl(value)
    );
  }, []);

  return (
    <>
      <AppHeader>
        <MenuHeader
          title="About Us"
          body={"Here's a bit about this app, who we are and why we've done it."}
        />
      </AppHeader>
      {AboutUsData && (
        <div className="font-semibold text-titansDarkGrey text-sm md:text-base lg:text-xl">
          <div id="section1" className={`${gridStyles} ${sectionPaddingStyles}`}>
            <div id="textArea1" className={textAreaStyles}>
              <h2 className={sectionHeaderStyles}>{AboutUsData.section_1[0]}</h2>
              <p>{AboutUsData.section_1[1]}</p>
              <p>{AboutUsData.section_1[2]}</p>
            </div>
            <div id="imgArea1" className={imgContainerStyles}>
              <img
                src={imgUrl}
                alt="fruit and veg"
                className="h-[200px] w-[200px] md:h-[300px] md:w-[300px] lg:h-[400px] lg:w-[400px]"
              />
            </div>
          </div>
          <div id="section2" className={`${gridStyles} ${sectionPaddingStyles} bg-white`}>
            <div id="imgArea2" className={`${imgContainerStyles} order-last md:order-first`}>
              <img
                src={RTLogo}
                alt="Rotherham Titans Logo"
                className="h-[265px] w-[228px] lg:h-[388px] lg:w-[331px]"
              />
            </div>
            <div id="textArea2" className={textAreaStyles}>
              <h2 className={sectionHeaderStyles}>{AboutUsData.section_2[0]}</h2>
              <p>{AboutUsData.section_2[1]}</p>
              <p>{AboutUsData.section_2[2]}</p>
            </div>
          </div>
          <div id="section3" className={sectionPaddingStyles}>
            <h2 className={`${sectionHeaderStyles} ${textMarginStyles} md:max-w-[40%]`}>
              {AboutUsData.section_3[0]}
            </h2>
            <div className={gridStyles}>
              <p className={`${textMarginStyles}  mb-4 md:mb-0`}>{AboutUsData.section_3[1]}</p>
              <p className={textMarginStyles}>{AboutUsData.section_3[2]}</p>
            </div>
          </div>
          <div id="section4" className={`${sectionPaddingStyles} bg-white`}>
            <h2 className={`${sectionHeaderStyles} ${textMarginStyles}`}>
              {AboutUsData.section_4[0]}
            </h2>
            <div className={gridStyles}>
              <div className={`${textAreaStyles} mb-4 md:mb-0`}>
                <p>{AboutUsData.section_4[1]}</p>
                <p>{AboutUsData.section_4[2]}</p>
              </div>
              <div className={textAreaStyles}>
                <p>{AboutUsData.section_4[3]}</p>
                <p>{AboutUsData.section_4[4]}</p>
              </div>
            </div>
          </div>
          <div className="h-[50px] bg-gradient-to-b from-white to-transparent"></div>
        </div>
      )}
    </>
  );
};
export default AboutUs;
