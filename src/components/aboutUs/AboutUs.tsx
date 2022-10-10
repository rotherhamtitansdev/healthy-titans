import { DocumentData } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FirebaseAPI from "../../api/FirebaseAPI";

const AboutUs = () => {
  const [AboutUsData, setAboutUsData] = useState<AboutUsData | undefined>();

  useEffect(() => {
    FirebaseAPI.fetchAboutUsData().then((res) => {
      if (res) {
        setAboutUsData(res as DocumentData as AboutUsData);
      }
    });
  }, []);

  console.log(AboutUsData);

  return <p>a</p>;
};
export default AboutUs;
