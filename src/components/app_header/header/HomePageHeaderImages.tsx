import React, { useEffect, useState } from "react";
import FirebaseAPI from "../../../api/FirebaseAPI";
import { useGlobalMenuOpenContext } from "../AppHeaderContext";

const HomePageHeaderImagesNames = [
  "HomePageImages/Red apple.png",
  "HomePageImages/Bell pepper.png",
  "HomePageImages/Avocado.png",
  "HomePageImages/Broccoli.png",
  "HomePageImages/Blueberries.png",
  "HomePageImages/Carrot.png",
];

const HomePageHeaderImages = () => {
  const [getImageURLs, setImageURLs] = useState<string[]>();

  const { isMenuOpen } = useGlobalMenuOpenContext();

  useEffect(() => {
    Promise.all(HomePageHeaderImagesNames.map((value) => FirebaseAPI.fetchImages(value))).then(
      (value) => setImageURLs(value)
    );
  }, []);

  return (
    <div
      className={
        isMenuOpen
          ? "invisible"
          : "visible relative w-full overflow-x-clip -top-[70px] pointer-events-none"
      }
    >
      {/* {getImageURLs && (
        <img
          src={getImageURLs[0]}
          alt="Apple"
          className={
            isMenuOpen
              ? "absolute inset-x-[124px]"
              : "absolute invisible lg:visible inset-x-[140px] top-[260px]"
          }
        />
      )} */}
      {getImageURLs && (
        <img
          src={getImageURLs[1]}
          alt="Bell Pepper"
          className="absolute top-[50px] right-[10px] xs:right-[30px] sm:top-[60px] sm:right-[50px] xl:right-[300px] 2xl:right-[375px] -rotate-12 lg:-rotate-0"
        />
      )}
      {getImageURLs && (
        <img
          src={getImageURLs[2]}
          alt="Avocado"
          className="absolute left-[10px] xs:left-[10px] sm:left-[20px] md:left-[30px] lg:left-[80px] xl:left-[200px] 2xl:left-[300px] top-[170px] h-[57px] w-[57px] md:h-[74px] md:w-[74px] lg:h-[84px] lg:w-[84px] xl:h-[90px] xl:w-[90px]"
        />
      )}
      {getImageURLs && (
        <img
          src={getImageURLs[3]}
          alt="Broccoli"
          className="absolute -right-12 top-[120px] md:right-[30px] md:top-[240px] lg:right-[60px] lg:top-[240px] xl:right-[140px] xl:top-[180px] 2xl:right-[200px] w-[140px] sm:w-[170px] lg:w-[250px]"
        />
      )}
      {getImageURLs && (
        <img
          src={getImageURLs[4]}
          alt="Blueberries"
          className="absolute -right-[35px] top-[430px] md:right-[15px] xl:right-[5px] w-[100px] sm:w-[140px] md:w-[160px] xl:w-[180px] 2xl:w-[200px]"
        />
      )}
      {getImageURLs && (
        <img
          src={getImageURLs[5]}
          alt="Carrot"
          className="absolute -left-[35px] top-[440px] sm:top-[380px] md:-left-[20px] xl:left-[80px] w-[160px] sm:w-[190px] md:w-[200px] xl:w-[205px] 2xl:w-[210px]"
        />
      )}
    </div>
  );
};

export default HomePageHeaderImages;
