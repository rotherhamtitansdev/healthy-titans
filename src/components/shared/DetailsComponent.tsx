import React from "react";
import "../../App.css";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const DetailsComponent = (props: { children: React.ReactNode }) => (
  <div className="px-10 lg:px-6 pt-4 lg:container mx-auto">
    <Breadcrumbs styling="font-bold sm:text-[18px] pb-10" />
    <div className="bg-white rounded-2xl flex flex-wrap md:flex-nowrap gap-y-5 gap-x-0 md:gap-x-2 mt-[6rem] mb-[6rem]">
      {props.children}
    </div>
  </div>
);

export default DetailsComponent;
