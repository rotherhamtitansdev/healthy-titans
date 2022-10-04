import React from "react";
import "../../App.css";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";

const DetailsComponent = (props: { children: React.ReactNode }) => (
  <div className="container mx-auto">
    <Breadcrumbs styling="font-bold text-xs sm:text-base pb-10" />
    <div className="bg-white rounded-2xl w-[100rem] flex flex-wrap lg:flex-nowrap gap-y-5 gap-x-2 mt-[6rem] mb-[6rem]">
      {props.children}
    </div>
  </div>
);

export default DetailsComponent;
