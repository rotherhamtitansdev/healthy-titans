import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FirebaseAPI from "../../api/FirebaseAPI";
import { AboutUsProps } from "../../models/AboutUs/AboutUsProps";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import RTLogo from "../../img/RT_Logo.png";

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

  console.log(AboutUsData);

  return (
    <div className="bg-white">
      <AppHeader>
        <MenuHeader
          title="About Us"
          body={"Here's a bit about this app, who we are and why we've done it."}
        />
      </AppHeader>
      {AboutUsData && (
        <>
          <div id="section1" className="grid grid-cols-2 justify-center">
            <div id="textArea1" className="flex flex-col gap-4">
              <h2 className="font-semibold text-[#252948] text-2xl md:text-3xl lg:text-4xl py-5">
                {AboutUsData.section_1[0]}
              </h2>
              <p className="w-[307px] lg:w-[512px]">{AboutUsData.section_1[1]}</p>
              <p className="w-[307px] lg:w-[512px]">{AboutUsData.section_1[2]}</p>
            </div>
            <div id="imgArea1">
              <img
                src={imgUrl}
                alt="fruit and veg"
                className="h-[200px] w-[200px] md:h-[200px] md:w-[200px] lg:h-[400px] lg:w-[400px] xl:h-[400px] xl:w-[400px]"
              />
            </div>
          </div>
          <div id="section2" className="grid grid-cols-2 bg-[#F4F7FD]">
            <div id="imgArea2">
              <img
                src={RTLogo}
                alt="RT Logo"
                className="h-[265px] w-[228px] md:h-[265px] md:w-[228px] lg:h-[388px] lg:w-[331px] xl:h-[388px] xl:w-[331px]"
              />
            </div>
            <div id="textArea2" className="flex flex-col gap-4">
              <h2 className="font-semibold text-[#252948] text-2xl md:text-3xl lg:text-4xl py-5">
                {AboutUsData.section_2[0]}
              </h2>
              <p className="w-[307px] lg:w-[512px]">{AboutUsData.section_2[1]}</p>
              <p className="w-[307px] lg:w-[512px]">{AboutUsData.section_2[2]}</p>
            </div>
          </div>
          <div id="section3">
            <h2 className="font-semibold text-[#252948] text-2xl md:text-3xl lg:text-4xl py-5">
              {AboutUsData.section_3[0]}
            </h2>
            <div className="grid grid-cols-2">
              <p className="w-[307px] lg:w-[512px]">{AboutUsData.section_3[1]}</p>
              <p className="w-[307px] lg:w-[512px]">{AboutUsData.section_3[2]}</p>
            </div>
          </div>
          <div id="section4" className="bg-[#F4F7FD]">
            <h2 className="font-semibold text-[#252948] text-2xl md:text-3xl lg:text-4xl py-5">
              {AboutUsData.section_4[0]}
            </h2>
            <div className="grid grid-cols-2">
              <div className="flex flex-col gap-4">
                <p className="w-[307px] lg:w-[512px]">{AboutUsData.section_4[1]}</p>
                <p className="w-[307px] lg:w-[512px]">{AboutUsData.section_4[2]}</p>
              </div>
              <div className="flex flex-col gap-4">
                <p className="w-[307px] lg:w-[512px]">{AboutUsData.section_4[3]}</p>
                <p className="w-[307px] lg:w-[512px]">{AboutUsData.section_4[4]}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default AboutUs;
