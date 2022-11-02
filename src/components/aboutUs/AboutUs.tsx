// empty div at bottom for layout issue
import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FirebaseAPI from "../../api/FirebaseAPI";
import { AboutUsProps } from "../../models/AboutUs/AboutUsProps";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import TitansLogo from "../../img/TitansCommunityLogo.png";
import Logo from "../../img/Logo.svg"

const gridStyles = "grid grid-cols-1 md:grid-cols-2";
const sectionPaddingStyles = "py-6 md:py-14";
const sectionHeaderStyles = "font-semibold text-titansDarkBlue text-xl md:text-2xl lg:text-4xl py-5";
const imgContainerStyles = "flex justify-center items-center my-6 md:my-0";
const textMarginStyles = "mx-8 md:mx-16 lg:mx-24";
const textAreaStyles = `${textMarginStyles} flex flex-col gap-4`;

const AboutUs = () => {
  const [AboutUsData, setAboutUsData] = useState<AboutUsProps | undefined>();
  const [Images, setImages] = useState<string[] | undefined>();

  const aboutUsImages = ["AboutUs/speechmark.svg", "AboutUs/People.svg", "AboutUs/Hearts.svg"];

  useEffect(() => {
    FirebaseAPI.fetchAboutUsData().then((res) => {
      if (res) {
        setAboutUsData(res as DocumentData as AboutUsProps);
      }
    });

    // FirebaseAPI.fetchImages("FoodCategories/Fruits/FruitAndVeg.svg").then((value) =>
    //   setImgUrl(value)
    // );

    FirebaseAPI.fetchAllImages(aboutUsImages).then((value) => {
      setImages(value);
    });
  }, []);

  return (
    <>
      <AppHeader>
        <MenuHeader
          title="About Us"
          body={"Here's a bit about this app, who we are and why we've done it."}
        />
      </AppHeader>
      {AboutUsData && Images && (
        <div className="font-semibold text-titansDarkGrey text-sm md:text-base lg:text-xl">
          <div id="section1" className={`${gridStyles} ${sectionPaddingStyles}`}>
            <div id="textArea1" className={textAreaStyles}>
              <h2 className={sectionHeaderStyles}>{AboutUsData.section_1[0]}</h2>
              <p>{AboutUsData.section_1[1]}</p>
              <p>{AboutUsData.section_1[2]}</p>
            </div>
            <div id="imgArea1" className={textAreaStyles}>
              <img src={Images[0]} alt="speechmark" className="max-w-[62px] lg:max-w-[75px] py-5" />
              <p className="font-semibold text-xl lg:text-2xl text-titansDarkBlue">{AboutUsData.section_1[3]}</p>
              <p className="text-base lg:text-xl font-medium">{AboutUsData.section_1[4]}</p>
            </div>
          </div>
          <div id="section2" className={`${gridStyles} ${sectionPaddingStyles} bg-white`}>
            <div id="imgArea2" className={`${imgContainerStyles} order-last md:order-first`}>
              <img
                src={TitansLogo}
                alt="Titans Community Foundation Logo"
                className="h-[265px] w-[228px] lg:h-[388px] lg:w-[331px]"
              />
            </div>
            <div id="textArea2" className={textAreaStyles}>
              <h2 className={sectionHeaderStyles}>{AboutUsData.section_2[0]}</h2>
              <p>{AboutUsData.section_2[1]}</p>
              <p>{AboutUsData.section_2[2]}</p>
            </div>
          </div>
          <div id="section3" className={`${gridStyles} ${sectionPaddingStyles}`}>
            <div id="textArea3" className={textAreaStyles}>
              <h2 className={sectionHeaderStyles}>{AboutUsData.section_3[0]}</h2>
              <p>{AboutUsData.section_3[1]}</p>
            </div>
            <div id="imgArea2" className={imgContainerStyles}>
              <img
                src={Images[2]}
                alt="green hearts"
                className="h-[265px] w-[228px] lg:h-[388px] lg:w-[331px]"
              />
            </div>
          </div>
          <div id="section4" className={`${gridStyles} ${sectionPaddingStyles} bg-white`}>
            <div id="imgArea3" className={imgContainerStyles}>
              <img
                src={Images[1]}
                alt="1 in 4 people"
                className="h-[265px] w-[228px] lg:h-[388px] lg:w-[331px]"
              />
            </div>
            <div id="textArea4" className={textAreaStyles}>
              <h2 className={sectionHeaderStyles}>{AboutUsData.section_4[0]}</h2>
              <p>{AboutUsData.section_4[1]}</p>
            </div>
          </div>
          <div id="section5" className={`${gridStyles} ${sectionPaddingStyles}`}>
              <div id="textArea5" className={textAreaStyles}>
              <h2 className={sectionHeaderStyles}>{AboutUsData.section_5[0]}</h2>
              <p>{AboutUsData.section_5[1]}</p>
              <p>{AboutUsData.section_5[2]}</p>
            </div>
            <div id="imgArea5" className={imgContainerStyles}>
              <img
                src={Logo}
                alt="Cookie's Khaw"
                className="md:w-[270px] lg:w-[453px]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AboutUs;
