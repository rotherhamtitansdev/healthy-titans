import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FirebaseAPI from "../../api/FirebaseAPI";
import { AboutUsProps } from "../../models/AboutUs/AboutUsProps";
import AppHeader from "../app_header/AppHeader";
import MenuHeader from "../app_header/header/MenuHeader";
import MenuTitle from "../shared/MenuTitle";

const AboutUs = () => {
  const [AboutUsData, setAboutUsData] = useState<AboutUsProps | undefined>();

  useEffect(() => {
    FirebaseAPI.fetchAboutUsData().then((res) => {
      if (res) {
        setAboutUsData(res as DocumentData as AboutUsProps);
      }
    });
  }, []);

  console.log(AboutUsData);

  return (
    <>
      <AppHeader>
        <MenuHeader
          title="About Us"
          body={
            "Here's a bit about this app, who we are and why we've done it."
          }
        />
      </AppHeader>
      <div id="section1">
        <div id="textArea1">
          <h2>{AboutUsData?.section_1[0]}</h2>
          <p>{AboutUsData?.section_1[1]}</p>
          <p>{AboutUsData?.section_1[2]}</p>
        </div>
        <div id="imgArea1">

        </div>
      </div>
    </>
  );
};
export default AboutUs;
